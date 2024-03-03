import{_ as n,E as t,c as h,m as i,a as s,J as l,w as p,a4 as e,o as k}from"./chunks/framework.gBYdqs7G.js";const A=JSON.parse('{"title":"Custom Axis v9.8.0+","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/guide/custom-axis.md","filePath":"en-US/guide/custom-axis.md","lastUpdated":1709481896000}'),r={name:"en-US/guide/custom-axis.md"},F={id:"custom-axis-v9-8-0",tabindex:"-1"},d=i("a",{class:"header-anchor",href:"#custom-axis-v9-8-0","aria-label":'Permalink to "Custom Axis <Tag>v9.8.0+</Tag>"'},"​",-1),g=e(`<p>Chart support custom axis, which can be achieved through the chart api <a href="./chart-api.html#registerxaxis-axis">registerXAxis(axis)</a> and <a href="./chart-api.html#registeryaxis-axis">registerYAxis(axis)</a>.</p><h2 id="input-params-introduction" tabindex="-1">Input params introduction <a class="header-anchor" href="#input-params-introduction" aria-label="Permalink to &quot;Input params introduction&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes material-theme-palenight github-light vp-code"><code><span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">{</span></span>
<span class="line"><span style="--shiki-dark:#676E95;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">  // axis name</span></span>
<span class="line"><span style="--shiki-dark:#FFCB6B;--shiki-light:#6F42C1;">  name</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">:</span><span style="--shiki-dark:#BABED8;--shiki-light:#24292E;"> string</span></span>
<span class="line"><span style="--shiki-dark:#676E95;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">  // implementation of create ticks</span></span>
<span class="line"><span style="--shiki-dark:#FFCB6B;--shiki-light:#6F42C1;">  createTicks</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">:</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;"> (</span><span style="--shiki-dark:#BABED8;--shiki-light:#E36209;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">params</span><span style="--shiki-dark:#89DDFF;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#676E95;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">    // range info</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E36209;">    range</span><span style="--shiki-dark:#89DDFF;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E36209;">      from</span><span style="--shiki-dark:#89DDFF;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#005CC5;"> number</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E36209;">      to</span><span style="--shiki-dark:#89DDFF;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#005CC5;"> number</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E36209;">      range</span><span style="--shiki-dark:#89DDFF;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#005CC5;"> number</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E36209;">      realFrom</span><span style="--shiki-dark:#89DDFF;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#005CC5;"> number</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E36209;">      realTo</span><span style="--shiki-dark:#89DDFF;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#005CC5;"> number</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E36209;">      realRange</span><span style="--shiki-dark:#89DDFF;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#005CC5;"> number</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">    }</span></span>
<span class="line"><span style="--shiki-dark:#676E95;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">    // viewport</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E36209;">    bounding</span><span style="--shiki-dark:#89DDFF;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E36209;">      width</span><span style="--shiki-dark:#89DDFF;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#005CC5;"> number</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E36209;">      height</span><span style="--shiki-dark:#89DDFF;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#005CC5;"> number</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E36209;">      left</span><span style="--shiki-dark:#89DDFF;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#005CC5;"> number</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E36209;">      right</span><span style="--shiki-dark:#89DDFF;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#005CC5;"> number</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E36209;">      top</span><span style="--shiki-dark:#89DDFF;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#005CC5;"> number</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E36209;">      bottom</span><span style="--shiki-dark:#89DDFF;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#005CC5;"> number</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">    }</span></span>
<span class="line"><span style="--shiki-dark:#676E95;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">    // default ticks info</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E36209;">    defaultTicks</span><span style="--shiki-dark:#89DDFF;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#6F42C1;"> Array</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">&lt;{</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E36209;">      coord</span><span style="--shiki-dark:#89DDFF;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#005CC5;"> number</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E36209;">      value</span><span style="--shiki-dark:#89DDFF;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#005CC5;"> number</span><span style="--shiki-dark:#89DDFF;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#005CC5;"> string</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E36209;">      text</span><span style="--shiki-dark:#89DDFF;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#005CC5;"> string</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">    }&gt;</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">  })</span><span style="--shiki-dark:#C792EA;--shiki-light:#D73A49;"> =&gt;</span><span style="--shiki-dark:#82AAFF;--shiki-light:#6F42C1;"> Array</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">&lt;{</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E36209;">    coord</span><span style="--shiki-dark:#89DDFF;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#005CC5;"> number</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E36209;">    value</span><span style="--shiki-dark:#89DDFF;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#005CC5;"> number</span><span style="--shiki-dark:#89DDFF;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#005CC5;"> string</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#E36209;">    text</span><span style="--shiki-dark:#89DDFF;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#FFCB6B;--shiki-light:#005CC5;"> string</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">  }&gt;</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">}</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>After register completed, you can use the sub item <code>options.axisOptions.name</code> in the <code>options.layout</code> parameter of the chart api <a href="./chart-api.html#init-ds-options">init(ds, options)</a> to specify the coordinate axis, or use the instance api <a href="./instance-api.html#createindicator-value-isstack-paneoptions-callback">createIndicator(value, isStack, paneOptions, callback)</a> and <a href="./instance-api.html#setpaneoptions-options">setPaneOptions(paneOptions)</a> parameter <code>paneOptions.axisOptions.name</code> to specify it.</p><h3 id="using-init-of-chart-api" tabindex="-1">Using init of chart api <a class="header-anchor" href="#using-init-of-chart-api" aria-label="Permalink to &quot;Using init of chart api&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes material-theme-palenight github-light vp-code"><code><span class="line"><span style="--shiki-dark:#82AAFF;--shiki-light:#6F42C1;">init</span><span style="--shiki-dark:#BABED8;--shiki-light:#24292E;">(</span></span>
<span class="line"><span style="--shiki-dark:#676E95;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">  // The domId here uses its own defined container ID instead</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;">  \`\${</span><span style="--shiki-dark:#BABED8;--shiki-light:#24292E;">domId</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;">}\`</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">  {</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#24292E;">    layout</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">:</span><span style="--shiki-dark:#BABED8;--shiki-light:#24292E;"> [</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">      {</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#24292E;">        type</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">:</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;"> &#39;</span><span style="--shiki-dark:#C3E88D;--shiki-light:#032F62;">candle</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;">&#39;</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#24292E;">        options</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">:</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#24292E;">          axisOptions</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">:</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#676E95;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">            // The customYAxisName here uses the name used when customizing the y-axis instead</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#24292E;">            name</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">:</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;"> \`\${</span><span style="--shiki-dark:#BABED8;--shiki-light:#24292E;">customYAxisName</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;">}\`</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">          }</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">        }</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">      },</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">      {</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#24292E;">        type</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">:</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;"> &#39;</span><span style="--shiki-dark:#C3E88D;--shiki-light:#032F62;">xAxis</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;">&#39;</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#24292E;">        options</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">:</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#24292E;">          position</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">:</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;"> &#39;</span><span style="--shiki-dark:#C3E88D;--shiki-light:#032F62;">bottom</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;">&#39;</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#24292E;">          axisOptions</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">:</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#676E95;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">            // The customXAxisName here uses the name used when customizing the x-axis instead</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#24292E;">            name</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">:</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;"> \`\${</span><span style="--shiki-dark:#BABED8;--shiki-light:#24292E;">customXAxisName</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;">}\`</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">          }</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">        }</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">      }</span></span>
<span class="line"><span style="--shiki-dark:#BABED8;--shiki-light:#24292E;">    ]</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">  }</span></span>
<span class="line"><span style="--shiki-dark:#BABED8;--shiki-light:#24292E;">)</span></span></code></pre></div><h3 id="using-createindicator-of-instance-api" tabindex="-1">Using createIndicator of instance api <a class="header-anchor" href="#using-createindicator-of-instance-api" aria-label="Permalink to &quot;Using createIndicator of instance api&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes material-theme-palenight github-light vp-code"><code><span class="line"><span style="--shiki-dark:#82AAFF;--shiki-light:#6F42C1;">createIndicator</span><span style="--shiki-dark:#BABED8;--shiki-light:#24292E;">(</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;">  &#39;</span><span style="--shiki-dark:#C3E88D;--shiki-light:#032F62;">MA</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;">&#39;</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#FF9CAC;--shiki-light:#005CC5;">  false</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">  {</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#24292E;">    axisOptions</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">:</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#676E95;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">      // The customYAxisName here uses the name used when customizing the y-axis instead</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#24292E;">      name</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">:</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;"> \`\${</span><span style="--shiki-dark:#BABED8;--shiki-light:#24292E;">customYAxisName</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;">}\`</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">    }</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">  }</span></span>
<span class="line"><span style="--shiki-dark:#BABED8;--shiki-light:#24292E;">)</span></span></code></pre></div><h3 id="using-setpaneoptions-of-instance-api" tabindex="-1">Using setPaneOptions of instance api <a class="header-anchor" href="#using-setpaneoptions-of-instance-api" aria-label="Permalink to &quot;Using setPaneOptions of instance api&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes material-theme-palenight github-light vp-code"><code><span class="line"><span style="--shiki-dark:#82AAFF;--shiki-light:#6F42C1;">setPaneOptions</span><span style="--shiki-dark:#BABED8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">{</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#24292E;">  id</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">:</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;"> &#39;</span><span style="--shiki-dark:#C3E88D;--shiki-light:#032F62;">candle_pane</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;">&#39;</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#24292E;">  axisOptions</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">:</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#676E95;--shiki-light:#6A737D;--shiki-dark-font-style:italic;--shiki-light-font-style:inherit;">    // The customYAxisName here uses the name used when customizing the y-axis instead</span></span>
<span class="line"><span style="--shiki-dark:#F07178;--shiki-light:#24292E;">    name</span><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">:</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;"> \`\${</span><span style="--shiki-dark:#BABED8;--shiki-light:#24292E;">customYAxisName</span><span style="--shiki-dark:#89DDFF;--shiki-light:#032F62;">}\`</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">  }</span></span>
<span class="line"><span style="--shiki-dark:#89DDFF;--shiki-light:#24292E;">}</span><span style="--shiki-dark:#BABED8;--shiki-light:#24292E;">)</span></span></code></pre></div>`,11);function D(c,y,o,E,m,u){const a=t("Tag");return k(),h("div",null,[i("h1",F,[s("Custom Axis "),l(a,null,{default:p(()=>[s("v9.8.0+")]),_:1}),s(),d]),g])}const B=n(r,[["render",D]]);export{A as __pageData,B as default};
