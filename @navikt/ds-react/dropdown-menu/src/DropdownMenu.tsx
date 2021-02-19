import React, { forwardRef, HTMLAttributes, useState, useRef } from "react";
import cl from "classnames";
import mergeRefs from "react-merge-refs";
import { Popover } from "@navikt/ds-react";
import { Expand } from "@navikt/ds-icons";
import "@navikt/ds-css/internal-header/index.css";

export interface DropdownMenuProps extends HTMLAttributes<HTMLButtonElement> {}

const DropdownMenu = forwardRef<HTMLButtonElement, DropdownMenuProps>(
  ({ className, children, ...rest }, ref) => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const mergedRef = mergeRefs([buttonRef, ref]);

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<Element | null>(null);

    return (
      <>
        <button
          {...rest}
          ref={mergedRef}
          className={cl("navds-dropdown-menu", className)}
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          <div className="navds-dropdown-menu__icon-wrapper" ref={setAnchorEl}>
            <Expand />
          </div>
        </button>
        <Popover
          offset={1}
          anchorEl={anchorEl}
          onClose={() => {
            if (buttonRef.current !== document.activeElement) {
              setIsOpen(false);
            }
          }}
          open={isOpen}
          placement="bottom"
        >
          <div className="navds-dropdown-menu__menu">{children}</div>
        </Popover>
      </>
    );
  }
);

export default DropdownMenu;
