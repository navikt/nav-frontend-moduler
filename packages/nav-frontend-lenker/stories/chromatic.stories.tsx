import React, { useEffect, useRef } from "react";
import * as ReactDOM from "react-dom";
import Lenke from "../src/lenke";
import { Meta } from "@storybook/react/types-6-0";

export default {
  title: "Lenke/All",
  component: Lenke,
} as Meta;

export const All = () => {
  const lenkeref = useRef<any>();
  useEffect(() => {
    ReactDOM.findDOMNode(lenkeref.current).focus();
  });
  return (
    <>
      <Lenke href="#">Lenketekst default</Lenke>
      <br />
      <br />
      <Lenke href="#" ref={lenkeref}>
        Lenketekst fokusert
      </Lenke>
    </>
  );
};
