import { MDXProvider } from "@mdx-js/react";
import { Heading, Paragraph } from "@navikt/ds-react";
import Bash from "../code/Bash";
import Import from "../code/Import";
import Preview from "../code-preview/Preview";
import Npm from "../npm/Npm";
import Toc from "../table-of-contents/TableOfContens";
/* import { Button } from "@navikt/ds-react"; */

const MdxWrapper = (props) => (
  <MDXProvider
    components={{
      h1: (props) => (
        <Heading id={props.children} size="xxl" level={1} {...props} />
      ),
      h2: (props) => (
        <Heading id={props.children} size="large" level={2} {...props} />
      ),
      h3: (props) => (
        <Heading id={props.children} size="small" level={3} {...props} />
      ),
      p: (props) => <Paragraph size="medium" {...props} />,
      Bash,
      Preview,
      Import,
      Npm,
      Toc,
    }}
    {...props}
  />
);

export default MdxWrapper;
