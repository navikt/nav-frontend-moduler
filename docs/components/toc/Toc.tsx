interface TocProps {
  className?: string;
}

const Header = ({ className, ...props }: TocProps) => {
  return <nav className={`toc`}></nav>;
};

export default Header;
