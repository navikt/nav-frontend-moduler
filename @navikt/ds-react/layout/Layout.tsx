import cl from "classnames";
import React, {
  Children,
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
} from "react";
import { default as Section, SectionProps } from "./Section";

export interface LayoutWithSubComponents {
  Section?: ForwardRefExoticComponent<SectionProps>;
}

export interface LayoutProps extends HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

const Layout: ForwardRefExoticComponent<LayoutProps> &
  LayoutWithSubComponents = forwardRef<HTMLDivElement, LayoutProps>(
  ({ children, className, ...rest }, ref) => {
    const columns = Children.count(children);

    return (
      <div
        ref={ref}
        className={cl(
          "navds-layout__container",
          `navds-layout__container--${columns}-columns`,
          className
        )}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Layout.Section = Section;
console.log(Layout);
export default Layout;
