import { Component } from "solid-js";

// Square value can be null, -1, 1 where -1/1 are colours
// Square inner changes colour with this value

const Square: Component = () => (
<div className="square-outer">
    <div className="square-inner">
    </div>
</div>
);

export default Square