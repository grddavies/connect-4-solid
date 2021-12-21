import { Component, ComponentProps, For } from "solid-js";
import Square, { SquareVal } from "./Square";

interface GridProps extends ComponentProps<"div"> {
  // linearized grid
  gridvals: SquareVal[];
  clickhandler: (i: number) => void;
  ncol: number;
  nrow: number;
}

const borderClass = (i, j, rows, cols) => {
  let top = i === rows.at(0) ? "border-h" : "",
    bottom = i === rows.at(-1) ? "border-h" : "",
    left = j === cols.at(0) ? "border-v" : "",
    right = j === cols.at(-1) ? "border-v" : "",
    corner = 
      (top && left
        ? "border-corner border-tl"
        : top && right
        ? "border-corner border-tr"
        : bottom && left
        ? "border-corner border-bl"
        : bottom && right
        ? "border-corner border-br"
        : "");
  return [top, bottom, left, right, corner].filter((x) => x !== "").join(" ")
};

const Grid: Component<GridProps> = (props: GridProps) => {
  const nrows = props.nrow,
    ncols = props.ncol,
    rows = [...Array(nrows + 2).keys()], // +2 for borders
    cols = [...Array(ncols + 2).keys()]; // +2 for borders
  return (
    <div>
      <For each={rows}>
        {(i) => {
          return (
            <div className="grid-row">
              <For each={cols}>
                {(j) => {
                  let thisborderClass = borderClass(i, j, rows, cols),
                    sqid = i - 1 + nrows * (j - 1);
                  if (thisborderClass) {
                    return <div class={thisborderClass}></div>;
                  } else {
                    return (
                      <Square
                        value={props.gridvals[sqid]}
                        onClick={() => props.clickhandler(sqid)}
                      />
                    );
                  }
                }}
              </For>
            </div>
          );
        }}
      </For>
    </div>
  );
};

export default Grid;
