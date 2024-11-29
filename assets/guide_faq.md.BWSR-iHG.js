import{a as e,c as i,a2 as s,o as t}from"./chunks/framework.D0LcRxHx.js";const k=JSON.parse('{"title":"🙋 常见问题","description":"","frontmatter":{},"headers":[],"relativePath":"guide/faq.md","filePath":"guide/faq.md","lastUpdated":1732819804000}'),n={name:"guide/faq.md"};function r(l,a,o,d,h,p){return t(),i("div",null,a[0]||(a[0]=[s(`<h1 id="🙋-常见问题" tabindex="-1">🙋 常见问题 <a class="header-anchor" href="#🙋-常见问题" aria-label="Permalink to &quot;🙋 常见问题&quot;">​</a></h1><h2 id="初始化图表后-只能看到一条线-是怎么回事" tabindex="-1">初始化图表后，只能看到一条线，是怎么回事？ <a class="header-anchor" href="#初始化图表后-只能看到一条线-是怎么回事" aria-label="Permalink to &quot;初始化图表后，只能看到一条线，是怎么回事？&quot;">​</a></h2><p>图表总是会填充容器，检查一下容器是否有高度。</p><h2 id="蜡烛柱显示趋近于一条线-看不到波动-怎么办" tabindex="-1">蜡烛柱显示趋近于一条线，看不到波动，怎么办？ <a class="header-anchor" href="#蜡烛柱显示趋近于一条线-看不到波动-怎么办" aria-label="Permalink to &quot;蜡烛柱显示趋近于一条线，看不到波动，怎么办？&quot;">​</a></h2><p>图表默认价格精度为两位小数，调用<code>setPriceVolumePrecision(pricePrecision, volumePrecision)</code>设置下精度。</p><h2 id="分时图怎么创建" tabindex="-1">分时图怎么创建？ <a class="header-anchor" href="#分时图怎么创建" aria-label="Permalink to &quot;分时图怎么创建？&quot;">​</a></h2><p>通过样式设置。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">chart.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setStyles</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  candle: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;area&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="内置的技术指标-计算出来的数据不是想要的-怎么办" tabindex="-1">内置的技术指标，计算出来的数据不是想要的，怎么办？ <a class="header-anchor" href="#内置的技术指标-计算出来的数据不是想要的-怎么办" aria-label="Permalink to &quot;内置的技术指标，计算出来的数据不是想要的，怎么办？&quot;">​</a></h2><p>可以通过图表方法<code>createIndicator</code>或者<code>overrideIndicator</code>重写<code>calc</code>即可。</p><h2 id="想创建一个内置技术指标之外的指标-怎么办" tabindex="-1">想创建一个内置技术指标之外的指标，怎么办？ <a class="header-anchor" href="#想创建一个内置技术指标之外的指标-怎么办" aria-label="Permalink to &quot;想创建一个内置技术指标之外的指标，怎么办？&quot;">​</a></h2><p>图表支持自定义技术指标，详情参阅<a href="/guide/indicator">技术指标</a>。</p><h2 id="想标记一下买卖点-该怎么做" tabindex="-1">想标记一下买卖点，该怎么做？ <a class="header-anchor" href="#想标记一下买卖点-该怎么做" aria-label="Permalink to &quot;想标记一下买卖点，该怎么做？&quot;">​</a></h2><p>可以使用覆盖物，内置的覆盖物有一个<code>simpleAnnotation</code>，用图表api创建即可<code>createOverlay({ name: &#39;simpleAnnotation&#39;, ... }, paneId)</code>。</p>`,14)]))}const u=e(n,[["render",r]]);export{k as __pageData,u as default};
