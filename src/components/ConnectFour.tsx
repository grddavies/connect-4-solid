import {
  Component,
  createMemo,
  createSignal,
  Show,
  Switch,
  Match,
} from "solid-js";

import Grid from "./Grid";
import { SquareVal } from "./Square";
import createLocalStore from "../utils/createLocalStore";

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
        j = Math.floor(x / nrow),
        i = x % nrow,
        col = grid.slice(j * nrow, j * nrow + nrow);
      let nonNullIndex = col.findIndex((e) => e !== null);

      // skip if row full
      if (!nonNullIndex) return;
      console.log("x", x);
      console.log("i", i);
      console.log("j", j);
      console.log("nonNullIndex", nonNullIndex);
      if (nonNullIndex === -1) {
        // No counters in col
        nonNullIndex = nrow;
      }
      const targetLoc = j * nrow + nonNullIndex -1;
      console.log("targetLoc", targetLoc);
      // colnum
      // // ignore clicks on filled rows or after end
      // if (calculateWinner(squares) || squares[i]) {
      //   return;
      // }
      // update first empty square in column
      grid[targetLoc] = state.currentMoveNum % 2 === 0 ? 1 : -1;
      setState((state) => ({
        history: state.history.concat([grid]),
        currentMoveNum: state.currentMoveNum + 1,
        winner: null, // calculate winner
      }));
      setCurrentGrid(grid);
    };
  return (
    <div>
      <Grid gridvals={currentGrid()} clickhandler={(i) => handleClick(i)} />
      <button onClick={() => initGame()}>New Game</button>
    </div>
  );
};

export default ConnectFour;
export { C4Props };
