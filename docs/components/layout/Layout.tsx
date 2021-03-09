import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="pageWrapper lightTheme">
      <Header />
      <Sidebar />
      <main className="main">
        <div className="contentWrapper">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
