import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
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
            <Cell xs={12} sm={12} md={10} lg={7}>
              <div
                style={{ width: "100%", height: "500px", background: "teal" }}
              >
                {children}
              </div>
            </Cell>
            <Cell xs={12} sm={1} md={2} lg={1} />
            <Cell xs={12} sm={12} md={10} lg={4}>
              <div
                style={{ width: "100%", height: "500px", background: "gray" }}
              >
                TOC
              </div>
            </Cell>
          </Grid>
        </ContentContainer>
      </main>
    </div>
  );
};

export default Layout;
