import React, { useState } from "react";
import Tabs from "./Tabs";
import style from "./example.module.css";
import cl from "classnames";
import { renderToString } from "react-dom/server";
import reactElementToJSXString from "react-element-to-jsx-string";
import Bash from "../code/Bash";
/* import Prettier from "prettier/standalone";
import ParserBabel from "prettier/parser-babel"; */
/* import format from 'prettier-format' */
const beautify_html = require("js-beautify").html;

type ExampleVersions = "Html" | "React";

interface ExampleProps {
  component: React.ReactElement;
  versions: ExampleVersions[];
}

const Example = ({
  component: Component,
  versions = ["React", "Html"],
  ...props
}: ExampleProps) => {
  const [tab, setTab] = useState(0);

  const handleChange = (x: number) => {
    setTab(x);
  };

  return (
    <div className={style.wrapper}>
      {Component}
      <Tabs versions={versions} onChange={(x) => handleChange(x)} />
      {tab === 0 && (
        <Bash
          code={beautify_html(reactElementToJSXString(Component), {
            indent_size: 2,
            space_in_empty_paren: true,
          })}
          language="jsx"
        />
      )}
      {tab === 1 && (
        <Bash
          code={beautify_html(renderToString(Component), {
            indent_size: 2,
            space_in_empty_paren: true,
            break_chained_methods: true,
            good_stuff: true,
            /* indent_level: 4, */
          })}
          language="html"
        />
      )}
    </div>
  );
};

export default Example;
