import React, { forwardRef, HTMLAttributes } from "react";
import cl from "classnames";
import "@navikt/ds-css/internal-header/index.css";
import "@navikt/ds-css/typography/index.css";

export interface InternalHeaderUserProps
  extends HTMLAttributes<HTMLDivElement> {
  user: {
    name: string;
    ident: string;
    unit?: string;
    role?: string;
  };
}

const InternalHeaderUser = forwardRef<HTMLDivElement, InternalHeaderUserProps>(
  ({ className, user: { name, ident, unit, role }, ...rest }, ref) => (
    <div
      ref={ref}
      className={cl("navds-internal-header-user", className)}
      {...rest}
    >
      <div>
        <span className="navds-internal-header-user__name">{name}</span>
        <span className="navds-internal-header-user__ident">{ident}</span>
      </div>
      {(unit || role) && (
        <div>
          {unit && (
            <span className="navds-internal-header-user__unit">{unit}</span>
          )}
          {role && (
            <span className="navds-internal-header-user__role">{role}</span>
          )}
        </div>
      )}
    </div>
  )
);

export default InternalHeaderUser;
