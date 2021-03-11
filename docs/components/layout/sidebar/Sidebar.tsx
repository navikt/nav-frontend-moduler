import Link from "next/link";

interface SidebarProps {
  classname?: string;
}

const Sidebar = ({ ...props }: SidebarProps) => {
  return (
    <div className="sidebar">
      <Link href="/">Home</Link>
      <Link href="/komponenter">Komponenter</Link>
    </div>
  );
};

export default Sidebar;
