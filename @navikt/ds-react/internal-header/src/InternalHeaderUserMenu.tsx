import React, { forwardRef, HTMLAttributes } from "react";
import cl from "classnames";
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
>(({ className, name, ident, unit, children, ...rest }, ref) => (
  <div ref={ref} className={cl("navds-header__user", className)} {...rest}>
    <span className="navds-header__name">{name}</span>
    <span className="navds-header__ident">{ident}</span>
    <span className="navds-header__unit">{unit}</span>
    {children}
  </div>
));

export default InternalHeaderUserMenu;
