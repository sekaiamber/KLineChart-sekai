(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[73],{"6T1g":function(e,t,a){"use strict";var n=a("kM82"),r=a.n(n),l=a("3Mpw"),c=a("dEAq");a("qHiR"),a("rVZW");function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function o(e,t){return h(e)||u(e,t)||d(e,t)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function u(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,l=[],c=!0,i=!1;try{for(a=a.call(e);!(c=(n=a.next()).done);c=!0)if(l.push(n.value),t&&l.length===t)break}catch(o){i=!0,r=o}finally{try{c||null==a["return"]||a["return"]()}finally{if(i)throw r}}return l}}function h(e){if(Array.isArray(e))return e}var f={acss:"css",axml:"xml"};t["a"]=function(e){var t=e.code,a=e.lang,n=e.showCopy,s=void 0===n||n,d=Object(c["useCopy"])(),m=o(d,2),u=m[0],h=m[1];return r.a.createElement("div",{className:"__dumi-default-code-block"},r.a.createElement(l["a"],i({},l["b"],{code:t,language:f[a]||a,theme:void 0}),(function(e){var a=e.className,n=e.style,l=e.tokens,c=e.getLineProps,i=e.getTokenProps;return r.a.createElement("pre",{className:a,style:n},s&&r.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":h,onClick:function(){return u(t)}}),l.map((function(e,t){return r.a.createElement("div",c({line:e,key:t}),e.map((function(e,t){return r.a.createElement("span",i({token:e,key:t}))})))})))})))}},Pg6R:function(e,t,a){},WtSh:function(e,t,a){"use strict";var n=a("kM82"),r=a.n(n),l=a("hKI/"),c=a.n(l);a("Pg6R");function i(e,t){return u(e)||m(e,t)||s(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"===typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function m(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,l=[],c=!0,i=!1;try{for(a=a.call(e);!(c=(n=a.next()).done);c=!0)if(l.push(n.value),t&&l.length===t)break}catch(o){i=!0,r=o}finally{try{c||null==a["return"]||a["return"]()}finally{if(i)throw r}}return l}}function u(e){if(Array.isArray(e))return e}var h=function(e){var t=e.children,a=Object(n["useRef"])(),l=Object(n["useState"])(!1),o=i(l,2),s=o[0],d=o[1],m=Object(n["useState"])(!1),u=i(m,2),h=u[0],f=u[1];return Object(n["useEffect"])((function(){var e=a.current,t=c()((function(){d(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r.a.createElement("div",{className:"__dumi-default-table"},r.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":s||void 0,"data-right-folded":h||void 0},r.a.createElement("table",null,t)))};t["a"]=h},"c+Zl":function(e,t,a){"use strict";a.r(t);var n=a("kM82"),r=a.n(n),l=a("dEAq"),c=a("6T1g"),i=a("WtSh"),o=r.a.memo((e=>{e.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"technical-indicator"},r.a.createElement(l["AnchorLink"],{to:"#technical-indicator","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Technical indicator"),r.a.createElement("h2",{id:"default-technical-indicators"},r.a.createElement(l["AnchorLink"],{to:"#default-technical-indicators","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Default technical indicators"),r.a.createElement(i["a"],null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{align:"center"},r.a.createElement("strong",null,"Indicator name")),r.a.createElement("th",{align:"center"},r.a.createElement("strong",null,"Default calculation parameters")),r.a.createElement("th",{align:"center"},r.a.createElement("strong",null,"Indicator name")),r.a.createElement("th",{align:"center"},r.a.createElement("strong",null,"Default calculation parameters")),r.a.createElement("th",{align:"center"},r.a.createElement("strong",null,"Indicator name")),r.a.createElement("th",{align:"center"},r.a.createElement("strong",null,"Default calculation parameters")))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{align:"center"},"MA"),r.a.createElement("td",{align:"center"},"[5, 10, 30, 60]"),r.a.createElement("td",{align:"center"},"BIAS"),r.a.createElement("td",{align:"center"},"[6, 12, 24]"),r.a.createElement("td",{align:"center"},"VR"),r.a.createElement("td",{align:"center"},"[24, 30]")),r.a.createElement("tr",null,r.a.createElement("td",{align:"center"},"EMA"),r.a.createElement("td",{align:"center"},"[6, 12, 20]"),r.a.createElement("td",{align:"center"},"BRAR"),r.a.createElement("td",{align:"center"},"[26]"),r.a.createElement("td",{align:"center"},"WR"),r.a.createElement("td",{align:"center"},"[6, 10, 14]")),r.a.createElement("tr",null,r.a.createElement("td",{align:"center"},"SMA"),r.a.createElement("td",{align:"center"},"[12, 2]"),r.a.createElement("td",{align:"center"},"CCI"),r.a.createElement("td",{align:"center"},"[13]"),r.a.createElement("td",{align:"center"},"MTM"),r.a.createElement("td",{align:"center"},"[6, 10]")),r.a.createElement("tr",null,r.a.createElement("td",{align:"center"},"BBI"),r.a.createElement("td",{align:"center"},"[3, 6, 12, 24]"),r.a.createElement("td",{align:"center"},"DMI"),r.a.createElement("td",{align:"center"},"[14, 6]"),r.a.createElement("td",{align:"center"},"EMV"),r.a.createElement("td",{align:"center"},"[14, 9]")),r.a.createElement("tr",null,r.a.createElement("td",{align:"center"},"VOL"),r.a.createElement("td",{align:"center"},"[5, 10, 20]"),r.a.createElement("td",{align:"center"},"CR"),r.a.createElement("td",{align:"center"},"[26, 10, 20, 40, 60]"),r.a.createElement("td",{align:"center"},"SAR"),r.a.createElement("td",{align:"center"},"[2, 2, 20]")),r.a.createElement("tr",null,r.a.createElement("td",{align:"center"},"MACD"),r.a.createElement("td",{align:"center"},"[12, 26, 9]"),r.a.createElement("td",{align:"center"},"PSY"),r.a.createElement("td",{align:"center"},"[12, 6]"),r.a.createElement("td",{align:"center"},"AO"),r.a.createElement("td",{align:"center"},"[5, 34]")),r.a.createElement("tr",null,r.a.createElement("td",{align:"center"},"BOLL"),r.a.createElement("td",{align:"center"},"[20]"),r.a.createElement("td",{align:"center"},"DMA"),r.a.createElement("td",{align:"center"},"[10, 50, 10]"),r.a.createElement("td",{align:"center"},"ROC"),r.a.createElement("td",{align:"center"},"[12, 6]")),r.a.createElement("tr",null,r.a.createElement("td",{align:"center"},"KDJ"),r.a.createElement("td",{align:"center"},"[9, 3, 3]"),r.a.createElement("td",{align:"center"},"TRIX"),r.a.createElement("td",{align:"center"},"[12, 20]"),r.a.createElement("td",{align:"center"},"PVT"),r.a.createElement("td",{align:"center"},"None")),r.a.createElement("tr",null,r.a.createElement("td",{align:"center"},"RSI"),r.a.createElement("td",{align:"center"},"[6, 12, 24]"),r.a.createElement("td",{align:"center"},"OBV"),r.a.createElement("td",{align:"center"},"[30]"),r.a.createElement("td",{align:"center"},"AVP"),r.a.createElement("td",{align:"center"},"None")))),r.a.createElement("h2",{id:"technical-indicator-template"},r.a.createElement(l["AnchorLink"],{to:"#technical-indicator-template","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Technical indicator template"),r.a.createElement("p",null,"To complete a technical indicator template, you only need to generate a technical indicator information, and then add it globally through ",r.a.createElement("code",null,"extension.addTechnicalIndicatorTemplate"),", or add it for a single chart instance through the chart instance method ",r.a.createElement("code",null,"addTechnicalIndicatorTemplate"),". Adding to the chart can be used like the built-in technical indicators."),r.a.createElement("h3",{id:"property-description"},r.a.createElement(l["AnchorLink"],{to:"#property-description","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Property description"),r.a.createElement("h4",{id:"technical-indicator-information"},r.a.createElement(l["AnchorLink"],{to:"#technical-indicator-information","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Technical indicator information"),r.a.createElement(c["a"],{code:"{\n  // The name of the technical indicator, a necessary field, is the only identifier of the technical indicator\n  name:'xxx',\n\n  // For tooltip display\n  shortName: 'xxx',\n\n  // Technical indicator calculation method, necessary fields\n  // This field is a callback method, the callback parameters are the source data and calculated parameters of the current chart, and an array or promise needs to be returned\n  // kLineDataList chart raw data\n  // params calculation parameters\n  // plots technical indicator data configuration item\n  // extendData\n  calcTechnicalIndicator: (kLineDataList, { params, plots, extendData }) => { return [] },\n\n  // Series, can be the default\n  series: 'normal',\n\n  // Precision, can be the default, the default is 4\n  precision: 4,\n\n  // The calculation parameter is an array, which can be defaulted, number or { value, allowDecimal }\n  calcParams: [],\n\n  // The data configuration item is an array\n  plots: [],\n\n  // Do you need to check the calculation parameters, you can default it, the default is true\n  // If true, when setting indicator parameters, if the number of parameters is inconsistent with the default number of parameters, it will not take effect\n  shouldCheckParamCount: true,\n\n  // Do you need to format big data values\n  shouldFormatBigNumber: false,\n\n  // Do you need auxiliary ohlc line\n  shouldOhlc: false,\n\n  // The specified minimum value, which can be defaulted\n  // If set, this will prevail when calculating the minimum value on the y-axis\n  minValue: null,\n\n  // The specified maximum value can be defaulted\n  // If set, this will prevail when calculating the maximum value on the y-axis\n  maxValue: null,\n\n  // Style, can be the default, the default is to synchronize the style configuration\n  styles: null,\n\n  // Extend data can be defaulted\n  // can be a method or data\n  extendData: (params) => { return },\n\n  // Regenerate plots, which is a callback method, which can be defaulted\n  // trigger when the calculation parameter changes\n  // The return value needs a plots\n  regeneratePlots: (params) => {return [] },\n\n  // Generate the data displayed by the tooltip and return an array in the format `{ title: 'xxx', value: 'xxx', color: 'xxx' }`, which can be defaulted\n   // dataSource data source\n   // viewport size information\n   // crosshair crosshair information\n   // technicalIndicator technical indicator information\n   // xAxis x axis\n   // yAxis y axis\n   // defaultStyles default styles\n  createTooltipDataSource: ({\n    dataSource,\n    viewport,\n    crosshair,\n    technicalIndicator,\n    xAxis,\n    yAxis,\n    defaultStyles\n  }) => { return [] }\n\n  // Custom rendering, can be defaulted,\n  // ctx canvas context\n  // dataSource data source, including the original bar data and calculated indicator data as well as the starting point of drawing\n  // viewport size information\n  // styles style\n  // xAxis x-axis component\n  // yAxis y-axis component\n  render: ({\n    ctx,\n    dataSource,\n    viewport,\n    styles,\n    xAxis,\n    yAxis\n  }) => {}\n}",lang:"javascript"}),r.a.createElement("h4",{id:"plots-sub-item-information"},r.a.createElement(l["AnchorLink"],{to:"#plots-sub-item-information","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Plots sub-item information"),r.a.createElement(c["a"],{code:"{\n  // Required fields, determine the return value of the method calcTechnicalIndicator\n  key: '',\n  // By default, mainly for prompt\n  title: '',\n  // By default, drawing type, currently supports'line','circle' and'bar'\n  type: '',\n  // By default, basic comparison data\n  // If set, when the graph is bar, it will be drawn above and below this value, such as: the macd value of the MACD indicator\n  baseValue: null,\n  // By default\n  // Can be value or method, if it is a method, it needs to return a string of color values\n  color: (data, options) => {},\n  // By default, it only takes effect when type is 'circle' and 'bar'\n  // Can be a fixed boolean value or a method, if it is a method, it needs to return a boolean value\n  isStroke: (data, options) => {},\n  // By default, it only takes effect when type is 'line'\n  // Can be a fixed boolean value or a method, if it is a method, it needs to return a boolean value\n  isDashed: (data, options) => {}\n}",lang:"javascript"}),r.a.createElement("h3",{id:"example"},r.a.createElement(l["AnchorLink"],{to:"#example","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Example"),r.a.createElement("p",null,"The following a technical indicator named 'MA' to introduce step by step how to make a technical indicator template."),r.a.createElement("h4",{id:"step-one"},r.a.createElement(l["AnchorLink"],{to:"#step-one","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"step one"),r.a.createElement("p",null,"First determine the calculation parameters (calcParams) and configuration items (plots). The 'MA' technical indicator needs to display the line connecting the average closing prices of the two periods, one is 'ma1' and the other is called 'ma2'. So the plots configuration is:"),r.a.createElement(c["a"],{code:"{\n  // There are two calculation parameters, one calculates the average value of 5 cycle times, namely'ma1', and the other calculates the average value of 10 cycle times, namely'ma10'\n  calcParams: [5, 10],\n  plots: [\n    // the first line'ma5'\n    { key: 'ma1', title: 'MA5: ', type: 'line' },\n    // second line'ma10'\n    { key: 'ma2', title: 'MA10: ', type: 'line' }\n  ]\n}",lang:"javascript"}),r.a.createElement("h4",{id:"step-two"},r.a.createElement(l["AnchorLink"],{to:"#step-two","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Step two"),r.a.createElement("p",null,"Determine other attributes"),r.a.createElement(c["a"],{code:"{\n  name:'MA',\n  calcParams: [5, 10],\n  plots: [\n    {key:'ma1', title:'MA5: ', type:'line' },\n    {key:'ma2', title:'MA10: ', type:'line'}\n  ],\n  // When the calculation parameters are changed, I hope that the prompt is the same as the parameters, that is, the value of the title needs to be changed\n  regeneratePlots: (params) => {\n    return params.map((p, i) => {\n      return { key: `ma${i + 1}`, title: `MA${p}: `, type:'line' }\n    })\n  },\n  // Calculation results\n  calcTechnicalIndicator: (kLineDataList, { params, plots }) => {\n    // Note: The number of returned data needs to be consistent with the number of data in kLineDataList. If there is no value, just use {} instead.\n    // The calculation parameter is best to take the callback parameter calcParams, if not, when the subsequent calculation parameters change, the calculation here cannot respond in time\n    const closeSums = []\n    return kLineDataList.map((kLineData, i) => {\n      const ma = {}\n      const close = kLineData.close\n      params.forEach((param, j) => {\n        closeSums[j] = (closeSums[j] || 0) + close\n        if (i >= param-1) {\n          ma[plots[j].key] = closeSums[j] / param\n          closeSums[j] -= dataList[i-(param-1)].close\n        }\n      })\n      // If there is a value, the data format of each item here should be {ma1: xxx, ma2: xxx}\n      // Each key needs to be consistent with the value corresponding to the sub-item key in plots\n      return ma\n    })\n  }\n}",lang:"javascript"})))}));t["default"]=e=>{var t=r.a.useContext(l["context"]),a=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(o,{demos:a})}},rVZW:function(e,t,a){}}]);