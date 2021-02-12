import React, { forwardRef } from "react";
import cl from "classnames";
import "@navikt/ds-css/internal-header/index.css";
import "@navikt/ds-css/typography/index.css";
import { OverridableComponent } from "./OverridableComponent";

export interface TypeMap {
  props: React.HTMLAttributes<HTMLLinkElement>;
  defaultComponent: "a";
}

const InternalHeaderDropdownMenuItem: OverridableComponent<TypeMap> = forwardRef(
  ({ className, component: Component = "a", children, ...rest }, ref) => {
    return (
      <Component
        ref={ref}
        className={cl("navds-header__Dropdown-menu-item", className)}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

export default InternalHeaderDropdownMenuItem;
