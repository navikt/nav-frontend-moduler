import classnames from "classnames";
import { Flatknapp } from "nav-frontend-knapper";
import Panel from "nav-frontend-paneler";
import Popover, { PopoverOrientering } from "nav-frontend-popover";
import { Select } from "nav-frontend-skjema";
import { Systemtittel, Undertittel } from "nav-frontend-typografi";
import React, { useState } from "react";
import { useProps } from "../../useProps";
import { CopyIcon } from "../assets/images/svg";
import Code from "../code/Code";
import { ModuleBrowserMobileNav, ModuleBrowserNav } from "./ModuleBrowserNav";
import PropTable from "./PropTable";
import "./styles.less";

const ModuleBrowser = ({ context }) => {
  const modules = useProps(context.source);

  const useExportName = (name: string) => {
    const [exportName, setExport] = useState<string>(
      name && name[0].toUpperCase() + name.slice(1)
    );
    const setExportName = (s: string) =>
      setExport(s && s[0].toUpperCase() + s.slice(1));

    return { exportName, setExportName };
  };

  const initialState = (): { index: number; name: string } => {
    let name: string, index: number;
    const urlComponentName = window.location.pathname.split("/")[2];
    const cIndex = modules.findIndex(
      (module) => module.name.toLowerCase() === urlComponentName.toLowerCase()
    );
    const dIndex = modules.findIndex(
      (module) => module.name === context.defaultExport
    );
    index = Math.max(0, dIndex, cIndex);
    name = dIndex === -1 && cIndex === -1 ? urlComponentName : modules[index];
    return { index, name };
  };

  const { exportName, setExportName } = useExportName(initialState().name);
  const [anchor, setAnchor] = useState(undefined);
  const [activeModule, setActiveModule] = useState<number>(
    initialState().index
  );

  const generateImportStatement = () => {
    const format =
      exportName === context.defaultExport ? exportName : `{ ${exportName} }`;
    return `import ${format} from '${context.name}';`;
  };

  const handlePropChange = (x: number) => {
    setActiveModule(x);
    setExportName(modules[x].name);
  };

  const copyContent = (e, content) => {
    setAnchor(anchor ? undefined : e.currentTarget);
    const textArea = document.createElement("textarea");
    textArea.value = content;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
  };

  return (
    modules.length !== 0 && (
      <div className="module-browser">
        <Systemtittel id="moduler">Moduler</Systemtittel>
        <Panel border className="module-browser__wrapper">
          <ModuleBrowserNav
            context={context}
            modules={modules}
            onClick={handlePropChange}
            activeModule={activeModule}
          />
          <div className="module-browser__content">
            <ModuleBrowserMobileNav
              context={context}
              modules={modules}
              onClick={handlePropChange}
              activeModule={activeModule}
            />
            <div className="module-browser--innline">
              <Undertittel className="first">Import</Undertittel>
              <Flatknapp
                className="module-browser__copyknapp"
                aria-label="Kopier import til utklippstavle"
                onClick={(e) => copyContent(e, generateImportStatement())}
                kompakt
              >
                <CopyIcon />
              </Flatknapp>
            </div>
            <Code className="language-jsx">{generateImportStatement()}</Code>
            <Popover
              orientering={PopoverOrientering.Over}
              ankerEl={anchor}
              onRequestClose={() => setAnchor(undefined)}
            >
              <p className="module-browser__popover"> Kopiert! </p>
            </Popover>
            <Undertittel>React props</Undertittel>

            <PropTable moduleProps={modules[activeModule]} />
          </div>
        </Panel>
      </div>
    )
  );
};

export default ModuleBrowser;
