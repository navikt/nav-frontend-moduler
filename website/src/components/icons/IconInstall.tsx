import React from "react";
import {
  Ingress,
  Systemtittel,
  Undertittel,
  Normaltekst,
} from "nav-frontend-typografi";
import Lenke from "nav-frontend-lenker";
import Code, { Bash, copyImport, InlineCode } from "../code/Code";
import "./styles.less";

const IconInstall = () => {
  return (
    <div className="iconPage__install">
      <Systemtittel className="iconPage__headlines">Installering</Systemtittel>
      <Bash
        className="iconPage__installBash"
        onClick={(e) => copyImport(e, "yarn add @navikt/ds-icons")}
      >
        yarn add @navikt/ds-icons
      </Bash>
      <Bash
        className="iconPage__installBash"
        onClick={(e) => copyImport(e, "npm i @navikt/ds-icons")}
      >
        npm i @navikt/ds-icons
      </Bash>

      <Ingress>
        Ikonene er tilgjengeliggjort for React og SVG.
        <Ingress>
          Husk å sjekke at prosjektet støtter lasting av SVG med riktige loaders
          eks{" "}
          <Lenke href="https://www.npmjs.com/package/file-loader">
            file-loader
          </Lenke>{" "}
          eller{" "}
          <Lenke href="https://www.npmjs.com/package/@svgr/webpack">
            @svgr/webpack
          </Lenke>
        </Ingress>
      </Ingress>
      <Ingress>
        React komponenten tar imot props og setter dem direkte på SVG elementet.
        Husk <InlineCode>`aria-label`</InlineCode>,
        <InlineCode>`role`</InlineCode>, <InlineCode>`focusable`</InlineCode>{" "}
        propsene for en tilgjengelig brukeropplevelse.
      </Ingress>

      <Systemtittel className="iconPage__headlines">Bruk</Systemtittel>
      <Undertittel className="iconPage__headlines">React</Undertittel>
      <Normaltekst>
        React implementasjonen av ikonene har height og width satt til{" "}
        <InlineCode>1em</InlineCode>. Dette betyr at man må sette font-size på
        ikonet/parent for å endre størrelse eller endre width og height med
        props.
      </Normaltekst>
      <Code popupUnder className="language-jsx">
        {`import { System } from '@navikt/ds-icons';`}
      </Code>
      <Code popupUnder className="language-jsx">
        {`<System aria-label="System ikon" role="img"/>`}
      </Code>
      <Code popupUnder className="language-jsx">
        {`<System style={{"fontSize": "24px"}} aria-label="System ikon" role="img"/>`}
      </Code>
      <Undertittel className="iconPage__headlines">SVG</Undertittel>
      <Normaltekst>
        SVG versjonen av ikonene har height og width satt til{" "}
        <InlineCode>24</InlineCode> og path har{" "}
        <InlineCode>fill="#3E3832"</InlineCode>. Dette fører til litt
        komplikasjoner for styling og vi anbefaler å heller laste ned ikonet for
        seg selv hvis man ikke bruker react versjonen og da tilpasser selve SVG
        en.
      </Normaltekst>
      <Code popupUnder className="language-jsx">
        {`import System from '@navikt/ds-icons/svg/system.svg';`}
      </Code>
      <Code popupUnder className="language-jsx">
        {`<img src={System} alt="System ikon" />`}
      </Code>
    </div>
  );
};

export default IconInstall;
