import React, { forwardRef, HTMLAttributes, useState, useRef } from "react";
import cl from "classnames";
import mergeRefs from "react-merge-refs";
import { Popover } from "@navikt/ds-react";
import { SystemFilled } from "@navikt/ds-icons";
import "@navikt/ds-css/internal-header/index.css";
import "@navikt/ds-css/typography/index.css";

export interface InternalHeaderDropdownMenuProps
  extends HTMLAttributes<HTMLButtonElement> {}

const InternalHeaderDropdownMenu = forwardRef<
  HTMLButtonElement,
  InternalHeaderDropdownMenuProps
>(({ className, children, ...rest }, ref) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const mergedRef = mergeRefs([buttonRef, ref]);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  return (
    <>
      <button
        {...rest}
        ref={mergedRef}
        className={cl("navds-internal-header-dropdown-menu", className)}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <div
          className="navds-internal-header-dropdown-menu__icon-wrapper"
          ref={setAnchorEl}
        >
          <SystemFilled />
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
        <div className="navds-internal-header-dropdown-menu__menu">
          {children}
        </div>
      </Popover>
    </>
  );
});

export default InternalHeaderDropdownMenu;
