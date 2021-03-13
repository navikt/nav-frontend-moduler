import getConfig from "next/config";
import style from "./proptable.module.css";
import { ComponentDoc } from "react-docgen-typescript";
import { Heading } from "@navikt/ds-react";

interface ProptableProps {
  component: string;
}

const Proptable = ({ component, ...props }: ProptableProps) => {
  /* console.log(doc); */
  const { publicRuntimeConfig } = getConfig();

  const getDoc = () => {
    const index = publicRuntimeConfig.reactDocs.findIndex((doc) =>
      doc.docs.some(
        (comp) => comp.displayName.toLowerCase() === component.toLowerCase()
      )
    );
    if (index !== -1) {
      const docs = publicRuntimeConfig.reactDocs[index].docs;
      const i = docs.findIndex(
        (doc) => doc.displayName.toLowerCase() === component.toLowerCase()
      );

      const keys = Object.keys(docs[i].props).sort();
      const doc = keys.map((key) => ({
        propName: key,
        ...docs[i].props[key],
      }));
      return doc;
    }
    return undefined;
  };

  const docs = getDoc();

  /* console.log(docs); */

  return docs ? (
    <>
      <Heading level={2} size="medium">
        Proptable
      </Heading>
      <div className={style.wrapper}>
        <table className={"tabell"}>
          <thead>
            <tr>
              <th>Property</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            {docs
              .filter((item) => item.name.indexOf("aria-") !== 0)
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((propTypeDoc, key) => (
                <PropTypeTableRow
                  val={{
                    ...propTypeDoc,
                    defaultValue: propTypeDoc.defaultValue
                      ? propTypeDoc.defaultValue
                      : "-",
                  }}
                  key={key} // eslint-disable-line react/no-array-index-key
                />
              ))}
          </tbody>
        </table>
      </div>
    </>
  ) : null;
};

const parsePropValue = (val) => {
  if (val && typeof val === "object") {
    if (val.name === "enum") {
      return val.value.map((x) => x.value).join(" | ");
    }
    val = val.name || val.value; // eslint-disable-line no-param-reassign
  }
  if (val === null || typeof val === "undefined" || val.length <= 0) {
    return "-";
  }
  return val.toString();
};

const PropTypeTableRow = (props) => {
  return (
    <tr>
      <td>
        <div>
          <strong>{parsePropValue(props.val.name)}</strong>
        </div>
      </td>
      <td>
        <div>
          <code>{parsePropValue(props.val.type)}</code>
        </div>
      </td>
      <td>
        <div>{parsePropValue(props.val.defaultValue)}</div>
      </td>
    </tr>
  );
};

export default Proptable;
