import * as React from "react";
import { Layout } from "../src/index";
import { Left } from "./components/sections/Left";
import { Main } from "./components/sections/Main";
import { Right } from "./components/sections/Right";
import { ContentContainer } from "../../content-container/src";
import "./components/styles.css";

export default {
  title: "@navikt/layout/Article",
  component: { Layout },
  loaders: [
    async () => {
      var script = document.createElement("script");
      script.src = "https://www.nav.no/dekoratoren/client.js";
      document.body.appendChild(script);
    },
  ],
  decorators: [
    (Story) => (
      <>
        <div id="decorator-header" />
        <Story />
        <div id="decorator-footer" />
      </>
    ),
  ],
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
  <ContentContainer>
    <Layout>
      <Layout.Section left sticky>
        <Left />
      </Layout.Section>
      <Layout.Section>
        <Main />
      </Layout.Section>
      <Layout.Section right sticky>
        <Right />
      </Layout.Section>
    </Layout>
  </ContentContainer>
);

export const TwoColumnsLeft = () => (
  <ContentContainer>
    <Layout>
      <Layout.Section left sticky>
        <Left />
      </Layout.Section>
      <Layout.Section>
        <Main />
      </Layout.Section>
    </Layout>
  </ContentContainer>
);

export const TwoColumnsRight = () => (
  <ContentContainer>
    <Layout>
      <Layout.Section>
        <Main />
      </Layout.Section>
      <Layout.Section right sticky>
        <Right />
      </Layout.Section>
    </Layout>
  </ContentContainer>
);

export const OneColumn = () => (
  <ContentContainer>
    <Layout>
      <Layout.Section>
        <Main />
      </Layout.Section>
    </Layout>
  </ContentContainer>
);
