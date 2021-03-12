import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Mdx from "./MdxProvider";
import Toc from "../toc/Toc";
import { Grid, Cell, ContentContainer } from "@navikt/ds-react";
import { useMediaQuery } from "react-responsive";
import useKeypress from "react-use-keypress";
import { useEffect, useState } from "react";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebar, setSidebar] = useState(true);

  const small = useMediaQuery({
    query: "(max-width: 959px)",
  });

  useKeypress("Escape", () => {
    setSidebar(false);
  });

  useEffect(() => {
    setSidebar(!small);
  }, [small]);
  /* console.log(sidebar); */
  return (
    <div className="pageWrapper lightTheme">
      <Header sidebar={sidebar} onSidebarChange={(x) => setSidebar(x)} />
      <Sidebar
        sidebar={sidebar}
        small={small}
        onSidebarChange={(x) => setSidebar(x)}
      />
      <main className="main">
        <ContentContainer>
          <Grid className="contentWrapper">
            <Cell className="content" xs={12} sm={12} md={10} lg={7}>
              <Mdx>{children}</Mdx>
            </Cell>
            <Cell xs={12} sm={1} md={2} lg={1} />
            <Cell xs={12} sm={12} md={8} lg={4}>
              <Toc />
            </Cell>
          </Grid>
        </ContentContainer>
      </main>
    </div>
  );
};

export default Layout;
