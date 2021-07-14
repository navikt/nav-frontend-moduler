import React, { forwardRef, HTMLAttributes, useEffect, useState } from "react";
import cl from "classnames";

export interface ToggleButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * Component content
   */
  children: React.ReactNode;
  /**
   * @ignore
   */
  className?: string;
  /**
   * Lets user handle toggle-state
   */
  active?: boolean;
  /**
   * Toggle value, used by `ToggleGroup` for state-handling
   */
  value: string;
}

const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>(
  ({ children, className, active, onClick, ...rest }, ref) => {
    const [activeState, setActiveState] = useState(() => active ?? false);

    useEffect(() => {
      active !== undefined && setActiveState(active);
    }, [active]);

    const handleClick = (e) => {
      onClick && onClick(e);
      !active && setActiveState((activeState) => !activeState);
    };

    return (
      <button
        ref={ref}
        className={cl("navds-toggle-button", "navds-button", className)}
        aria-pressed={activeState}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default ToggleButton;
