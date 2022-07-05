(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"6T1g":function(e,n,t){"use strict";var a=t("kM82"),r=t.n(a),i=t("3Mpw"),o=t("dEAq");t("qHiR"),t("rVZW");function c(){return c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},c.apply(this,arguments)}function s(e,n){return m(e)||p(e,n)||d(e,n)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,n){if(e){if("string"===typeof e)return u(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,n):void 0}}function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function p(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,r,i=[],o=!0,c=!1;try{for(t=t.call(e);!(o=(a=t.next()).done);o=!0)if(i.push(a.value),n&&i.length===n)break}catch(s){c=!0,r=s}finally{try{o||null==t["return"]||t["return"]()}finally{if(c)throw r}}return i}}function m(e){if(Array.isArray(e))return e}var h={acss:"css",axml:"xml"};n["a"]=function(e){var n=e.code,t=e.lang,a=e.showCopy,l=void 0===a||a,d=Object(o["useCopy"])(),u=s(d,2),p=u[0],m=u[1];return r.a.createElement("div",{className:"__dumi-default-code-block"},r.a.createElement(i["a"],c({},i["b"],{code:n,language:h[t]||t,theme:void 0}),(function(e){var t=e.className,a=e.style,i=e.tokens,o=e.getLineProps,c=e.getTokenProps;return r.a.createElement("pre",{className:t,style:a},l&&r.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":m,onClick:function(){return p(n)}}),i.map((function(e,n){return r.a.createElement("div",o({line:e,key:n}),e.map((function(e,n){return r.a.createElement("span",c({token:e,key:n}))})))})))})))}},dFNL:function(e,n,t){"use strict";t.r(n);var a=t("kM82"),r=t.n(a),i=t("dEAq"),o=t("6T1g"),c=r.a.memo((e=>{e.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"shape"},r.a.createElement(i["AnchorLink"],{to:"#shape","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Shape"),r.a.createElement("h2",{id:"default-shape"},r.a.createElement(i["AnchorLink"],{to:"#default-shape","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Default shape"),r.a.createElement("p",null,r.a.createElement("code",null,"horizontalRayLine"),", ",r.a.createElement("code",null,"horizontalSegment"),", ",r.a.createElement("code",null,"horizontalStraightLine"),", ",r.a.createElement("code",null,"verticalRayLine"),", ",r.a.createElement("code",null,"verticalSegment"),", ",r.a.createElement("code",null,"verticalStraightLine"),", ",r.a.createElement("code",null,"rayLine"),", ",r.a.createElement("code",null,"segment"),", ",r.a.createElement("code",null,"straightLine"),", ",r.a.createElement("code",null,"priceLine"),", ",r.a.createElement("code",null,"priceChannelLine"),", ",r.a.createElement("code",null,"parallelStraightLine"),", ",r.a.createElement("code",null,"fibonacciLine")),r.a.createElement("h2",{id:"shape-template"},r.a.createElement(i["AnchorLink"],{to:"#shape-template","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Shape template"),r.a.createElement("p",null,"Create a shape template, and then add it globally through ",r.a.createElement("code",null,"extension.addShapeTemplate"),", or add it for a single graph instance through the chart instance method ",r.a.createElement("code",null,"addShapeTemplate"),". Adding to the chart can be used like the built-in shape."),r.a.createElement("h3",{id:"property-description"},r.a.createElement(i["AnchorLink"],{to:"#property-description","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Property description"),r.a.createElement("h4",{id:"shape-information"},r.a.createElement(i["AnchorLink"],{to:"#shape-information","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Shape information"),r.a.createElement(o["a"],{code:"{\n  // Name, a required field, as the unique identifier of the shape\n  name:'xxx',\n\n  // How many steps are required to complete the drawing, the required fields\n  totalStep: 3,\n\n  // Check whether the mouse point is on the graph, it is a callback method, a required field\n  // key The key given when creating the data source\n  // type shape element type\n  // dataSource shape information\n  // eventCoordinate current mouse coordinate\n  // Need to return boolean value\n  checkEventCoordinateOnShape: ({ key, type, dataSource, eventCoordinate }) => {},\n\n  // Creating a shape data source is a callback method. It must be a field and needs to return shape data\n  // step current step\n  // points time price point information\n  // coordinates time price point corresponding axis information\n  // viewport size\n  // precision precision information, including price and quantity precision\n  // styles style\n  // xAxis x axis component\n  // yAxis y axis component\n  // data data\n  createShapeDataSource: ({ step, points, coordinates, viewport, precision, styles, xAxis, yAxis, data }) => {},\n\n  // Process the mouse movement operation during the drawing process, it can be defaulted, and the mouse operation is triggered during the drawing process\n  // step current step\n  // points graph time price point information\n  // movePoint time and price information corresponding to the move point\n  // xAxis x-axis component\n  // yAxis y axis component\n  performEventMoveForDrawing: ({ step, points, movePoint, xAxis, yAxis }) => {},\n\n  // Handle the mouse hold and move operation, it can be defaulted, the mouse is triggered during the movement process of holding down an operating point\n  // points graph time price point information\n  // pressPointIndex The index of the pressed point\n  // pressPoint time and price information corresponding to the press point\n  // xAxis x axis component\n  // yAxis y axis component\n  performEventPressedMove: ({ points, pressPointIndex, pressPoint, xAxis, yAxis }) => {},\n\n  // Extended drawing, default\n  // ctx canvas context\n  // dataSource shape data information\n  // styles chart style configuration\n  // viewport size\n  // precision precision information, including price and quantity precision\n  // xAxis x axis component\n  // yAxis y axis component\n  // data data\n  drawExtend: ({ ctx, dataSource, styles, viewport, precision, xAxis, yAxis, data }) => {}\n}",lang:"js"}),r.a.createElement("h4",{id:"method-createshapedatasource-return-value-sub-item-information"},r.a.createElement(i["AnchorLink"],{to:"#method-createshapedatasource-return-value-sub-item-information","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Method createShapeDataSource return value sub-item information"),r.a.createElement(o["a"],{code:"{\n  // key\n  key:'key'\n  // Type, currently supports 'line' | 'text' | 'continuous_line' | 'polygon' | 'arc', which is a necessary field\n  type:'line',\n  // Whether you want to draw, you can default, draw by default\n  isDraw: true,\n  // Whether to check whether it is on the graph, it can be defaulted, not checked by default\n  isCheck: true,\n  // Style\n  styles: {},\n  // Data array, when type is 'line', it is a two-dimensional array\n  dataSource: []\n}",lang:"js"}),r.a.createElement("h4",{id:"datasource-sub-item-information"},r.a.createElement(i["AnchorLink"],{to:"#datasource-sub-item-information","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"dataSource sub-item information"),r.a.createElement(o["a"],{code:"{\n  // x coordinate, required field\n  x: 123,\n  // y coordinate, necessary field\n  y: 123,\n  // radius, needed when type is 'arc'\n  radius: 5,\n  // Starting angle, required when type is 'arc'\n  startAngle: 0,\n  // End angle, required when type is 'arc'\n  endAngle: 180,\n  // text, required when type is 'text'\n  text: '',\n}",lang:"js"}),r.a.createElement("h2",{id:"example"},r.a.createElement(i["AnchorLink"],{to:"#example","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Example"),r.a.createElement("p",null,"Use a filled circle with a border to illustrate how to configure it."),r.a.createElement(o["a"],{code:"{\n  // name\n  name:'circle',\n\n  // It takes three steps to complete the drawing of a circle\n  totalStep: 3,\n\n  // Check if the event coordinate is on the circle border\n  checkEventCoordinateOnShape: ({ dataSource, eventCoordinate }) => {\n    const xDis = Math.abs(dataSource.x - eventCoordinate.x)\n    const yDis = Math.abs(dataSource.y - eventCoordinate.y)\n    const r = Math.sqrt(xDis * xDis + yDis * yDis)\n    return Math.abs(r - dataSource.radius) < 2;\n  },\n\n  // Create shape information\n  createShapeDataSource: ({ step, points, coordinates }) => {\n    if (coordinates.length === 2) {\n      const xDis = Math.abs(coordinates[0].x - coordinates[1].x)\n      const yDis = Math.abs(coordinates[0].y - coordinates[1].y)\n      const radius = Math.sqrt(xDis * xDis + yDis * yDis)\n      // A circle filled with a border is formed by a hollow circle and a solid circle\n      return [\n        // filled circle\n        {\n          type: 'arc',\n          isDraw: true,\n          // Filled circle, no need to check whether the mouse point is on the graph\n          isCheck: false,\n          // fill\n          styles: { style: 'fill' },\n          // point information\n          dataSource: [\n            { ...coordinates[0], radius, startAngle: 0, endAngle: Math.PI * 2 },\n          ]\n        },\n        // hollow circle\n        {\n          type:'arc',\n          isDraw: true,\n          // Need to check if it is on the border\n          isCheck: true,\n          // point information\n          dataSource: [\n            { ...coordinates[0], radius, startAngle: 0, endAngle: Math.PI * 2 },\n          ]\n        }\n      ]\n    }\n    return []\n  }\n}",lang:"js"})))}));n["default"]=e=>{var n=r.a.useContext(i["context"]),t=n.demos;return r.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&i["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(c,{demos:t})}},rVZW:function(e,n,t){}}]);