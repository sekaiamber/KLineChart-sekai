import{C as t}from"./theme.B3RkYLmB.js";import{o as a,g as n,k as e}from"./framework.D0LcRxHx.js";const r=JSON.parse(`{"js":"import { init } from 'klinecharts';\\n\\nconst chart = init('scrollToDataIndex-chart');\\n\\nfetch('https://klinecharts.com/datas/kline.json')\\n  .then(res => res.json())\\n  .then(dataList => { chart.applyNewData(dataList); });\\n\\nsetTimeout(() => {\\n  chart.scrollToDataIndex(chart.getDataList().length - 100, 200);\\n}, 5000)"}`),l={__name:"index",setup(s){return(o,c)=>(a(),n(t,{chartId:"scrollToDataIndex-chart",code:e(r).js},null,8,["code"]))}};export{l as _};
