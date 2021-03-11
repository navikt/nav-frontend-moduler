import { useState } from "react";
import style from "./tabs.module.css";
import cl from "classnames";
type ExampleVersions = "Html" | "React";

interface TabsProps {
  onChange: (tab: number) => void;
  versions?: ExampleVersions[];
}

const Tabs = ({
  onChange,
  versions = ["React", "Html"],
  ...props
}: TabsProps) => {
  const [tab, setTab] = useState(0);

  const handleClick = (x: number) => {
    onChange(x);
    setTab(x);
  };
  return (
    <ul className={style.ul}>
      {versions.map((version, x) => (
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
