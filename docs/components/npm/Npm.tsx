import getConfig from "next/config";
import { Link } from "@navikt/ds-react";
import { ExternalLink } from "@navikt/ds-icons";
import Example from "../example/Example";

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
          <Link
            style={{ columnGap: "0.5rem" }}
            href={`https://www.npmjs.com/package/${name}`}
            target="_blank"
          >
            <ExternalLink style={{ fontSize: "1.5rem" }} />
            {"NPM-pakke v" + data.version}
          </Link>
          <Example
            text="import { Button } from '@navikt/ds-react'"
            html={
              name.includes("@navikt/ds-") &&
              `<link src="https://unpkg.com/${name}@${data.version}/" />`
            }
          />
        </>
      ))}
    </div>
  );
};

export default Npm;
