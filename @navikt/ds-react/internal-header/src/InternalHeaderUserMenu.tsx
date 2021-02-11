import React, { forwardRef, HTMLAttributes, useState, useRef } from "react";
import cl from "classnames";
import mergeRefs from "react-merge-refs";
import { Popover } from "@navikt/ds-react";
import { Expand } from "@navikt/ds-icons";
import "@navikt/ds-css/internal-header/index.css";
import "@navikt/ds-css/typography/index.css";

export interface InternalHeaderUserMenuProps
  extends HTMLAttributes<HTMLButtonElement> {
  name: string;
  ident: string;
  unit?: string;
  role?: string;
}

const InternalHeaderUserMenu = forwardRef<
  HTMLButtonElement,
  InternalHeaderUserMenuProps
>(({ className, name, ident, unit, role, children, ...rest }, ref) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const mergedRef = mergeRefs([buttonRef, ref]);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  return (
    <>
      <button
        {...rest}
        ref={mergedRef}
        className={cl("navds-header__user-menu", className)}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <div>
          <div>
            <span className="navds-header__user-menu__name">{name}</span>
            <span className="navds-header__user-menu__ident">{ident}</span>
          </div>
          {(unit || role) && (
            <div>
              {unit && (
                <span className="navds-header__user-menu__unit">{unit}</span>
              )}
              {role && (
                <span className="navds-header__user-menu__role">{role}</span>
              )}
            </div>
          )}
        </div>
        <Expand ref={setAnchorEl} />
      </button>
      <Popover
        anchorEl={anchorEl}
        onClose={() => {
          if (buttonRef.current !== document.activeElement) {
            setIsOpen(false);
          }
        }}
        open={isOpen}
        placement="bottom"
      >
        <div className="navds-header__user-menu__menu">{children}</div>
      </Popover>
    </>
  );
});

export default InternalHeaderUserMenu;
