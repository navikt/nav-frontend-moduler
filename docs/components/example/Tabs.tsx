import { useState } from "react";
import style from "./tabs.module.css";
import cl from "classnames";
import { v4 as uuid } from "uuid";

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
      <li className={style.li}>
        <button
          className={cl(style.button, { [style.buttonActive]: 0 === tab })}
          onClick={() => handleClick(0)}
        >
          {"React"}
        </button>
      </li>
      {html && (
        <li className={style.li}>
          <button
            className={cl(style.button, { [style.buttonActive]: 1 === tab })}
            onClick={() => handleClick(1)}
          >
            {"HTML/CSS"}
          </button>
        </li>
      )}
    </ul>
  );
};

export default Tabs;
