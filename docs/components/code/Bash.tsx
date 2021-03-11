import copy from "copy-to-clipboard";
import Prism from "prismjs";
import style from "./bash.module.css";
import { Files } from "@navikt/ds-icons";
import { Popover } from "@navikt/ds-react";
import { useEffect, useRef, useState } from "react";

export const copyCode = (content) => {
  if (typeof content === "string") {
    copy(content, {
      format: "text/plain",
    });
  }
};

const Bash = ({
  code,
  terminal = false,
  copy = false,
  ...props
}: {
  code: string;
  terminal?: boolean;
  copy?: boolean;
}) => {
  const highlighted = terminal
    ? code
    : Prism.highlight(code, Prism.languages.html, "html");

  const buttonRef = useRef<HTMLButtonElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const [openPopover, setOpenPopover] = useState<boolean>(false);

  useEffect(() => {
    if (openPopover) {
      timeoutRef.current = setTimeout(() => setOpenPopover(false), 1500);
      return () => timeoutRef.current && clearTimeout(timeoutRef.current);
    }
  }, [openPopover]);

  const handleCopy = () => {
    copyCode(code);
    setOpenPopover(true);
  };

  return (
    <div className={style.preWrapper}>
      <pre className={style.pre}>
        <code
          className={`${copy && style.codeCopy} ${terminal && style.terminal}`}
          {...props}
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
        <div className={style.buttonBackground}>
          <button
            ref={buttonRef}
            className={style.copyButton}
            onClick={() => handleCopy()}
          >
            <Files />
          </button>
          <Popover
            role="alert"
            anchorEl={buttonRef.current}
            open={openPopover}
            onClose={() => setOpenPopover(false)}
            size="small"
            placement="auto-start"
            /* arrow={false} */
          >
            Kode er kopiert
          </Popover>
        </div>
      </pre>
    </div>
  );
};

export default Bash;
