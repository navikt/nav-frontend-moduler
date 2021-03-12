import Link from "next/link";
import cl from "classnames";
import { Close } from "@navikt/ds-icons";

interface SidebarProps {
  classname?: string;
  sidebar: boolean;
  small: boolean;
  onSidebarChange: (x: boolean) => void;
}

const Sidebar = ({
  sidebar,
  small,
  onSidebarChange,
  ...props
}: SidebarProps) => {
  console.log(sidebar);
  return (
    <>
      {sidebar && small && (
        <div
          onClick={() => onSidebarChange(false)}
          className={cl("sidebar--overlay", {
            "sidebar--overlay--fade": sidebar,
          })}
        />
      )}
      <div
        className={cl("sidebar", {
          sidebar__mobile: small,
          "sidebar__mobile--open": small && sidebar,
        })}
      >
        {small && sidebar && (
          <button
            onClick={() => onSidebarChange(!sidebar)}
            className={cl("sidebar__icon")}
          >
            <Close />
          </button>
        )}
        <Link href="/">Home</Link>
        <Link href="/komponenter">Komponenter</Link>
        <Link href="/komponenter/button">Button</Link>
      </div>
    </>
  );
};

export default Sidebar;
