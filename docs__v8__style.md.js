(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[83],{"6T1g":function(n,e,o){"use strict";var t=o("kM82"),r=o.n(t),a=o("3Mpw"),i=o("dEAq");o("qHiR"),o("rVZW");function l(){return l=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},l.apply(this,arguments)}function s(n,e){return g(n)||h(n,e)||c(n,e)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(n,e){if(n){if("string"===typeof n)return u(n,e);var o=Object.prototype.toString.call(n).slice(8,-1);return"Object"===o&&n.constructor&&(o=n.constructor.name),"Map"===o||"Set"===o?Array.from(n):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?u(n,e):void 0}}function u(n,e){(null==e||e>n.length)&&(e=n.length);for(var o=0,t=new Array(e);o<e;o++)t[o]=n[o];return t}function h(n,e){var o=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=o){var t,r,a=[],i=!0,l=!1;try{for(o=o.call(n);!(i=(t=o.next()).done);i=!0)if(a.push(t.value),e&&a.length===e)break}catch(s){l=!0,r=s}finally{try{i||null==o["return"]||o["return"]()}finally{if(l)throw r}}return a}}function g(n){if(Array.isArray(n))return n}var p={acss:"css",axml:"xml"};e["a"]=function(n){var e=n.code,o=n.lang,t=n.showCopy,d=void 0===t||t,c=Object(i["useCopy"])(),u=s(c,2),h=u[0],g=u[1];return r.a.createElement("div",{className:"__dumi-default-code-block"},r.a.createElement(a["a"],l({},a["b"],{code:e,language:p[o]||o,theme:void 0}),(function(n){var o=n.className,t=n.style,a=n.tokens,i=n.getLineProps,l=n.getTokenProps;return r.a.createElement("pre",{className:o,style:t},d&&r.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":g,onClick:function(){return h(e)}}),a.map((function(n,e){return r.a.createElement("div",i({line:n,key:e}),n.map((function(n,e){return r.a.createElement("span",l({token:n,key:e}))})))})))})))}},eGMw:function(n,e,o){"use strict";o.r(e);var t=o("kM82"),r=o.n(t),a=o("dEAq"),i=o("6T1g"),l=r.a.memo((n=>{n.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"style-description"},r.a.createElement(a["AnchorLink"],{to:"#style-description","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Style description"),r.a.createElement(i["a"],{code:"{\n  grid: {\n    show: true,\n    horizontal: {\n      show: true,\n      size: 1,\n      color: '#393939',\n      // 'solid'|'dash'\n      style: 'dash',\n      dashValue: [2, 2]\n    },\n    vertical: {\n      show: false,\n      size: 1,\n      color: '#393939',\n      // 'solid'|'dash'\n      style: 'dash',\n      dashValue: [2, 2]\n    }\n  },\n  candle: {\n    margin: {\n      top: 0.2,\n      bottom: 0.1\n    },\n    // 'candle_solid'|'candle_stroke'|'candle_up_stroke'|'candle_down_stroke'|'ohlc'|'area'\n    type: 'candle_solid',\n    bar: {\n      upColor: '#26A69A',\n      downColor: '#EF5350',\n      noChangeColor: '#888888'\n    },\n    area: {\n      lineSize: 2,\n      lineColor: '#2196F3',\n      value: 'close',\n      fillColor: [{\n        offset: 0,\n        color: 'rgba(33, 150, 243, 0.01)'\n      }, {\n        offset: 1,\n        color: 'rgba(33, 150, 243, 0.2)'\n      }]\n    },\n    priceMark: {\n      show: true,\n      high: {\n        show: true,\n        color: '#D9D9D9',\n        textMargin: 5,\n        textSize: 10,\n        textFamily: 'Helvetica Neue',\n        textWeight: 'normal'\n      },\n      low: {\n        show: true,\n        color: '#D9D9D9',\n        textMargin: 5,\n        textSize: 10,\n        textFamily: 'Helvetica Neue',\n        textWeight: 'normal',\n      },\n      last: {\n        show: true,\n        upColor: '#26A69A',\n        downColor: '#EF5350',\n        noChangeColor: '#888888',\n        line: {\n          show: true,\n          // 'solid'|'dash'\n          style: 'dash',\n          dashValue: [4, 4],\n          size: 1\n        },\n        text: {\n          show: true,\n          size: 12,\n          paddingLeft: 2,\n          paddingTop: 2,\n          paddingRight: 2,\n          paddingBottom: 2,\n          color: '#FFFFFF',\n          family: 'Helvetica Neue',\n          weight: 'normal',\n          borderRadius: 2\n        }\n      }\n    },\n    tooltip: {\n      // 'always' | 'follow_cross' | 'none'\n      showRule: 'always',\n      // 'standard' | 'rect'\n      showType: 'standard',\n      labels: ['\u65f6\u95f4', '\u5f00', '\u6536', '\u9ad8', '\u4f4e', '\u6210\u4ea4\u91cf'],\n      values: null,\n      defaultValue: 'n/a',\n      rect: {\n        paddingLeft: 0,\n        paddingRight: 0,\n        paddingTop: 0,\n        paddingBottom: 6,\n        offsetLeft: 8,\n        offsetTop: 8,\n        offsetRight: 8,\n        borderRadius: 4,\n        borderSize: 1,\n        borderColor: '#3f4254',\n        fillColor: 'rgba(17, 17, 17, .3)'\n      },\n      text: {\n        size: 12,\n        family: 'Helvetica Neue',\n        weight: 'normal',\n        color: '#D9D9D9',\n        marginLeft: 8,\n        marginTop: 6,\n        marginRight: 8,\n        marginBottom: 0\n      }\n    }\n  },\n  technicalIndicator: {\n    margin: {\n      top: 0.2,\n      bottom: 0.1\n    },\n    bar: {\n      upColor: '#26A69A',\n      downColor: '#EF5350',\n      noChangeColor: '#888888'\n    },\n    line: {\n      size: 1,\n      dashValue: [2, 2],\n      colors: ['#FF9600', '#9D65C9', '#2196F3', '#E11D74', '#01C5C4']\n    },\n    circle: {\n      upColor: '#26A69A',\n      downColor: '#EF5350',\n      noChangeColor: '#888888'\n    },\n    lastValueMark: {\n      show: false,\n      text: {\n        show: false,\n        color: '#ffffff',\n        size: 12,\n        family: 'Helvetica Neue',\n        weight: 'normal',\n        paddingLeft: 3,\n        paddingTop: 2,\n        paddingRight: 3,\n        paddingBottom: 2,\n        borderRadius: 2\n      }\n    },\n    tooltip: {\n      // 'always' | 'follow_cross' | 'none'\n      showRule: 'always',\n      // 'standard' | 'rect'\n      showType: 'standard',\n      showName: true,\n      showParams: true,\n      defaultValue: 'n/a',\n      text: {\n        size: 12,\n        family: 'Helvetica Neue',\n        weight: 'normal',\n        color: '#D9D9D9',\n        marginTop: 6,\n        marginRight: 8,\n        marginBottom: 0,\n        marginLeft: 8\n      }\n    }\n  },\n  xAxis: {\n    show: true,\n    height: null,\n    axisLine: {\n      show: true,\n      color: '#888888',\n      size: 1\n    },\n    tickText: {\n      show: true,\n      color: '#D9D9D9',\n      family: 'Helvetica Neue',\n      weight: 'normal',\n      size: 12,\n      paddingTop: 3,\n      paddingBottom: 6\n    },\n    tickLine: {\n      show: true,\n      size: 1,\n      length: 3,\n      color: '#888888'\n    }\n  },\n  yAxis: {\n    show: true,\n    width: null,\n    // 'left' | 'right'\n    position: 'right',\n    // 'normal' | 'percentage' | 'log'\n    type: 'normal',\n    inside: false,\n     reverse: false,\n    axisLine: {\n      show: true,\n      color: '#888888',\n      size: 1\n    },\n    tickText: {\n      show: true,\n      color: '#D9D9D9',\n      family: 'Helvetica Neue',\n      weight: 'normal',\n      size: 12,\n      paddingLeft: 3,\n      paddingRight: 6\n    },\n    tickLine: {\n      show: true,\n      size: 1,\n      length: 3,\n      color: '#888888'\n    }\n  },\n  separator: {\n    size: 1,\n    color: '#888888',\n    fill: true,\n    activeBackgroundColor: 'rgba(230, 230, 230, .15)'\n  },\n  crosshair: {\n    show: true,\n    horizontal: {\n      show: true,\n      line: {\n        show: true,\n        // 'solid'|'dash'\n        style: 'dash',\n        dashValue: [4, 2],\n        size: 1,\n        color: '#888888'\n      },\n      text: {\n        show: true,\n        color: '#D9D9D9',\n        size: 12,\n        family: 'Helvetica Neue',\n        weight: 'normal',\n        paddingLeft: 2,\n        paddingRight: 2,\n        paddingTop: 2,\n        paddingBottom: 2,\n        borderSize: 1,\n        borderColor: '#505050',\n        borderRadius: 2,\n        backgroundColor: '#505050'\n      }\n    },\n    vertical: {\n      show: true,\n      line: {\n        show: true,\n        // 'solid'|'dash'\n        style: 'dash',\n        dashValue: [4, 2],\n        size: 1,\n        color: '#888888'\n      },\n      text: {\n        show: true,\n        color: '#D9D9D9',\n        size: 12,\n        family: 'Helvetica Neue',\n        weight: 'normal',\n        paddingLeft: 2,\n        paddingRight: 2,\n        paddingTop: 2,\n        paddingBottom: 2,\n        borderSize: 1,\n        borderColor: '#505050',\n        borderRadius: 2,\n        backgroundColor: '#505050'\n      }\n    }\n  },\n  shape: {\n    point: {\n      backgroundColor: '#2196F3',\n      borderColor: '#2196F3',\n      borderSize: 1,\n      radius: 4,\n      activeBackgroundColor: '#2196F3',\n      activeBorderColor: '#2196F3',\n      activeBorderSize: 1,\n      activeRadius: 6\n    },\n    line: {\n      // 'solid'|'dash'\n      style: 'solid'\n      color: '#2196F3',\n      size: 1,\n      dashValue: [2, 2]\n    },\n    polygon: {\n      // 'stroke'|'fill'\n      style: 'stroke',\n      stroke: {\n        // 'solid'|'dash'\n        style: 'solid',\n        size: 1,\n        color: '#2196F3',\n        dashValue: [2, 2]\n      },\n      fill: {\n        color: 'rgba(33, 150, 243, 0.1)'\n      }\n    },\n    arc: {\n      // 'stroke'|'fill'\n      style: 'stroke',\n      stroke: {\n        // 'solid'|'dash'\n        style: 'solid',\n        size: 1,\n        color: '#2196F3',\n        dashValue: [2, 2]\n      },\n      fill: {\n        color: '#2196F3'\n      }\n    },\n    text: {\n      style: 'fill',\n      color: '#2196F3',\n      size: 12,\n      family: 'Helvetica Neue',\n      weight: 'normal',\n      offset: [0, 0]\n    }\n  },\n  annotation: {\n    // 'top' | 'bottom' | 'point'\n    position: 'top',\n    offset: [20, 0]\n    symbol: {\n      // 'diamond' | 'circle' | 'rect' | 'triangle' | 'custom' | 'none'\n      type: 'diamond',\n      size: 8,\n      color: '#2196F3',\n      activeSize: 10,\n      activeColor: '#FF9600'\n    }\n  },\n  tag: {\n    // 'top' | 'bottom' | 'point'\n    position: 'point',\n    offset: 0,\n    line: {\n      show: true,\n      style: LineStyle.DASH,\n      dashValue: [4, 2],\n      size: 1,\n      color: '#2196F3'\n    },\n    text: {\n      color: '#FFFFFF',\n      backgroundColor: '#2196F3',\n      size: 12,\n      family: 'Helvetica Neue',\n      weight: 'normal',\n      paddingLeft: 2,\n      paddingRight: 2,\n      paddingTop: 2,\n      paddingBottom: 2,\n      borderRadius: 2,\n      borderSize: 1,\n      borderColor: '#2196F3'\n    },\n    mark: {\n      offset: 0,\n      color: '#FFFFFF',\n      backgroundColor: '#2196F3',\n      size: 12,\n      family: 'Helvetica Neue',\n      weight: 'normal',\n      paddingLeft: 2,\n      paddingRight: 2,\n      paddingTop: 2,\n      paddingBottom: 2,\n      borderRadius: 2,\n      borderSize: 1,\n      borderColor: '#2196F3'\n    }\n  }\n}",lang:"javascript"})))}));e["default"]=n=>{var e=r.a.useContext(a["context"]),o=e.demos;return r.a.useEffect((()=>{var e;null!==n&&void 0!==n&&null!==(e=n.location)&&void 0!==e&&e.hash&&a["AnchorLink"].scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))}),[]),r.a.createElement(l,{demos:o})}},rVZW:function(n,e,o){}}]);