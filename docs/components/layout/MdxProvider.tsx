import { MDXProvider } from "@mdx-js/react";
import { Heading, Paragraph } from "@navikt/ds-react";
import Bash from "../code/Bash";
import Example from "../example/Example";
/* import { Button } from "@navikt/ds-react"; */

const MdxWrapper = (props) => (
  <MDXProvider
    components={{
      h1: (props) => <Heading size="xxl" level={1} {...props} />,
      h2: (props) => <Heading size="large" level={2} {...props} />,
      h3: (props) => <Heading size="small" level={3} {...props} />,
      p: (props) => <Paragraph size="medium" {...props} />,
      Bash,
      Example,
    }}
    {...props}
  />
);

export default MdxWrapper;
