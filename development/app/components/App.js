import React, { Component } from 'react';
import Alertstripe from 'NavFrontendModules/nav-frontend-alertstriper';
import Lenke from 'NavFrontendModules/nav-frontend-lenker';
import Knapp from 'NavFrontendModules/nav-frontend-knapper';
import { Menyknapp } from 'NavFrontendModules/nav-frontend-ikonknapper';
import { Undertittel } from 'NavFrontendModules/nav-frontend-typografi';
import { Popover, Manager, Reference } from 'NavFrontendModules/nav-frontend-popover';

import './styles.less';

/*
 * Her er komponenten som benyttes til utvikling av eksisterende og nye moduler til nav-frontend.
 * Appen blir kjørt opp fra npm start-scriptet i package.json på rot, og tar utgangspunkt i
 * webpack-configen som ligger under /development/conf/webpack.config.js.
 *
 * Det er i utgangspunktet ikke ønskelig å sjekke inn endringer som gjøres her til repository, ettersom det er tenkt
 * som et rent utviklingsmiljø og ikke trenger å versjonskontrolleres. Om det er nødvendig å endre på ting her,
 * forklar hvorfor i en PR.
 *
 * Enjoy!
 */


// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            apen: false
        };
    }
    render() {
        return (
            <div>
                <Alertstripe type="suksess">
                    <Undertittel>Utviklingsmiljø kjører!</Undertittel>
                </Alertstripe>
                <br/>
                <p>Gå til <code>/development/app/components/App.js</code> for å begynne utviklingen.</p>
                <p>Du finner <Lenke href="https://github.com/navikt/nav-frontend-moduler/blob/master/CONTRIBUTING.md">dokumentasjon og veiledning</Lenke> her.</p>
                
                <Knapp>Meny</Knapp>
                <Menyknapp><span className="sr-only">Meny</span></Menyknapp>
            </div>
        );
    }
}