import { useState } from "react";
import style from "./tabs.module.css";
import cl from "classnames";

interface TabsProps {
  onChange: (tab: number) => void;
  html?: boolean;
}

const Tabs = ({ onChange, html = true, ...props }: TabsProps) => {
  const [tab, setTab] = useState(0);

  const handleClick = (x: number) => {
    onChange(x);
    setTab(x);
  };
  return (
    <ul className={style.ul}>
      {["React", html && "HTML/CSS"].map((version, x) => (
        <li className={style.li}>
          <button
            className={cl(style.button, { [style.buttonActive]: x === tab })}
            onClick={() => handleClick(x)}
          >
            {version}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
