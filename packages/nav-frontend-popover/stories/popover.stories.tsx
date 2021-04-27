import React, { useEffect, useRef, useState } from "react";
import * as ReactDOM from "react-dom";
import Popover, { PopoverBase, PopoverOrientering } from "../src/popover";

import { Meta } from "@storybook/react/types-6-0";

export default {
  title: "nav-frontend/Popover",
  component: Popover,
  parameters: {
    chromatic: { disable: true },
  },
} as Meta;

const Template = ({ ...props }) => {
  const [anchor, setAnchor] = useState(undefined);
  const popoverRef = useRef<any>();
  useEffect(() => {
    ReactDOM.findDOMNode(popoverRef.current).click();
  });
  return (
    <>
      <button
        ref={popoverRef}
        onClick={(e) => setAnchor(e.currentTarget)}
        style={{ width: "50px" }}
      >
        open
      </button>
      <Popover ankerEl={anchor} {...props}>
        <p>Dette er en popover.</p>
      </Popover>
    </>
  );
};

export const All = () => {
  return (
    <div
      style={{
        display: "grid",
        gridAutoColumns: "100%",
        gridAutoRows: "30px",
        rowGap: "4rem",
        margin: "4rem",
      }}
    >
      <Template />
      <Template utenPil />
    </div>
  );
};

export const PopoverBaseExample = () => {
  const [anchor, setAnchor] = useState(undefined);
  const popoverRef = useRef<any>();

  return (
    <div style={{ width: "100vw" }}>
      <button
        ref={popoverRef}
        onClick={(e) => setAnchor(e.currentTarget)}
        style={{ width: "50px" }}
      >
        open
      </button>
      <PopoverBase
        orientering={PopoverOrientering.Under}
        posisjon={{ top: 0, left: 100, pilLeft: 10 }}
      >
        <div>
          <p>Dette er en popover.</p>
        </div>
      </PopoverBase>
    </div>
  );
};
