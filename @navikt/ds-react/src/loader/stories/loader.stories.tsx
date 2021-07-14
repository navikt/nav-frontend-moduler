import React, { useState } from "react";
import { Loader } from "../index";
import { Button } from "../../index";
import { Meta } from "@storybook/react/types-6-0";
export default {
  title: "ds-react/loader",
  component: Loader,
} as Meta;

export const All = () => {
  return (
    <div>
      <h1>Loader</h1>
      <Loader />

      <h2>Transparent</h2>
      <Loader transparent />

      <h2>Sizing</h2>
      <Loader size="2xl" />
      <Loader size="xl" />
      <Loader size="l" />
      <Loader size="m" />
      <Loader size="s" />
      <Loader size="xs" />
      <h2>Sizing transparent</h2>
      <Loader size="2xl" transparent />
      <Loader size="xl" transparent />
      <Loader size="l" transparent />
      <Loader size="m" transparent />
      <Loader size="s" transparent />
      <Loader size="xs" transparent />
      <div style={{ backgroundColor: "#c9c9c9" }}>
        <h2>Varianter</h2>
        <Loader size="xl" variant="neutral" />
        <Loader size="xl" variant="interaction" />
        <Loader size="xl" variant="inverted" />
        <h2>Varianter transparent</h2>
        <Loader size="xl" variant="neutral" transparent />
        <Loader size="xl" variant="interaction" transparent />
        <Loader size="xl" variant="inverted" transparent />
        <h2>Brukt i knapper</h2>
      </div>
      <div>
        <Button>
          <span>Laster...</span>
          <Loader />
        </Button>{" "}
        <Button size="s">
          <span>Laster...</span>
          <Loader />
        </Button>
        <h2>Variants</h2>
        <Button variant="secondary">
          <span>Laster...</span>
          <Loader />
        </Button>{" "}
        <Button variant="action">
          <span>Laster...</span>
          <Loader />
        </Button>{" "}
        <Button variant="danger">
          <span>Laster...</span>
          <Loader />
        </Button>
      </div>
    </div>
  );
};

export const LoaderDemoShort = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "30rem",
        textAlign: "center",
        rowGap: "0.5rem",
      }}
      aria-live="polite"
      aria-busy="true"
    >
      <Loader
        size="xl"
        title="Adipisicing non voluptate aute in ea eu officia duis fugiat aute
        pariatur et deserunt nisi."
      />
      <span>Henter innholdet...</span>
    </div>
  );
};

export const LoaderDemoLong = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <button onClick={() => setLoading(!loading)}>Toggle Loading</button>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "30rem",
          textAlign: "center",
          rowGap: "0.5rem",
        }}
        aria-live="polite"
        aria-busy={loading}
      >
        {loading && (
          <>
            <Loader
              size="xl"
              title="Adipisicing non voluptate aute in ea eu officia duis fugiat aute
        pariatur et deserunt nisi."
            />
            <span>
              Adipisicing non voluptate aute in ea eu officia duis fugiat aute
              pariatur et deserunt nisi.
            </span>
          </>
        )}
      </div>
    </div>
  );
};
