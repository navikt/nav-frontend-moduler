import NavLogo from "../../assets/navLogo.svg";

interface HeaderProps {
  className?: string;
}

const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <header className={`header ${className}`}>
      <button className="header__link">
        <NavLogo />
        <span className="header__link-title">NAV Designsystem</span>
      </button>
    </header>
  );
};

export default Header;
