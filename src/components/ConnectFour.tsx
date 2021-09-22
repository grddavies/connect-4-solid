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
  const initState: C4Props = {
    history: [Array(7 * 6).fill(null)],
    currentMoveNum: 0,
    winner: null,
  };
  const [state, setState] = createLocalStore(initState),
    [currentGrid, setCurrentGrid] = createSignal(
      state.history[state.currentMoveNum]
    ),
    // initGame = () => {
    //   setState({
    //     history: [Array(9).fill(null)],
    //     currentMoveNum: 0,
    //     winner: null,
    //   });
    //   setCurrent(Array(9).fill(null));
    // },
    handleClick = (i: number) => {
      const grid = currentGrid().slice();
      // // ignore clicks on filled rows or after end
      // if (calculateWinner(squares) || squares[i]) {
      //   return;
      // }
      // update square being clicked
      grid[i] = state.currentMoveNum % 2 === 0 ? 1 : -1;
      setState((state) => ({
        history: state.history.concat([grid]),
        currentMoveNum: state.currentMoveNum + 1,
        winner: null, // calculate winner
      }));
      setCurrentGrid(grid);
    };
  console.log("c4grid:", currentGrid());
  return <Grid gridvals={currentGrid()} clickhandler={(i) => handleClick(i)} />;
};

export default ConnectFour;
export { C4Props };
