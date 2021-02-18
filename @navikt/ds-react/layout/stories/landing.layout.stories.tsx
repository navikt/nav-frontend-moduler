import * as React from "react";
import { Layout } from "../src/index";
import { ContentContainer } from "../../content-container/src";
import { Cell, Grid } from "../../grid/src";
import { Normaltekst, Systemtittel, Undertittel } from "nav-frontend-typografi";
import Panel from "nav-frontend-paneler";
import "./components/styles.css";

export default {
  title: "@navikt/layout/LandingPage",
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

export const LandingPage = () => (
  <>
    <div className={"banner"}>
      <ContentContainer>
        <div className={"banner-content"}>
          <Systemtittel>Landingsside</Systemtittel>
          <Normaltekst>
            Bruk egne livssituasjonsfarger med enkel illustrasjon
          </Normaltekst>
        </div>
      </ContentContainer>
    </div>
    <ContentContainer>
      <Grid>
        <Cell xs={12} md={6} lg={4}>
          <Panel>Panel 1</Panel>
        </Cell>
        <Cell xs={12} md={6} lg={4}>
          <Panel>Panel 2</Panel>
        </Cell>
        <Cell xs={12} md={6} lg={4}>
          <Panel>Panel 3</Panel>
        </Cell>
        <Cell xs={12} md={6} lg={4}>
          <Panel>Panel 4</Panel>
        </Cell>
        <Cell xs={12} md={6} lg={4}>
          <Panel>Panel 5</Panel>
        </Cell>
        <Cell xs={12} md={6} lg={4}>
          <Panel>Panel 6</Panel>
        </Cell>
      </Grid>
    </ContentContainer>
  </>
);
