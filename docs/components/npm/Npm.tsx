import getConfig from "next/config";
import { Link } from "@navikt/ds-react";
import { ExternalLink } from "@navikt/ds-icons";
import Example from "../example/Example";
import Bash from "../code/Bash";
import style from "./npm.module.css";

/* interface Props {} */

const Npm = ({ name }: { name: string }) => {
  const { publicRuntimeConfig } = getConfig();

  const packs = publicRuntimeConfig.staticFolder.filter(
    (pack) => pack.name === name
  );
  return (
    <div>
      {packs.map(({ name, data }) => (
        <>
          {/* <Link
            style={{ columnGap: "0.5rem" }}
            href={`https://www.npmjs.com/package/${name}`}
            target="_blank"
          >
            <ExternalLink style={{ fontSize: "1.5rem" }} />
            {"NPM-pakke v" + data.version}
          </Link> */}
          <span className={style.badges}>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://www.npmjs.com/package/${name}`}
            >
              <img src={`https://badgen.net/npm/v/${name}`} alt="123" />
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href={`https://bundlephobia.com/result?p=${name}`}
            >
              <img
                src={`https://badgen.net/bundlephobia/tree-shaking/${name}`}
                alt="123"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://bundlephobia.com/result?p=${name}`}
            >
              <img
                src={`https://badgen.net/bundlephobia/min/${name}`}
                alt="123"
              />
            </a>
          </span>
          <Bash code={`import { Button } from "${name}"`} language="jsx" copy />
          <Bash
            code={`<link src="https://unpkg.com/${name}@${data.version}/" />`}
            language="html"
            copy
          />

          {/* <Example
            text="import { Button } from '@navikt/ds-react'"
            html={
              name.includes("@navikt/ds-") &&
              `<link src="https://unpkg.com/${name}@${data.version}/" />`
            }
          /> */}
        </>
      ))}
    </div>
  );
};

export default Npm;
