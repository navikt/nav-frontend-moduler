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
    colors[color][`darken${weight}`] = { value: mix(value, "#3e3832", weight) };
    colors[color][`lighten${weight}`] = { value: mix(value, "white", weight) };
  });
});

module.exports = {
  color: colors,
};
