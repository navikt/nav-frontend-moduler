import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import { DropdownMenu, DropdownMenuItem } from "../src/index";

export default {
  title: "@navikt/dropdown-menu",
  component: DropdownMenu,
};

export const All = () => {
  return (
    <>
      <h1>Dropdown menu</h1>
      <Router>
        <DropdownMenu>
          <DropdownMenuItem href="#">ahref</DropdownMenuItem>
          <DropdownMenuItem component={Link} to="/">
            Link
          </DropdownMenuItem>
          <DropdownMenuItem component="button" onClick={() => {}}>
            button
          </DropdownMenuItem>
        </DropdownMenu>
      </Router>
    </>
  );
};
