import React, { forwardRef } from "react";
import cl from "classnames";
import "@navikt/ds-css/dropdown-menu/index.css";
import { OverridableComponent } from "@navikt/ds-react";

export interface TypeMap {
  props: React.HTMLAttributes<HTMLLinkElement>;
  defaultComponent: "a";
}

const DropdownMenuItem: OverridableComponent<TypeMap> = forwardRef(
  ({ className, component: Component = "a", children, ...rest }, ref) => {
    return (
      <Component
        ref={ref}
        className={cl("navds-dropdown-menu-item", className)}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

export default DropdownMenuItem;
