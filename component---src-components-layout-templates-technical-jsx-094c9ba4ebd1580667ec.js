(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{ZwpE:function(e,t,n){},c5pX:function(e,t,n){"use strict";n.r(t);var a=n("+I+c"),r=n("mXGw"),l=n.n(r),c=n("h6BP"),o=n.n(c),u=n("bKaz"),m=n.n(u),i=n("b4v9"),s=n.n(i),p=n("jPj1"),d=n("w8Gu"),f=n.n(d),v=n("w7jO"),E=n("NZCt"),b=n.n(E),k=n("AJbu"),g=n("8Jek"),j=n.n(g),w=n("xBFs"),y=n("Wbzz"),O=function(e){var t=e.match(/\/nav-frontend-(.*)\/md/)[1];return Object(y.useStaticQuery)("437741032").allComponentMetadata.nodes.map((function(e){return e})).filter((function(e){return e.relativePath.match(/nav-frontend-(.*)\/src\//)[1]===t}))},h=n("Zofj"),N=n("mK0O"),x=(n("Q4dR"),n("GjRq"));n("g5en");function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){Object(N.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(e){var t=e.moduleProps,n=(Object(a.a)(e,["moduleProps"]),t.props),c=Object.keys(n).sort().map((function(e){return P({propName:e},n[e])})),o=Object(r.useRef)();return l.a.createElement(x.a,null,l.a.createElement("table",{className:"tabell tabell--stripet",ref:function(e){o.current=e}},l.a.createElement("thead",null,l.a.createElement("tr",null,["Property","Type","Required","Description","Default"].map((function(e,t){return l.a.createElement(S,{val:e,index:t,key:t})})))),l.a.createElement("tbody",null,c.filter((function(e){return 0!==e.name.indexOf("aria-")})).sort((function(e,t){return e.name.localeCompare(t.name)})).map((function(e,t){return l.a.createElement(D,{val:P(P({},e),{},{defaultValue:e.defaultValue?e.defaultValue:"-"}),key:t})})))))},S=function(e){return l.a.createElement("th",{key:e.index},e.val)},R=function(e){if(e&&"object"==typeof e){if("enum"===e.name)return e.value.map((function(e){return e.value})).join(" | ");e=e.name||e.value}return null==e||e.length<=0?"-":e.toString()},D=function(e){var t=function(e){var t=e.match(/^@deprecated/);return t?l.a.createElement("span",null,l.a.createElement("strong",null,t[0]),e.substr(11,e.length)):e}(R(e.val.description));return l.a.createElement("tr",{className:j()({deprecated:"object"==typeof t})},l.a.createElement("td",null,l.a.createElement("strong",null,R(e.val.name))),l.a.createElement("td",null,l.a.createElement("code",{className:"inline"},R(e.val.type))),l.a.createElement("td",null,R(e.val.required)),l.a.createElement("td",null,t),l.a.createElement("td",null,R(e.val.defaultValue)))},L=function(e){var t=e.context,n=(Object(a.a)(e,["context"]),O(t.source)),c=Object(r.useState)(0),u=c[0],m=c[1],i=Object(r.useState)(void 0),s=i[0],E=i[1];Object(r.useEffect)((function(){m(b())}),[]);var b=function(){var e=window.location.pathname.split("/")[2],a=n.findIndex((function(t){return t.name.toLowerCase()===e.toLowerCase()})),r=n.findIndex((function(e){return e.name===t.defaultExport}));return Math.max(0,r,a)},g=function(){return"import "+(n[u].name===t.defaultExport?n[u].name:"{ "+n[u].name+" }")+" from '"+t.name+"';"};return 0!==n.length&&l.a.createElement("div",{className:"module-browser"},l.a.createElement(p.Systemtittel,{id:"moduler"},"Moduler"),l.a.createElement(o.a,{border:!0,className:"module-browser__wrapper"},l.a.createElement("nav",null,l.a.createElement("ul",{className:"nav-list"},n.map((function(e,n){return void 0===e.name?null:l.a.createElement("li",{key:e.name},l.a.createElement("button",{className:j()("module-browser--reset-button","module-browser__button",{active:u===n}),onClick:function(e){return m(n)}},e.name,e.name===t.defaultExport&&l.a.createElement("span",null," (default)")))})))),l.a.createElement("div",{className:"module-browser__content"},l.a.createElement(w.Select,{label:"Velg modul",onChange:function(e){return m(Number(e.target.value))},value:u},n.map((function(e,t){return void 0===e.name?null:l.a.createElement("option",{key:e.name,value:t},e.name)}))),l.a.createElement("div",{className:"module-browser--innline"},l.a.createElement(p.Undertittel,{className:"first"},"Import"),l.a.createElement(v.Flatknapp,{className:"module-browser__copyknapp","aria-label":"Kopier import til utklippstavle",onClick:function(e){return function(e,t){E(s?void 0:e.currentTarget);var n=document.createElement("textarea");n.value=t,document.body.appendChild(n),n.select(),document.execCommand("Copy"),n.remove()}(e,g())},kompakt:!0},l.a.createElement(h.d,null))),l.a.createElement(k.c,{className:"language-jsx"},g()),l.a.createElement(f.a,{orientering:d.PopoverOrientering.Over,ankerEl:s,onRequestClose:function(){return E(void 0)}},l.a.createElement("p",{className:"module-browser__popover"}," Kopiert! ")),l.a.createElement(p.Undertittel,null,"React props"),l.a.createElement(_,{moduleProps:n[u]}))))};n("ZwpE"),t.default=function(e){var t=e.pageContext,n=Object(a.a)(e,["pageContext"]),c=Object(r.useState)(0),u=c[0],i=c[1],d=Object(r.useState)(void 0),E=d[0],g=d[1],j=t.version,w=t.name,y=t.peerDep,O=t.allDep,N=["npm install "+O.join(" ")+" --save","npm install "+O.filter((function(e){return-1!==e.indexOf("-style")||-1!==e.indexOf("-core")})).join(" ")+" --save"],x=-1!==w.indexOf("-style")?[{label:"Kun Less"}]:[{label:"React + Less"},{label:"Kun Less"}];return l.a.createElement("div",{className:"componentGuidelinePage"},l.a.createElement("section",{className:"section full"},l.a.createElement(p.Systemtittel,{id:"npm-pakke"},"NPM-pakke"),l.a.createElement("table",{className:"tabell"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Navn:"),l.a.createElement("td",null,l.a.createElement(s.a,{href:"https://www.npmjs.com/package/"+w},w))),l.a.createElement("tr",null,l.a.createElement("th",null,"Siste versjon:"),l.a.createElement("td",null,l.a.createElement(s.a,{href:"https://www.npmjs.com/package/"+w+"?activeTab=versions"},j))),l.a.createElement("tr",null,l.a.createElement("th",null,"Peer dependencies:"),l.a.createElement("td",{className:"dependencies"},Object.keys(y).map((function(e){return[l.a.createElement(s.a,{key:e,href:"https://www.npmjs.com/package/"+e},e)," "]}))))))),l.a.createElement("section",{className:"section full"},l.a.createElement("div",{className:"install-doc"},l.a.createElement(p.Systemtittel,{id:"install"},"Installering",l.a.createElement(b.a,null,"De fleste komponentene våre består av en React-pakke og en tilhørende Less-pakke. React-pakkene er avhengige av Less-pakkene, men ikke motsatt. Det betyr at du kan velge å installere kun Less-pakkene hvis du f.eks. vil bruke et Javascript-rammeverk som er inkompatibelt med React - eller hvis du av andre grunner ønsker å håndtere HTML og Javascript selv."),l.a.createElement(v.Flatknapp,{className:"technical__copyknapp","aria-label":"Kopier npm install til utklippstavle",onClick:function(e){return function(e,t){g(E?void 0:e.currentTarget);var n=document.createElement("textarea");n.value=t,document.body.appendChild(n),n.select(),document.execCommand("Copy"),n.remove()}(e,N[u])},kompakt:!0},l.a.createElement(h.d,null))),l.a.createElement(m.a,{tabs:x,onChange:function(e,t){return i(t)}}),l.a.createElement(o.a,{border:!0},l.a.createElement(k.a,null,N[u])),l.a.createElement(f.a,{orientering:"over",ankerEl:E,onRequestClose:function(){return g(void 0)}},l.a.createElement("p",{className:"technical__popover"}," Kopiert! ")))),l.a.createElement("section",{className:"section full"},l.a.createElement(L,Object.assign({context:t},n))))}},g5en:function(e,t,n){}}]);
//# sourceMappingURL=component---src-components-layout-templates-technical-jsx-094c9ba4ebd1580667ec.js.map