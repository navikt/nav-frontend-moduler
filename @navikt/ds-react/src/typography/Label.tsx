import React, { forwardRef } from "react";
import cl from "classnames";

export interface LabelProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /**
   * M: 18px, S: 16px
   * @default "m"
   */
  size?: "m" | "s";
  /**
   * Component content
   */
  children: React.ReactNode;
  /**
   * Custom styling on element
   */
  className?: string;
  /**
   * Adds margins to typo
   */
  spacing?: boolean;
}

const Label = forwardRef<HTMLParagraphElement, LabelProps>(
  ({ className, size = "m", spacing, ...rest }, ref) => (
    <p
      {...rest}
      ref={ref}
      className={cl(className, "navds-label", {
        "navds-label--s": size === "s",
        "navds-typo--spacing": !!spacing,
      })}
    />
  )
);

export default Label;
