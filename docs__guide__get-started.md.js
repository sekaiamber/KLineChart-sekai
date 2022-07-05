(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[30],{"6T1g":function(e,n,t){"use strict";var a=t("kM82"),r=t.n(a),o=t("3Mpw"),l=t("dEAq");t("qHiR"),t("rVZW");function c(){return c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},c.apply(this,arguments)}function i(e,n){return h(e)||u(e,n)||m(e,n)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,n){if(e){if("string"===typeof e)return d(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?d(e,n):void 0}}function d(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function u(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,r,o=[],l=!0,c=!1;try{for(t=t.call(e);!(l=(a=t.next()).done);l=!0)if(o.push(a.value),n&&o.length===n)break}catch(i){c=!0,r=i}finally{try{l||null==t["return"]||t["return"]()}finally{if(c)throw r}}return o}}function h(e){if(Array.isArray(e))return e}var p={acss:"css",axml:"xml"};n["a"]=function(e){var n=e.code,t=e.lang,a=e.showCopy,s=void 0===a||a,m=Object(l["useCopy"])(),d=i(m,2),u=d[0],h=d[1];return r.a.createElement("div",{className:"__dumi-default-code-block"},r.a.createElement(o["a"],c({},o["b"],{code:n,language:p[t]||t,theme:void 0}),(function(e){var t=e.className,a=e.style,o=e.tokens,l=e.getLineProps,c=e.getTokenProps;return r.a.createElement("pre",{className:t,style:a},s&&r.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":h,onClick:function(){return u(n)}}),o.map((function(e,n){return r.a.createElement("div",l({line:e,key:n}),e.map((function(e,n){return r.a.createElement("span",c({token:e,key:n}))})))})))})))}},KdCQ:function(e,n,t){"use strict";t.r(n);var a=t("kM82"),r=t.n(a),o=t("dEAq"),l=t("6T1g"),c=r.a.memo((e=>{e.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"-getting-started"},r.a.createElement(o["AnchorLink"],{to:"#-getting-started","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\ud83d\ude80 Getting Started"),r.a.createElement("h2",{id:"installation"},r.a.createElement(o["AnchorLink"],{to:"#installation","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Installation"),r.a.createElement("h3",{id:"npm"},r.a.createElement(o["AnchorLink"],{to:"#npm","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"npm"),r.a.createElement(l["a"],{code:"npm install klinecharts --save",lang:"shell"}),r.a.createElement("h3",{id:"yarn"},r.a.createElement(o["AnchorLink"],{to:"#yarn","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"yarn"),r.a.createElement(l["a"],{code:"yarn add klinecharts",lang:"shell"}),r.a.createElement("h3",{id:"cdn"},r.a.createElement(o["AnchorLink"],{to:"#cdn","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"cdn"),r.a.createElement(l["a"],{code:'<script\n  type="text/javascript"\n  src="https://cdn.jsdelivr.net/npm/klinecharts@latest/dist/klinecharts.min.js"\n><\/script>',lang:"html"}),r.a.createElement("h2",{id:"init-chart"},r.a.createElement(o["AnchorLink"],{to:"#init-chart","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Init chart"),r.a.createElement(l["a"],{code:"const chart = klinecharts.init(`${domId}`);",lang:"js"}),r.a.createElement("h2",{id:"add-data"},r.a.createElement(o["AnchorLink"],{to:"#add-data","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Add data"),r.a.createElement(l["a"],{code:"chart.applyNewData([\n  {\n    close: 4976.16,\n    high: 4977.99,\n    low: 4970.12,\n    open: 4972.89,\n    timestamp: 1587660000000,\n    volume: 204,\n  },\n  {\n    close: 4977.33,\n    high: 4979.94,\n    low: 4971.34,\n    open: 4973.2,\n    timestamp: 1587660060000,\n    volume: 194,\n  },\n  {\n    close: 4977.93,\n    high: 4977.93,\n    low: 4974.2,\n    open: 4976.53,\n    timestamp: 1587660120000,\n    volume: 197,\n  },\n  {\n    close: 4966.77,\n    high: 4968.53,\n    low: 4962.2,\n    open: 4963.88,\n    timestamp: 1587660180000,\n    volume: 28,\n  },\n  {\n    close: 4961.56,\n    high: 4972.61,\n    low: 4961.28,\n    open: 4961.28,\n    timestamp: 1587660240000,\n    volume: 184,\n  },\n  {\n    close: 4964.19,\n    high: 4964.74,\n    low: 4961.42,\n    open: 4961.64,\n    timestamp: 1587660300000,\n    volume: 191,\n  },\n  {\n    close: 4968.93,\n    high: 4972.7,\n    low: 4964.55,\n    open: 4966.96,\n    timestamp: 1587660360000,\n    volume: 105,\n  },\n  {\n    close: 4979.31,\n    high: 4979.61,\n    low: 4973.99,\n    open: 4977.06,\n    timestamp: 1587660420000,\n    volume: 35,\n  },\n  {\n    close: 4977.02,\n    high: 4981.66,\n    low: 4975.14,\n    open: 4981.66,\n    timestamp: 1587660480000,\n    volume: 135,\n  },\n  {\n    close: 4985.09,\n    high: 4988.62,\n    low: 4980.3,\n    open: 4986.72,\n    timestamp: 1587660540000,\n    volume: 76,\n  },\n]);",lang:"js"})))}));n["default"]=e=>{var n=r.a.useContext(o["context"]),t=n.demos;return r.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(c,{demos:t})}},rVZW:function(e,n,t){}}]);