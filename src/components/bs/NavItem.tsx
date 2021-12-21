import { Component, JSXElement } from "solid-js";

interface NavItemProps {
    children?: JSXElement;
  }

const NavItem: Component<NavItemProps> = (props: NavItemProps) => (
    <li class="nav-item col-6 col-md-auto">
    {props.children}
    </li>
);

export default NavItem