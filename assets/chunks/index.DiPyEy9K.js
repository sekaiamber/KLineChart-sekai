import{C as t}from"./theme.B3RkYLmB.js";import{o as a,g as s,k as e}from"./framework.D0LcRxHx.js";const n=JSON.parse(`{"js":"import { init } from 'klinecharts';\\n\\nconst chart = init('scrollToTimestamp-chart');\\n\\nfetch('https://klinecharts.com/datas/kline.json')\\n  .then(res => res.json())\\n  .then(dataList => { chart.applyNewData(dataList); });\\n\\nsetTimeout(() => {\\n  const dataList = chart.getDataList()\\n  chart.scrollToTimestamp(dataList[dataList.length - 100].timestamp, 200);\\n}, 5000)"}`),h={__name:"index",setup(r){return(o,c)=>(a(),s(t,{chartId:"scrollToTimestamp-chart",code:e(n).js},null,8,["code"]))}};export{h as _};
