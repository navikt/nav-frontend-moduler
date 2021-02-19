import React, { forwardRef, HTMLAttributes } from "react";
import cl from "classnames";
import "@navikt/ds-css/internal-header/index.css";
import "@navikt/ds-css/typography/index.css";
import { OverridableComponent } from "../../utils/OverridableComponent";

export interface TypeMap {
  props: HTMLAttributes<HTMLHeadingElement>;
  defaultComponent: "h1";
}

const InternalHeaderTitle: OverridableComponent<TypeMap> = forwardRef(
  ({ component: Component = "h1", children, className, ...rest }, ref) => (
    <Component
      {...rest}
      ref={ref}
      className={cl("navds-header__title", className)}
    >
      {children}
    </Component>
  )
);

export default InternalHeaderTitle;
