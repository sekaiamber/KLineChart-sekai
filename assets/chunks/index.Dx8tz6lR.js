import{C as t}from"./theme.B3RkYLmB.js";import{o as a,g as n,k as e}from"./framework.D0LcRxHx.js";const s=JSON.parse(`{"js":"import { init } from 'klinecharts';\\n\\nconst chart = init('isZoomEnabled-chart');\\n\\nfetch('https://klinecharts.com/datas/kline.json')\\n  .then(res => res.json())\\n  .then(dataList => { chart.applyNewData(dataList); });\\n\\nconst enabled = chart.isZoomEnabled();\\n"}`),d={__name:"index",setup(o){return(r,c)=>(a(),n(t,{chartId:"isZoomEnabled-chart",code:e(s).js},null,8,["code"]))}};export{d as _};
