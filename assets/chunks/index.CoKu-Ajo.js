import{C as t}from"./theme.B3RkYLmB.js";import{o as n,g as e,k as a}from"./framework.D0LcRxHx.js";const r=JSON.parse(`{"js":"import { init } from 'klinecharts';\\n\\nconst chart = init('convertFromPixel-chart');\\n\\nfetch('https://klinecharts.com/datas/kline.json')\\n  .then(res => res.json())\\n  .then(dataList => {\\n    chart.applyNewData(dataList);\\n    const points = chart.convertFromPixel(\\n      [{ x: 200, y: 200 }],\\n      { paneId: 'candle_pane', absolute: false }\\n    );\\n  });"}`),h={__name:"index",setup(o){return(s,c)=>(n(),e(t,{chartId:"convertFromPixel-chart",code:a(r).js},null,8,["code"]))}};export{h as _};
