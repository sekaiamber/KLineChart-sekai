import{C as t}from"./theme.B3RkYLmB.js";import{o as a,g as n,k as e}from"./framework.D0LcRxHx.js";const r=JSON.parse(`{"js":"import { init } from 'klinecharts';\\n\\nconst chart = init('zoomAtDataIndex-chart');\\n\\nfetch('https://klinecharts.com/datas/kline.json')\\n  .then(res => res.json())\\n  .then(dataList => { chart.applyNewData(dataList); });\\n\\nsetTimeout(() => {\\n  chart.zoomAtDataIndex(0.8, chart.getDataList().length - 50, 200);\\n}, 5000)"}`),m={__name:"index",setup(o){return(s,c)=>(a(),n(t,{chartId:"zoomAtDataIndex-chart",code:e(r).js},null,8,["code"]))}};export{m as _};
