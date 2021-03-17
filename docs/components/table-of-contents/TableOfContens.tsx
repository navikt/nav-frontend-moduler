import style from "./tableOfContents.module.css";
import { Next } from "@navikt/ds-icons";
import { Heading } from "@navikt/ds-react";
import Link from "next/link";

interface TableOfContensProps {
  className?: string;
  layout?: boolean;
}

const TableOfContens = ({ className, ...props }: TableOfContensProps) => {
  return (
    <>
      <Heading level={2} size="large">
        Table of Contents
      </Heading>
      <nav className={style.toc}>
        <ul className={style.ul}>
          <li className={style.li}>
            <Link href="#Varianter" shallow>
              <div>
                <Next />
                Varianter
              </div>
            </Link>
          </li>
          <li className={style.li}>
            <Next />
            Størrelser
          </li>
          <li className={style.li}>
            <Next />
            Interne flater
          </li>
          <li className={style.li}>
            <Next />
            Brukseksempler
          </li>
          <li className={style.li}>
            <Next />
            Tilgjengelighet
          </li>
          <li className={style.li}>
            <Next />
            Prop-table
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TableOfContens;
