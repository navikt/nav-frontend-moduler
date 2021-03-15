const glob = require("glob");
const fs = require("fs");
const docgen = require("react-docgen");
const { exit } = require("process");

const findMatch = (file) => {
  if (file.includes("nav-frontend-")) {
    const match = file.match(/nav-frontend-(.+)\/src/);
    return match && "nav-frontend-" + match[1].replace("/", "");
  } else if (file.includes("@navikt/ds-react")) {
    const match = file.match(/@navikt\/ds-react\/(.*)\//);
    return match && "@navikt/ds-react/" + match[1];
  }
};

try {
  const newComponents = glob.sync("@navikt/ds-react/**/*.tsx");
  const oldComponents = glob.sync("packages/**/src/*.tsx");
  const files = [...newComponents, ...oldComponents].filter(
    (file) => !file.includes("stories") && !file.includes("index")
  );

  const docs = docgen.parse(files);
  console.log(docs);

  /*
  const found = [];
  const groups = [];
  for (const file of files) {
    if (found.some((y) => y.includes(file))) {
      continue;
    }

    found.push(file);
    const current = findMatch(file);
    const matching = files.filter((x) => {
      if (found.some((y) => y.includes(x))) {
        return false;
      }
      if (findMatch(x) === current) {
        found.push(x);
        return true;
      }
      return false;
    });
    groups.push({ name: current, files: [file, ...matching] });
  }

  const docs = groups.map((group) => {
    const doc = docgen.parse(group.files);
    return {
      fileName: group.name,
      docs: [
        ...new Map(doc.map((item) => [item["displayName"], item])).values(),
      ],
    };
  });

  fs.writeFileSync("./react-docgen.json", JSON.stringify(docs)); */
} catch (e) {
  console.error(e);
  console.log("Failed in generating docgen");
}
