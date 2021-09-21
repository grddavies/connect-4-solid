import { Component, For } from "solid-js";
import Square from "./Square";

const Grid: Component = () => {
  const nrows = 6,
    ncols = 7,
    rows = [...Array(nrows).keys()],
    cols = [...Array(ncols).keys()];
  return (
    <div>
      <For each={rows}>
        {(i) => (
          <div className="board-row">
            <For each={cols}>
              {(j) => {
                return <Square />;
              }}
            </For>
          </div>
        )}
      </For>
    </div>
  );
};

export default Grid;
