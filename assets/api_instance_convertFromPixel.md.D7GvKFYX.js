import{_ as i}from"./chunks/index.CoKu-Ajo.js";import{c as a,a2 as n,i as e,o as l}from"./chunks/framework.D0LcRxHx.js";import"./chunks/theme.B3RkYLmB.js";const o=JSON.parse('{"title":"convertFromPixel(coordinate, finder?)","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"api/instance/convertFromPixel.md","filePath":"api/instance/convertFromPixel.md","lastUpdated":1732905115000}'),t={name:"api/instance/convertFromPixel.md"},c=Object.assign(t,{setup(h){return(p,s)=>(l(),a("div",null,[s[0]||(s[0]=n(`<h1 id="convertfrompixel-coordinate-finder" tabindex="-1">convertFromPixel(coordinate, finder?) <a class="header-anchor" href="#convertfrompixel-coordinate-finder" aria-label="Permalink to &quot;convertFromPixel(coordinate, finder?)&quot;">​</a></h1><p><code>convertFromPixel</code> 将坐标转换成值。</p><h2 id="reference" tabindex="-1">参考 <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;参考 {#reference}&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  coordinate: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    x?: number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;{</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  finder</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    paneId</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    absolute</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    dataIndex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    timestamp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;{</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    dataIndex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    timestamp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }&gt;</span></span></code></pre></div><h3 id="parameters" tabindex="-1">参数 <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;参数 {#parameters}&quot;">​</a></h3><ul><li><code>coordinate</code> 需要转换的坐标，可以是当个对象，也可以是数组。 <ul><li><code>x</code> 横坐标值。</li><li><code>y</code> 纵坐标值。</li></ul></li><li><code>finder</code> 过滤条件。 <ul><li><code>paneId</code> 窗口id。</li><li><code>absolute</code> 是否是绝对坐标，只作用于y轴。</li></ul></li></ul><h3 id="returns" tabindex="-1">返回值 <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;返回值 {#returns}&quot;">​</a></h3><p><code>convertFromPixel</code> 返回 <code>{ timestamp?: number, dataIndex?: number, value?: number }</code> 或者 <code>Array&lt;{ timestamp?: number, dataIndex?: number, value?: number }&gt;</code> 。</p><h2 id="usage" tabindex="-1">用法 <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;用法 {#usage}&quot;">​</a></h2><h3 id="basic" tabindex="-1">基本用法 <a class="header-anchor" href="#basic" aria-label="Permalink to &quot;基本用法 {#basic}&quot;">​</a></h3>`,10)),e(i)]))}});export{o as __pageData,c as default};
