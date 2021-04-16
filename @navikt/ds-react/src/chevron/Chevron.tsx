import React, { forwardRef } from "react";
import {
  Back,
  Next,
  Expand,
  Collapse,
  BackFilled,
  NextFilled,
  ExpandFilled,
  CollapseFilled,
} from "@navikt/ds-icons";

export interface ChevronProps extends React.HTMLAttributes<SVGSVGElement> {
  /**
   * custom class put on icon
   */
  className?: string;
  /**
   * Decides what direction chevron will point
   * @default expand
   */
  variant?: "back" | "next" | "expand" | "collapse";
  /**
   * Uses filled version
   * @default false
   */
  filled?: boolean;
}

const Chevron = forwardRef<SVGSVGElement, ChevronProps>(
  ({ variant = "expand", filled = false, ...rest }, ref) => {
    const getIcon = () => {
      switch (variant) {
        case "back":
          return filled ? (
            <BackFilled {...rest} ref={ref} />
          ) : (
            <Back {...rest} ref={ref} />
          );
        case "next":
          return filled ? (
            <NextFilled {...rest} ref={ref} />
          ) : (
            <Next {...rest} ref={ref} />
          );
        case "expand":
          return filled ? (
            <ExpandFilled {...rest} ref={ref} />
          ) : (
            <Expand {...rest} ref={ref} />
          );
        case "collapse":
          return filled ? (
            <CollapseFilled {...rest} ref={ref} />
          ) : (
            <Collapse {...rest} ref={ref} />
          );
        default:
          return <Expand />;
      }
    };

    return <>{getIcon()}</>;
  }
);

export default Chevron;
