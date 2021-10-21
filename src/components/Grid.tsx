import { Component, ComponentProps, For } from "solid-js";
import Square, { SquareVal } from "./Square";

interface GridProps extends ComponentProps<"div"> {
  // linearized grid
  gridvals: SquareVal[];
  clickhandler: (i: number) => void;
  ncol: number;
  nrow: number;
}

const Grid: Component<GridProps> = (props: GridProps) => {
  const nrows = props.nrow,
    ncols = props.ncol,
    rows = [...Array(nrows).keys()],
    cols = [...Array(ncols).keys()];
  return (
    <div>
      <For each={rows}>
        {(i) => (
          <div className="grid-row">
            <For each={cols}>
              {(j) => {
                return (
                  <Square
                    value={props.gridvals[i + nrows * j]}
                    onClick={() => props.clickhandler(i + nrows * j)}
                  />
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
