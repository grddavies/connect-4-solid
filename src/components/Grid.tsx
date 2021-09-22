import { Component, For } from "solid-js";
import Square, { SquareVal } from "./Square";

const Grid: Component = () => {
  const nrows = 6,
    ncols = 7,
    rows = [...Array(nrows).keys()],
    cols = [...Array(ncols).keys()],
    vals: SquareVal[] = [null, -1, 1];
  return (
    <div>
      <For each={rows}>
        {(i) => (
          <div className="grid-row">
            <For each={cols}>
              {(j) => {
                  const foo = Math.floor(Math.random() * vals.length)
                  return (
                  <Square
                    value={vals[foo]}
                  ></Square>
                );
              }}
            </For>
          </div>
        )}
      </For>
    </div>
  );
};

export default Grid;
