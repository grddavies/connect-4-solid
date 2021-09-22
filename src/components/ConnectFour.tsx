import {
  Component,
  createSignal,
  Show,
} from "solid-js";

import Grid from "./Grid";
import { SquareVal } from "./Square";
import createLocalStore from "../utils/createLocalStore";
import { calculateWinner } from "../utils/game-utils";

interface C4Props {
  history: SquareVal[][];
  currentMoveNum: number;
  winner: SquareVal;
}

const ConnectFour: Component = () => {
  const nrow = 6,
    ncol = 7,
    [state, setState] = createLocalStore({
      history: [Array(nrow * ncol).fill(null)],
      currentMoveNum: 0,
      winner: null,
    }),
    [currentGrid, setCurrentGrid] = createSignal(
      state.history[state.currentMoveNum]
    ),
    initGame = () => {
      setState({
        history: [Array(nrow * ncol).fill(null)],
        currentMoveNum: 0,
        winner: null,
      });
      setCurrentGrid(Array(nrow * ncol).fill(null));
    },
    handleClick = (x: number) => {
      const grid = currentGrid().slice(),
        j = Math.floor(x / nrow), // index of col
        col = grid.slice(j * nrow, j * nrow + nrow);
      // Find index of first empty square in col
      let nonNullIndex = col.findIndex((e) => e !== null);
      // Skip if row full or game already over
      if (!nonNullIndex || state.winner) return;
      if (nonNullIndex === -1) {
        // No counters in col
        nonNullIndex = nrow;
      }
      // update first empty square in column
      const targetLoc = j * nrow + nonNullIndex -1;
      grid[targetLoc] = state.currentMoveNum % 2 === 0 ? 1 : -1;
      // Update game state
      setState((state) => ({
        history: state.history.concat([grid]),
        currentMoveNum: state.currentMoveNum + 1,
        winner: calculateWinner(grid, nrow),
      }));
      // Update current grid
      setCurrentGrid(grid);
    };
  return (
    <div>
    <Show when={!state.winner}>
      <Show when={state.currentMoveNum % 2 === 0} fallback="Yellow's">Red's</Show> turn
    </Show>
      <Grid gridvals={currentGrid()} clickhandler={(i) => handleClick(i)} />
      <button onClick={() => initGame()}>New Game</button>
      <Show when={state.winner}>
          Winner: <Show when={state.winner === 1} fallback="Yellow">Red</Show>
      </Show>
    </div>
  );
};

export default ConnectFour;
export { C4Props };
