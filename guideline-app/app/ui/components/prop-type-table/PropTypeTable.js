import React from 'react';
import PT from 'prop-types';
import cn from 'classnames';
import showdown from 'showdown';

import Etikett from 'NavFrontendModules/nav-frontend-etiketter';
import { Undertekst } from 'NavFrontendModules/nav-frontend-typografi';
import OverflowDetector from './../overflow-detector/OverflowDetector';

import './styles.less';

class PropTypeTable extends React.Component {
    render() {
        const propTypes = this.props.docgenInfo.props;
        const keys = Object.keys(propTypes).sort();
        const propTypeDocs = keys.map((key) => ({
            propName: key,
            ...propTypes[key]
        }));

        const headers = ['Property', 'Type', 'Required', 'Description', 'Default'];

        return (
            <OverflowDetector>
                <table
                    id="prop-types-tabell"
                    className="tabell tabell--stripet"
                    ref={(node) => { this.table = node; }}
                >
                    <thead>
                        <tr>
                            {
                                headers.map((header, index) => (
                                    // eslint-disable-next-line react/no-array-index-key
                                    <PropTypeTableHeader val={header} index={index} key={index} />
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            propTypeDocs.filter((item) =>
                                item.propName.indexOf('aria-') !== 0
                            ).map((propTypeDoc, key) => (
                                <PropTypeTableRow
                                    val={{
                                        ...propTypeDoc,
                                        defaultValue: propTypeDoc.defaultValue ? propTypeDoc.defaultValue : '-'
                                    }}
                                    key={key} // eslint-disable-line react/no-array-index-key
                                />
                            ))
                        }
                    </tbody>
                </table>
            </OverflowDetector>
        );
    }
}

PropTypeTable.propTypes = {
    docgenInfo: PT.shape({
        props: PT.shape({})
    })
};

PropTypeTable.defaultProps = {
    docgenInfo: {
        props: {}
    }
};

export default PropTypeTable;

const PropTypeTableHeader = (props) => (<th key={props.index}>{props.val}</th>);

PropTypeTableHeader.propTypes = {
    index: PT.number.isRequired,
    val: PT.string.isRequired
};

const parsePropValue = (val) => {
    if (val && typeof val === 'object') {
        if (val.name === 'enum') {
            return val.value.map((x) => x.value).join(' | ');
        }
        val = val.name || val.value; // eslint-disable-line no-param-reassign
    }
    if (val === null || typeof val === 'undefined' || val.length <= 0) {
        return '-';
    }
    return val.toString();
};

const parseDescription = (desc) => {
    const converter = new showdown.Converter();
    const deprecatedToken = desc.match(/^@deprecated/i);

    if (deprecatedToken) {
        desc = desc.substr(11, desc.length);
    }

    const descMarkdownToHtml = converter.makeHtml(desc).replace(/<code>/gm, '<code class="inline">');

    return (
        <div className="prop-description">
            {deprecatedToken && <Etikett type="fokus"><Undertekst>deprecated</Undertekst></Etikett>}
            <div dangerouslySetInnerHTML={{__html: descMarkdownToHtml }} />
        </div>
    );
};

const PropTypeTableRow = (props) => {
    // const desc = ;
    return (
        <tr className={cn({ deprecated: typeof desc === 'object' })}>
            <td><strong>{parsePropValue(props.val.name)}</strong></td>
            <td><code className="inline">{parsePropValue(props.val.type)}</code></td>
            <td>{parsePropValue(props.val.required)}</td>
            <td>{parseDescription(parsePropValue(props.val.description))}</td>
            <td>{parsePropValue(props.val.defaultValue)}</td>
        </tr>
    );
};

PropTypeTableRow.propTypes = {
    val: PT.shape({
        defaultValue: PT.any,
        description: PT.string,
        name: PT.string,
        propName: PT.string,
        required: PT.boolean,
        type: PT.any
    }).isRequired
};
