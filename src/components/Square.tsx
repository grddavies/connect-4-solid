import { Component, ComponentProps } from "solid-js";

// Square value can be null, -1, 1 where -1/1 are colours
// Square inner changes colour with this value

export type SquareVal = 1 | -1 | null;

export interface SquareProps extends ComponentProps<"div"> {
  value: SquareVal;
  onClick: () => void;
}

const Square: Component<SquareProps> = (props: SquareProps) => {
  return (
    <div className="outer">
      <button
        className={"inner" + (props.value ? " inner-" + (props.value === 1 ? "p1" : "p2") : "")}
        onClick={() => props.onClick()}
      >{props.children}</button>
    </div>
  );
};

export default Square;
