import React from "react";
import { Chevron } from "../index";

export default {
  title: "ds-react/chevron",
  component: Chevron,
};

export const All = () => {
  return (
    <>
      <h2>Chevron</h2>
      <Chevron variant="back" />
      <Chevron variant="next" />
      <Chevron variant="collapse" />
      <Chevron variant="expand" />

      <h2>Chevron Filled</h2>
      <Chevron variant="back" filled />
      <Chevron variant="next" filled />
      <Chevron variant="collapse" filled />
      <Chevron variant="expand" filled />
    </>
  );
};
