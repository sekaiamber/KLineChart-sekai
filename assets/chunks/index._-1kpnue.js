import{C as t}from"./theme.B3RkYLmB.js";import{o as a,g as e,k as n}from"./framework.D0LcRxHx.js";const r=JSON.parse(`{"js":"import { init } from 'klinecharts';\\n\\nconst chart = init('applyNewData-chart');\\n\\nfetch('https://klinecharts.com/datas/kline.json')\\n  .then(res => res.json())\\n  .then(dataList => { chart.applyNewData(dataList); });"}`),h={__name:"index",setup(s){return(c,o)=>(a(),e(t,{chartId:"applyNewData-chart",code:n(r).js},null,8,["code"]))}};export{h as _};
