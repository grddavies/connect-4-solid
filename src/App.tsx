import type { Component } from "solid-js";
import ConnectFour from "./components/ConnectFour";

const App: Component = () => {
  return (
    <main>
      <h1>Connect-4</h1>
      <ConnectFour></ConnectFour>
    </main>
  );
};

export default App;
