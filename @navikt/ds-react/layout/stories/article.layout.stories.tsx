import * as React from "react";
import { Layout } from "../src/index";
import { Left } from "./components/sections/Left";
import { Main } from "./components/sections/Main";
import { Right } from "./components/sections/Right";
import "./components/styles.css";

export default {
  title: "@navikt/layout/Article",
  component: { Layout },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "NAV gray",
      values: [
        {
          name: "NAV gray",
          value: "#f1f1f1",
        },
        {
          name: "white",
          value: "#ffffff",
        },
      ],
    },
  },
};

export const ThreeColumns = () => (
  <Layout>
    <Layout.Section white padding left>
      <Left />
    </Layout.Section>
    <Layout.Section white padding>
      <Main />
    </Layout.Section>
    <Layout.Section white padding right>
      <Right />
    </Layout.Section>
  </Layout>
);

export const TwoColumns = () => (
  <Layout>
    <Layout.Section white padding left>
      <Left />
    </Layout.Section>
    <Layout.Section white padding>
      <Main />
    </Layout.Section>
  </Layout>
);

export const OneColumn = () => (
  <Layout>
    <Layout.Section padding white>
      <Main />
    </Layout.Section>
  </Layout>
);