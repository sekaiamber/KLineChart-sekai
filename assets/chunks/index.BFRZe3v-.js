import{C as t}from"./theme.B3RkYLmB.js";import{o as a,g as n,k as e}from"./framework.D0LcRxHx.js";const r=JSON.parse(`{"js":"import { init } from 'klinecharts';\\n\\nconst chart = init('getIndicators-chart');\\nchart.createIndicator('MA', false, { id: 'candle_pane' });\\nchart.createIndicator('VOL');\\n\\nfetch('https://klinecharts.com/datas/kline.json')\\n  .then(res => res.json())\\n  .then(dataList => { chart.applyNewData(dataList); });\\n\\nconst indicators = chart.getIndicators({\\n  paneId: 'candle_pane',\\n  name: 'MA'\\n})"}`),h={__name:"index",setup(c){return(s,o)=>(a(),n(t,{chartId:"getIndicators-chart",code:e(r).js},null,8,["code"]))}};export{h as _};
