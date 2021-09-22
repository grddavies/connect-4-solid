import { Component, ComponentProps } from "solid-js";

// Square value can be null, -1, 1 where -1/1 are colours
// Square inner changes colour with this value

export type SquareVal = 1 | -1 | null;

export interface SquareProps extends ComponentProps<"div"> {
  value: SquareVal;
}

const Square: Component<SquareProps> = (props: SquareProps) => {
  let v = props.value;
  return (
    <div className="outer">
      <div
        className={"inner" + (v ? " inner-" + (v === 1 ? "p1" : "p2") : "")}
      ></div>
    </div>
  );
};

export default Square;
