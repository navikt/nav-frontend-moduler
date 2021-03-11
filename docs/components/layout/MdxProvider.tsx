import { MDXProvider } from "@mdx-js/react";

const MdxWrapper = (props) => (
  <MDXProvider
    components={
      {
        /* h1: Innholdstittel,
      h2: Systemtittel,
      h3: (props) => <Undertittel {...props} tag="h3" />,
      a: Lenke,
      code: (props) => <Codeblock {...props} />,
      inlineCode: (props) => <InlineCode {...props} />,
      Undertittel,
      InlineCode,
      FileIcon,
      Cog,
      Example, */
      }
    }
    {...props}
  />
);

export default MdxWrapper;
