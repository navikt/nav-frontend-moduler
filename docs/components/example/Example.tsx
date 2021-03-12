import React, { useState } from "react";
import Tabs from "./Tabs";
import style from "./example.module.css";
import { renderToString } from "react-dom/server";
import Bash from "../code/Bash";
import Prettier from "prettier/standalone";
import ParserBabel from "prettier/parser-babel";
import reactElementToJSXString from "react-element-to-jsx-string";
import * as DSReact from "@navikt/ds-react";

const prettierOptions = {
  semi: true,
  parser: "babel",
  plugins: [ParserBabel],
  jsxBracketSameLine: false,
  printWidth: 30,
};

interface ExampleProps {
  html?: boolean;
  children: React.ReactElement;
  text?: string;
}

const Example = ({ html = true, children, text, ...props }: ExampleProps) => {
  const [tab, setTab] = useState(0);
  const handleChange = (x: number) => {
    setTab(x);
  };

  const recursiveMap = (children: React.ReactNode) => {
    return React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) {
        return child;
      }

      if (child.props.children) {
        child = React.createElement(child.props.mdxType, {
          children: recursiveMap(child.props.children),
          ...child.props,
        });
      }

      return child;
    });
  };

  let parsed = recursiveMap(children);
  parsed = parsed.length > 1 ? <>{parsed}</> : parsed[0];

  return (
    <div className={style.wrapper}>
      <div className={style.preview}>{children}</div>
      <Tabs html={html} onChange={(x) => handleChange(x)} />
      {tab === 0 && (
        <Bash
          code={Prettier.format(
            text ||
              reactElementToJSXString(parsed, {
                filterProps: ["mdxType", "originalType"],
              }),
            prettierOptions
          ).slice(0, -2)}
          language="html"
          copy
        />
      )}

      {html && tab === 1 && (
        <Bash
          code={Prettier.format(
            renderToString(
              React.Children.count(children) > 1 ? (
                <div>{children}</div>
              ) : (
                children
              )
            ),
            prettierOptions
          )
            .slice(0, -2)
            .replace(` data-reactroot=""`, "")}
          language="html"
          copy
        />
      )}
    </div>
  );
};

export default Example;
