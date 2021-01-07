import * as Icons from "@navikt/ds-icons";
import Knapp from "nav-frontend-knapper";
import Modal from "nav-frontend-modal";
import { Input } from "nav-frontend-skjema";
import { Systemtittel, Undertittel } from "nav-frontend-typografi";
import React, { useEffect, useState } from "react";
import { renderToString } from "react-dom/server";
import Code from "../code/Code";
import IconBox from "./IconBox";
import IconSidebar from "./IconSidebar";
import "./styles.less";

const beautify_html = require("js-beautify").html;

const IconPage = () => {
  useEffect(() => {
    Modal.setAppElement(".mainWrapper");
  }, []);

  const [filter, setFilter] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [modalIcon, setModalIcon] = useState("");

  const Icon = modalIcon && Icons[modalIcon];

  const filteredIcons = Object.keys(Icons).filter(
    (name) => name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
  );

  const handleModal = (name) => {
    setOpenModal(true);
    setModalIcon(name);
  };

  const handleModalClose = () => {
    setOpenModal(false);
    setModalIcon("");
  };

  const downloadSvg = () => {
    const element = document.createElement("a");
    const file = new Blob([renderToString(<Icon />)], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${modalIcon}.svg`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="iconpage">
      <IconSidebar />
      <Input
        className="iconpage__input"
        label="Filter"
        description={filteredIcons.length + " ikoner matcher søket"}
        onChange={(e) => setFilter(e.target.value)}
        autoComplete="on"
      />

      <div className="iconpage__icons">
        {filteredIcons.map((name) => (
          <IconBox
            key={name}
            name={name}
            onClick={(name) => handleModal(name)}
          />
        ))}
      </div>
      {modalIcon !== "" && (
        <Modal
          className="iconpage__modal"
          isOpen={openModal}
          closeButton={true}
          onRequestClose={() => handleModalClose()}
          contentLabel="Modal for icon-visning"
        >
          <div>
            <Systemtittel>{modalIcon}</Systemtittel>
            <Knapp kompakt onClick={() => downloadSvg()}>
              Last ned SVG
            </Knapp>
            <Undertittel className="iconpage__headlines">React</Undertittel>
            <Code popupUnder className="language-jsx">
              {`import { ${modalIcon} } from '@navikt/ds-icons'`}
            </Code>
            <Undertittel className="iconpage__headlines">SVG</Undertittel>
            <Code popupUnder className="language-jsx iconpage__modalSvg">
              {`${beautify_html(renderToString(<Icon />))}`}
            </Code>
            <div className="iconpage__modalIcons">
              <Icon className="iconpage__modalIcons--light" />
              <Icon className="iconpage__modalIcons--dark" />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default IconPage;
