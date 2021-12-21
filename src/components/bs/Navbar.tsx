import { Component, JSXElement, Show } from "solid-js";

export interface NavProps {
  brand?: string;
  children?: JSXElement;
}

const Navbar: Component<NavProps> = (props) => (
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <Show when={props.brand}>
        <a class="navbar-brand" href="#">
          {props.brand}
        </a>
      </Show>
      <ul class="navbar-nav flex-row flex-wrap ms-md-auto">
        {props.children}
      </ul>
    </div>
  </nav>
);
export default Navbar;
