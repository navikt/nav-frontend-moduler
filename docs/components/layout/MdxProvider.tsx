import { MDXProvider } from "@mdx-js/react";
import { Heading, Paragraph } from "@navikt/ds-react";
import Bash from "../code/Bash";
import Example from "../example/Example";
import { Button } from "@navikt/ds-react";
import reactElementToJSXString from "react-element-to-jsx-string";
import React from "react";

const toStr = (elem) => reactElementToJSXString(elem);

const MdxWrapper = (props) => (
  <MDXProvider
    components={{
      h1: (props) => <Heading size="xxl" level={1} {...props} />,
      h2: (props) => <Heading size="large" level={2} {...props} />,
      h3: (props) => <Heading size="small" level={3} {...props} />,
      p: (props) => <Paragraph size="medium" {...props} />,
      Bash,
      Example,
      Button,
      ToStr: (a) => toStr(a),

      /*a: Lenke,
      code: (props) => <Codeblock {...props} />,
      inlineCode: (props) => <InlineCode {...props} />,
      InlineCode,
      Example, */
    }}
    {...props}
  />
);

export default MdxWrapper;
