const Colors = require("./color");

const globalColors = Colors.colors;

const baseFontSize = 16;

/*
Referencing values
Values defined internally: "{navds.color.green.50.value}"
Values imported (ex Global colors ) "{navds.globalColorLimegreen500.value}"
*/

const getFontSize = (size) => `${size / baseFontSize}rem`;

module.exports = {
  navds: {
    ...Object.entries(globalColors).reduce(
      (colors, [name, color]) => ({
        ...colors,
        [name.replace("global", "globalColor")]: {
          value: color,
        },
      }),
      {}
    ),
    font: {
      family: { value: '"Source Sans Pro", Arial, sans-serif' },
      line: {
        height: {
          m: { value: 1.5 },
          s: { value: 1.3 },
        },
      },
      size: {
        title: {
          "2xl": { value: getFontSize(40) },
          xl: { value: getFontSize(32) },
          l: { value: getFontSize(28) },
          m: { value: getFontSize(24) },
          s: { value: getFontSize(20) },
        },
        xl: { value: getFontSize(20) },
        l: { value: getFontSize(18) },
        m: { value: getFontSize(16) },
        s: { value: getFontSize(14) },
      },
      weight: {
        bold: { value: "600" },
        regular: { value: "400" },
      },
    },
    spacing: Array(24)
      .fill(0)
      .reduce(
        (spacing, _, index) => ({
          ...spacing,
          [index + 1]: { value: `${(index + 1) / 4}rem` },
        }),
        {}
      ),

    /*
      disabled: { value: "{navds.color.gray.40.value}" },
      action: {
        default: { value: "{navds.color.blue.50.value}" },
        hover: { value: "{navds.color.blue.60.value}" },
        active: { value: "{navds.color.deepblue.50.value}" },
      },
      danger: {
        default: { value: "{navds.color.red.50.value}" },
        hover: { value: "{navds.color.red.60.value}" },
        active: { value: "{navds.color.red.70.value}" },
      },
      error: {
        border: { value: "{navds.color.red.50.value}" },
        background: { value: "{navds.color.red.10.value}" },
      },
      warning: {
        border: { value: "{navds.color.orange.60.value}" },
        background: { value: "{navds.color.orange.10.value}" },
      },
      info: {
        border: { value: "{navds.color.lightblue.70.value}" },
        background: { value: "{navds.color.lightblue.10.value}" },
      },
      success: {
        border: { value: "{navds.color.green.50.value}" },
        background: { value: "{navds.color.green.10.value}" },
      },
      border: { value: "{navds.color.gray.40.value}" },
      background: { value: "{navds.color.white.value}" },
      text: {
        primary: { value: "{navds.color.gray.90.value}" },
        inverse: { value: "{navds.color.white.value}" },
        disabled: { value: "{navds.color.gray.60.value}" },
        link: { value: "{navds.color.blue.50.value}" },
        error: { value: "{navds.color.red.50.value}" },
      },
      hover: { value: "{navds.color.gray.40.value}" },
      tag: {
        error: {
          border: { value: "{navds.color.red.50.value}" },
          background: { value: "{navds.color.red.10.value}" },
        },
        warning: {
          border: { value: "{navds.color.orange.60.value}" },
          background: { value: "{navds.color.orange.10.value}" },
        },
        info: {
          border: { value: "{navds.color.lightblue.70.value}" },
          background: { value: "{navds.color.lightblue.10.value}" },
        },
        success: {
          border: { value: "{navds.color.green.50.value}" },
          background: { value: "{navds.color.green.10.value}" },
        },
      },
      modal: {
        overlay: {
          value: "rgba(38, 38, 38, 0.7)",
        },
      },
    },
    border: {
      default: {
        value: "1px solid {navds.color.border.value}",
      },
      radius: { value: "4px" },
    },
    panel: {
      hover: { value: "1px solid {navds.color.blue.50.value}" },
    },
    shadow: {
      focus: { value: "0 0 0 3px {navds.color.blue.80.value}" },
      "focus-on-dark": { value: "0 0 0 3px {navds.color.orange.40.value}" },
      hover: { value: "{navds.color.hover.value} 0 2px 1px 0" },
    },
    text: {
      focus: { value: "{navds.color.blue.80.value}" },
      shadow: { value: "0 0 0 2px {navds.color.blue.80.value}" },
    },
    contentContainer: {
      maxWidth: { value: "79.5rem" },
      padding: {
        small: { value: "{navds.spacing.4.value}" },
        mediumAndLarger: { value: "{navds.spacing.6.value}" },
      },
    },
    grid: {
      gutter: {
        small: { value: "{navds.spacing.4.value}" },
        mediumAndLarger: { value: "{navds.spacing.6.value}" },
      },
    },
    layout: {
      background: {
        white: { value: white },
        gray: { value: "{navds.color.gray.10.value}" },
      },
      padding: {
        small: { value: "{navds.spacing.4.value}" },
        mediumAndLarger: { value: "{navds.spacing.10.value}" },
      },
    },
    "z-index": {
      modal: {
        content: { value: "1010" },
        overlay: { value: "1000" },
      },
      popover: {
        default: { value: "2000" },
        arrow: { value: "-1" },
      },
    },
    sidebar: {
      sticky: {
        offset: { value: "0" },
      },
    }, ,*/
  },
};
