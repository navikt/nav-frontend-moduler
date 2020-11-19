import React from "react";
import Button from "../src/index";

export default {
  title: "@nav-frontend/react-button",
  component: Button,
};

const Section = ({ className, children }) => (
  <div
    className={className}
    style={{
      display: "grid",
      gap: 16,
      gridAutoFlow: "column",
      justifyContent: "start",
      padding: 24,
      background: "lightgray",
    }}
  >
    {children}
  </div>
);

const variants: Array<"primary" | "secondary" | "action" | "danger"> = [
  "primary",
  "secondary",
  "action",
  "danger",
];

export const All = () => {
  return (
    <>
      <h1>Button</h1>
      <Section>
        {variants.map((variant) => (
          <Button key={variant} variant={variant}>
            {variant}
          </Button>
        ))}
      </Section>
      <h2>disabled</h2>
      <Section>
        {variants.map((variant) => (
          <Button key={variant} variant={variant} disabled>
            {variant}
          </Button>
        ))}
      </Section>
      <h2>As link</h2>
      <Section>
        {variants.map((variant) => (
          <a
            key={variant}
            className={`navds-button navds-button--${variant}`}
            href="the-link"
          >
            {variant}
          </a>
        ))}
      </Section>
      <h2>Compact</h2>
      <Section className="navds-compact">
        {variants.map((variant) => (
          <a
            key={variant}
            className={`navds-button navds-button--${variant}`}
            href="the-link"
          >
            {variant}
          </a>
        ))}
      </Section>
    </>
  );
};