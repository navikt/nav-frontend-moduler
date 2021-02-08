import React, { forwardRef, HTMLAttributes, useState } from "react";
import cl from "classnames";
import { Popover } from "@navikt/ds-react";
import "@navikt/ds-css/internal-header/index.css";
import "@navikt/ds-css/typography/index.css";

export interface InternalHeaderUserMenuProps
  extends HTMLAttributes<HTMLDivElement> {
  name: string;
  ident: string;
  unit: string;
}

const InternalHeaderUserMenu = forwardRef<
  HTMLDivElement,
  InternalHeaderUserMenuProps
>(({ className, name, ident, unit, children, ...rest }, ref) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  return (
    <>
      <div
        {...rest}
        ref={ref}
        className={cl("navds-header__user", className)}
        onClick={() => setIsOpen(true)}
      >
        <div>
          <span className="navds-header__name">{name}</span>
          <span className="navds-header__ident">{ident}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span className="navds-header__unit">{unit}</span>
        </div>
        <span className="navds-header__unit" ref={setAnchorEl}>
          v
        </span>
      </div>
      <Popover
        anchorEl={anchorEl}
        onClose={() => setIsOpen(false)}
        open={isOpen}
        placement="bottom"
      >
        <div className="navds-header__user-menu">{children}</div>
      </Popover>
    </>
  );
});

export default InternalHeaderUserMenu;
