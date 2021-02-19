import React, { forwardRef, HTMLAttributes, useState, useRef } from "react";
import cl from "classnames";
import mergeRefs from "react-merge-refs";
import { Popover } from "@navikt/ds-react";
import { Expand } from "@navikt/ds-icons";
import InternalHeaderUser from "./InternalHeaderUser";
import "@navikt/ds-css/internal-header/index.css";
import "@navikt/ds-css/typography/index.css";

export interface InternalHeaderUserMenuProps
  extends HTMLAttributes<HTMLButtonElement> {
  user: {
    name: string;
    ident: string;
    unit?: string;
    role?: string;
  };
}

const InternalHeaderUserMenu = forwardRef<
  HTMLButtonElement,
  InternalHeaderUserMenuProps
>(({ className, user, children, ...rest }, ref) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const mergedRef = mergeRefs([buttonRef, ref]);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  return (
    <>
      <button
        {...rest}
        ref={mergedRef}
        className={cl("navds-internal-header-user-menu", className)}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <InternalHeaderUser user={user} />
        <div
          className="navds-internal-header-user-menu__icon-wrapper"
          ref={setAnchorEl}
        >
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
        <div className="navds-internal-header-user-menu__menu">{children}</div>
      </Popover>
    </>
  );
});

export default InternalHeaderUserMenu;
