import { Component, ComponentProps, For } from "solid-js";
import Square, { SquareVal } from "./Square";

interface GridProps extends ComponentProps<"div"> {
  // array of cols
  gridvals: SquareVal[];
  clickhandler: (i: number) => void;
}

const Grid: Component<GridProps> = (props: GridProps) => {
  const nrows = 6,
    ncols = 7,
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
