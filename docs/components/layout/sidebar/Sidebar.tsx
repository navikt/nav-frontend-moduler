interface SidebarProps {
  classname?: string;
}

const Sidebar = ({ ...props }: SidebarProps) => {
  return <div className="sidebar">sidebar</div>;
};

export default Sidebar;
