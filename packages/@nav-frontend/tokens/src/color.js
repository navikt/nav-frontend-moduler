const Color = require("color");

const baseColors = {
  red: "#c30000",
  orange: "#ff9100",
  limegreen: "#a2ad00",
  green: "#06893a",
  purple: "#634689",
  deepblue: "#005b82",
  blue: "#0067c5",
  lightblue: "#66cbec",
  darkgray: "#3e3832",
};

const mix = (a, b, percentage) =>
  Color(a)
    .mix(Color(b), percentage / 100)
    .hex();

let colors = {};

Object.entries(baseColors).forEach(([color, value]) => {
  colors[color] = {
    base: { value },
  };

  [20, 40, 60, 80].forEach((weight) => {
    colors[color][`darken${weight}`] = {
      value: mix(value, baseColors.darkgray, weight),
    };
    colors[color][`lighten${weight}`] = { value: mix(value, "white", weight) };
  });
});

module.exports = {
  ...colors,
  font: {
    darkgray: { value: "{color.darkgray.base.value}" },
    gray80: { value: "#59514b" },
    gray60: { value: "#78706a" },
    gray40: { value: "#b7b1a9" },
    gray20: { value: "#c6c2bf" },
    lightgray: { value: "#e9e7e7" },
  },
  background: {
    focus: { value: "{color.blue.darken60.value}" },
  },

  orangeFocus: { value: "#ffbd66" },
  redError: { value: "#ba3a26" },
  white: { value: "#fff" },
  grayBackground: { value: "@navLysGra" },
  grayIcon: { value: "@navGra40" },
  grayModia: { value: "#333333" },
  grayInactive: { value: "@navGra60" },
  pinkErrorBg: { value: "#f3e3e3" },
};
