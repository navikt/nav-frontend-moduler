import React, { useState } from "react";
import Tabs from "./Tabs";
import style from "./example.module.css";
import { renderToString } from "react-dom/server";
import Bash from "../code/Bash";
import Prettier from "prettier/standalone";
import ParserBabel from "prettier/parser-babel";

const prettierOptions = {
  semi: true,
  parser: "babel",
  plugins: [ParserBabel],
  jsxBracketSameLine: false,
  printWidth: 30,
};

interface ExampleProps {
  component: React.ReactElement;
  react: string;
  html?: boolean;
}

const Example = ({
  component: Component,
  react,
  html = true,
  ...props
}: ExampleProps) => {
  const [tab, setTab] = useState(0);
  console.log(typeof react);
  const handleChange = (x: number) => {
    setTab(x);
  };

  /* console.log(Prettier.format(react, prettierOptions).slice(0, -2)); */
  return (
    <div className={style.wrapper}>
      {Component}
      <Tabs html={html} onChange={(x) => handleChange(x)} />
      {tab === 0 && (
        <Bash
          code={Prettier.format(react, prettierOptions).slice(0, -2)}
          language="html"
          copy
        />
      )}
      {html && tab === 1 && (
        <Bash
          code={Prettier.format(
            renderToString(Component),
            prettierOptions
          ).slice(0, -2)}
          language="html"
          copy
        />
      )}
    </div>
  );
};

export default Example;
