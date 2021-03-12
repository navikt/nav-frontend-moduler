import NavLogo from "../../assets/navLogo.svg";
import { HamburgerFilled } from "@navikt/ds-icons";
import cl from "classnames";

interface HeaderProps {
  className?: string;
  sidebar: boolean;
  onSidebarChange: (x: boolean) => void;
}

const Header = ({
  className,
  sidebar,
  onSidebarChange,
  ...props
}: HeaderProps) => {
  return (
    <header className={`header`}>
      <button
        onClick={() => onSidebarChange(!sidebar)}
        className={cl("header__link", "header__icon", {
          "header__icon--hidden": sidebar,
        })}
        tabIndex={!sidebar ? 0 : -1}
      >
        <HamburgerFilled />
      </button>
      <button className="header__link">
        <NavLogo />
        <span className="header__link-title">NAV Designsystem</span>
      </button>
    </header>
  );
};

export default Header;
