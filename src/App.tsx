import type { Component } from "solid-js";
import Square from "./components/Square";
import Grid from "./components/Grid";

const App: Component = () => {
  return (
    <>
      <h1>Connect-4</h1>
      <main><Grid></Grid></main>
    </>
  );
};

export default App;
