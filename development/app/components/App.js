import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Alertstripe from 'NavFrontendModules/nav-frontend-alertstriper';
import Lenke from 'NavFrontendModules/nav-frontend-lenker';
import Knapp from 'NavFrontendModules/nav-frontend-knapper';
import { Menyknapp } from 'NavFrontendModules/nav-frontend-ikonknapper';
import { Undertittel } from 'NavFrontendModules/nav-frontend-typografi';
import Popover from 'NavFrontendModules/nav-frontend-popover';
import { Popper, Manager, Reference } from 'react-popper';
import Hjelpetekst from 'NavFrontendModules/nav-frontend-hjelpetekst';

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
            apen: false,
            popover: false
        };
        
        this.popover = React.createRef();

        this.popover2 = React.createRef();

        window.addEventListener('click', this.handleClick);
    }

    handleClick = (e) => {
        const target = e.target;
        
        // if (this.state.popover) {
        //     if (!this.popover.contains(target)) this.setState({ popover:false });
        // }

        this.setState({ popover:false, popover2: false });
    }

    render() {
        return (
            <div style={{height:1000}}>
                <Alertstripe type="suksess">
                    <Undertittel>Utviklingsmiljø kjører!</Undertittel>
                </Alertstripe>

                <br/><br/>

                <Popover>Hello</Popover>

                <br/><br/>
                
                <p>Gå til <code>/development/app/components/App.js</code> for å begynne utviklingen.</p>
                <p>Du finner <Lenke href="https://github.com/navikt/nav-frontend-moduler/blob/master/CONTRIBUTING.md">dokumentasjon og veiledning</Lenke> her.</p>

                <Knapp>Publiser</Knapp>
                <Manager>
                    <Reference>
                        {({ref}) => (
                            <Menyknapp
                                innerRef={ref}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    this.setState({
                                        popover: !this.state.popover,
                                        popover2: false
                                    });
                                }
                            }>
                                <span className="sr-only">Meny</span>
                            </Menyknapp>
                        )}
                    </Reference>
                    {
                        this.state.popover &&
                        <Popper placement="bottom-end">
                            {({ ref, style, placement, arrowProps }) => (
                                <Popover
                                    innerRef={(node) => {
                                        this.popover = node;
                                        ref(node);
                                    }}
                                    style={style}
                                    pilProps={arrowProps}
                                    orientering={placement}
                                    utenPil
                                >
                                    <div style={{width:208, padding:'1rem'}}>
                                        Hello
                                        <br/>
                                        Hello
                                        <br/>
                                        Hello
                                    </div>
                                </Popover>
                            )}
                        </Popper>
                    }
                </Manager>

                <br/><br/>

                <Manager>
                    <Reference>
                        {({ref}) => (
                            <Menyknapp
                                style={{width: 200}}
                                form={undefined}
                                innerRef={ref}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    this.setState({
                                        popover: false,
                                        popover2: !this.state.popover2
                                    });
                                }}
                            >
                                <span>Meny</span>
                            </Menyknapp>
                        )}
                    </Reference>
                    {
                        this.state.popover2 &&
                        <Popper placement="bottom">
                            {({ ref, style, placement, arrowProps }) => (
                                <Popover
                                    innerRef={(node) => {
                                        this.popover2 = node;
                                        ref(node);
                                    }}
                                    style={style}
                                    pilProps={arrowProps}
                                    orientering={placement}
                                    utenPil
                                >
                                    <div style={{width:208, padding:'1rem'}}>
                                        Hello
                                        <br/>
                                        Hello
                                        <br/>
                                        Hello
                                        <br/>
                                        Hello
                                    </div>
                                </Popover>
                            )}
                        </Popper>
                    }
                </Manager>

                <div align="center">
                    <Hjelpetekst>
                        Hello
                    </Hjelpetekst>
                </div>
            </div>
        );
    }
}