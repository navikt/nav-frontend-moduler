import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import classnames from "classnames";
import { Normaltekst, Undertekst, Undertittel } from "nav-frontend-typografi";
import { LenkepanelBase } from "nav-frontend-lenkepanel";
import { Input } from "nav-frontend-skjema";
import { EtikettFokus, EtikettInfo } from "nav-frontend-etiketter";
import { useNavigationPage, usePageMenu } from "../../../useSiteStructure";
import "./styles.less";

const isBeta = (path) => {
  const style = path.match(/packages\/nav-frontend-(.*)\/md/);
  if (!!!style || style.length < 2) return false;
  if (style[1].indexOf("beta") === -1) return false;
  return true;
};

const isStyle = (path) => {
  const style = path.match(/packages\/nav-frontend-(.*)\/md/);
  if (!!!style || style.length < 2) return false;
  if (style[1].indexOf("style") === -1) return false;
  return true;
};

const cls = (link: string, location) =>
  classnames({
    active: link
      .split("/")
      .every((s, i) => location.pathname.split("/")[i] === s),
  });

const Sidebar = ({ location, className = "" }) => {
  const page = useNavigationPage(location);
  const menu = usePageMenu(location);

  const [inputText, setInputText] = useState<string>("");
  const [lastLoc, setLastLoc] = useState<string>("");

  useEffect(() => {
    if ((location.pathname.match(/\//g) || []).length === 1) {
      if (lastLoc === location.pathname) {
        setInputText("");
      }
      setLastLoc(location.pathname);
    }
  }, [location, lastLoc]);

  const result = menu.filter(
    (item) => item.title.toLowerCase().indexOf(inputText.toLowerCase()) !== -1
  );

  return (
    <div className={className}>
      <nav aria-labelledby="left-navigation-title">
        <Input
          className="leftNavigation__input"
          label="Filter"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <h2 id="left-navigation-title" className="typo-systemtittel">
          {page?.title}
        </h2>
        <ul className="nav-list">
          {result.length > 0 &&
            result.map(({ link, title, componentPath }, index) => {
              return (
                <li key={index}>
                  <Link to={link} className={cls(link, location)}>
                    {title}
                    {isBeta(componentPath) && (
                      <EtikettFokus>
                        <Undertekst>Beta</Undertekst>
                      </EtikettFokus>
                    )}
                    {isStyle(componentPath) && (
                      <EtikettInfo>
                        <Undertekst>CSS</Undertekst>
                      </EtikettInfo>
                    )}
                  </Link>
                </li>
              );
            })}
          {result.length === 0 && <Normaltekst>Ingen treff...</Normaltekst>}
        </ul>
        {location.pathname.indexOf("/components") === 0 && (
          <div className="contribute-promo">
            <Undertittel>Noe du savner?</Undertittel>
            <LenkepanelBase
              href="https://github.com/navikt/nav-frontend-moduler"
              border
            >
              <Normaltekst className="lenkepanel__heading">
                Bidra med nye komponenter på Github
              </Normaltekst>
            </LenkepanelBase>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
