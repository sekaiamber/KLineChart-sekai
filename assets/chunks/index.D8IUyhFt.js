import{C as t}from"./theme.B3RkYLmB.js";import{o as a,g as r,k as n}from"./framework.D0LcRxHx.js";const s=JSON.parse(`{"js":"import { init } from 'klinecharts';\\n\\nconst chart = init('getThousandsSeparator-chart');\\n\\nfetch('https://klinecharts.com/datas/kline.json')\\n  .then(res => res.json())\\n  .then(dataList => { chart.applyNewData(dataList); });\\n\\nconst thousandsSeparator = chart.getThousandsSeparator();\\n"}`),i={__name:"index",setup(e){return(o,c)=>(a(),r(t,{chartId:"getThousandsSeparator-chart",code:n(s).js},null,8,["code"]))}};export{i as _};
