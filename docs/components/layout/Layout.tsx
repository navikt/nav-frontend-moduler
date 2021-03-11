import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Mdx from "./MdxProvider";
import Toc from "../toc/Toc";
import { Grid, Cell, ContentContainer } from "@navikt/ds-react";
interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="pageWrapper lightTheme">
      <Header />
      <Sidebar />
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
