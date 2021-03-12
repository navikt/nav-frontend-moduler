import React, { useState } from "react";
import Tabs from "./Tabs";
import style from "./example.module.css";
import { renderToString } from "react-dom/server";
import Bash from "../code/Bash";
import Prettier from "prettier/standalone";
import ParserBabel from "prettier/parser-babel";
import reactElementToJSXString from "react-element-to-jsx-string";

const prettierOptions = {
  semi: true,
  parser: "babel",
  plugins: [ParserBabel],
  jsxBracketSameLine: false,
  printWidth: 30,
};

interface ExampleProps {
  children?: React.ReactElement;
  html?: string;
  text?: string;
}

const Example = ({ html, children, text, ...props }: ExampleProps) => {
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

  const parseChildren = () => {
    const parsed = recursiveMap(children);
    return parsed.length > 1 ? <>{parsed}</> : parsed[0];
  };

  return (
    <div className={style.wrapper}>
      {!!children && <div className={style.preview}>{children}</div>}
      <Tabs html={!!html || !!children} onChange={(x) => handleChange(x)} />
      {tab === 0 && (
        <Bash
          code={Prettier.format(
            text ||
              (!!children &&
                reactElementToJSXString(parseChildren(), {
                  filterProps: ["mdxType", "originalType"],
                })) ||
              "",
            prettierOptions
          ).slice(0, -2)}
          language="jsx"
          copy
        />
      )}

      {(!!html || !!children) && tab === 1 && (
        <Bash
          code={Prettier.format(
            html ||
              (!!children &&
                renderToString(
                  React.Children.count(children) > 1 ? (
                    <div>{children}</div>
                  ) : (
                    children
                  )
                )),
            prettierOptions
          )
            .slice(0, -2)
            .replace(` data-reactroot=""`, "")}
          language="jsx"
          copy
        />
      )}
    </div>
  );
};

export default Example;
