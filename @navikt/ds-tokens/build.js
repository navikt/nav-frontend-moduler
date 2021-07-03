const StyleDictionary = require("style-dictionary");
const kebabCase = require("./kebabCase");
const colors = require("./src/color");

StyleDictionary.registerTransform({
  name: "name/cti/kebab",
  type: "name",
  transformer: (prop, options) =>
    kebabCase([options.prefix].concat(prop.path).join(" ")),
});

StyleDictionary.registerParser({
  pattern: /color.js$/,
  parse: ({ filePath, contents, ...rest }) => {
    /* console.log(JSON.parse(contents)); */
    const newObj = {};
    Object.entries(colors.colors).map(
      ([key, value]) =>
        (newObj[`navds${key.replace("global", "GlobalColor")}`] = {
          value: value,
        })
    );
    return newObj;
  },
});

const StyleDictionaryExtended = StyleDictionary.extend(
  __dirname + "/config.json"
);

StyleDictionaryExtended.buildAllPlatforms();
