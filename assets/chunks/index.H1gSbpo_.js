import{C as t}from"./theme.B3RkYLmB.js";import{o as n,g as a,k as e}from"./framework.D0LcRxHx.js";const c=JSON.parse("{\"js\":\"import { init } from 'klinecharts';\\n\\nconst chart = init('setCustomApi-formatDate-chart')\\n\\nchart.setCustomApi({\\n  formatDate: (timestamp, _, type) => {\\n    const date = new Date(timestamp)\\n    const year = date.getFullYear()\\n    const month = `${date.getMonth() + 1}`.padStart(2, '0')\\n    const day = `${date.getDate()}`.padStart(2, '0')\\n    const hour = `${date.getHours()}`.padStart(2, '0')\\n    const minute = `${date.getMinutes()}`.padStart(2, '0')\\n    switch (type) {\\n      case 0: {\\n        return `${year}-${month}-${day} ${hour}:${minute}`\\n      }\\n      case 1: {\\n        return `${year}-${month}-${day}`\\n      }\\n      case 2: {\\n        return `${month}-${day}`\\n      }\\n    }\\n    return `${month}-${day} ${hour}-${minute}`\\n  }\\n})\\n\\nfetch('https://klinecharts.com/datas/kline.json')\\n  .then(res => res.json())\\n  .then(dataList => { chart.applyNewData(dataList); });\\n\"}"),u={__name:"index",setup(r){return(s,o)=>(n(),a(t,{chartId:"setCustomApi-formatDate-chart",code:e(c).js},null,8,["code"]))}},i=JSON.parse("{\"js\":\"import { init } from 'klinecharts';\\n\\nconst chart = init('setCustomApi-formatBigNumber-chart');\\nchart.setCustomApi({\\n  formatBigNumber: value => {\\n    const v = +value\\n    if (typeof v === 'number') {\\n      if (v > 10000) {\\n        return `${+((v / 10000).toFixed(3))}万`\\n      }\\n    }\\n    return `${value}`\\n  }\\n})\\nchart.createIndicator('VOL')\\n\\nfetch('https://klinecharts.com/datas/kline.json')\\n  .then(res => res.json())\\n  .then(dataList => { chart.applyNewData(dataList); });\\n\"}"),p={__name:"index",setup(r){return(s,o)=>(n(),a(t,{chartId:"setCustomApi-formatBigNumber-chart",code:e(i).js},null,8,["code"]))}};export{u as _,p as a};
