(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[92],{"2Qxs":function(e,t,a){},TFQZ:function(e,t,a){"use strict";a.r(t);var l=a("ODXe"),i=a("kM82"),n=a.n(i),r=a("dEAq"),c=a("EqgN"),o=a("7W7I"),m=a("6y1p"),h=a("2x5v"),s=a("0Xwh"),d=a("yf24"),p=(a("a3Lv"),e=>{var t=e.location,a=Object(i["useContext"])(r["context"]),l=a.base,c=a.locale,o=a.config.locales,m=o.find((e=>{var t=e.name;return t!==c}));function h(e){var a=l.replace("/".concat(c),""),i=t.pathname.replace(new RegExp("^".concat(l,"(/|$)")),"".concat(a,"$1"))||"/";if(e!==o[0].name){var n="".concat(a,"/").concat(e).replace(/\/\//,"/"),r=t.pathname.replace(l.replace(/^\/$/,"//"),"");return"".concat(n).concat(r).replace(/\/$/,"")}return i}return m?n.a.createElement(r["Link"],{className:"__dumi-default-lang",to:h(m.name)},"zh-CN"===c?"EN":"\u4e2d"):null}),u=p,v=(a("hFYA"),e=>{var t=e.onMobileMenuClick,a=e.navPrefix,l=e.location,c=e.darkPrefix,o=Object(i["useContext"])(r["context"]),m=o.base,h=o.config,s=h.mode,d=h.title,p=h.logo,v=o.nav;return n.a.createElement("div",{className:"__dumi-default-navbar","data-mode":s},n.a.createElement("button",{className:"__dumi-default-navbar-toggle",onClick:t}),n.a.createElement(r["Link"],{className:"__dumi-default-navbar-logo",style:{backgroundImage:p&&"url('".concat(p,"')")},to:m,"data-plaintext":!1===p||void 0},d),n.a.createElement("nav",null,a,v.map((e=>{var t,a=Boolean(null===(t=e.children)||void 0===t?void 0:t.length)&&n.a.createElement("ul",null,e.children.map((e=>n.a.createElement("li",{key:e.path},n.a.createElement(r["NavLink"],{to:e.path},e.title)))));return n.a.createElement("span",{key:e.title||e.path},e.path?n.a.createElement(r["NavLink"],{to:e.path,key:e.path},e.title):e.title,a)})),n.a.createElement("div",{className:"__dumi-default-navbar-tool"},c,n.a.createElement(u,{location:l}),n.a.createElement("a",{className:"icon",target:"_blank",href:"https://github.com/liihuu/KLineChart"},n.a.createElement("svg",{viewBox:"0 0 1024 1024"},n.a.createElement("path",{d:"M512 85.333333C276.266667 85.333333 85.333333 276.266667 85.333333 512a426.410667 426.410667 0 0 0 291.754667 404.821333c21.333333 3.712 29.312-9.088 29.312-20.309333 0-10.112-0.554667-43.690667-0.554667-79.445333-107.178667 19.754667-134.912-26.112-143.445333-50.133334-4.821333-12.288-25.6-50.133333-43.733333-60.288-14.933333-7.978667-36.266667-27.733333-0.554667-28.245333 33.621333-0.554667 57.6 30.933333 65.621333 43.733333 38.4 64.512 99.754667 46.378667 124.245334 35.2 3.754667-27.733333 14.933333-46.378667 27.221333-57.045333-94.933333-10.666667-194.133333-47.488-194.133333-210.688 0-46.421333 16.512-84.778667 43.733333-114.688-4.266667-10.666667-19.2-54.4 4.266667-113.066667 0 0 35.712-11.178667 117.333333 43.776a395.946667 395.946667 0 0 1 106.666667-14.421333c36.266667 0 72.533333 4.778667 106.666666 14.378667 81.578667-55.466667 117.333333-43.690667 117.333334-43.690667 23.466667 58.666667 8.533333 102.4 4.266666 113.066667 27.178667 29.866667 43.733333 67.712 43.733334 114.645333 0 163.754667-99.712 200.021333-194.645334 210.688 15.445333 13.312 28.8 38.912 28.8 78.933333 0 57.045333-0.554667 102.912-0.554666 117.333334 0 11.178667 8.021333 24.490667 29.354666 20.224A427.349333 427.349333 0 0 0 938.666667 512c0-235.733333-190.933333-426.666667-426.666667-426.666667z"}))))))}),g=v,y=(a("cRzs"),e=>{var t=e.onThemeSwitchClick,a=Object(r["usePrefersColor"])(),c=Object(l["a"])(a,2),o=c[0],m=c[1],h=Object(i["useCallback"])((e=>{var a="dark"===o?"light":"dark";e.stopPropagation(),m(a),t&&t(a)}),[o]);return n.a.createElement("div",{className:"__dumi-default-theme",onClick:h},n.a.createElement("img",{className:"__dumi-default-theme-icon ".concat("dark"===o?"__dumi-default-theme-icon-moon":"__dumi-default-theme-icon-sun"),src:"dark"===o?"/images/moon.png":"/images/sun.png"}))}),N=y,E=(a("2Qxs"),e=>{var t=e.mobileMenuCollapsed,a=e.location,l=e.darkPrefix,o=Object(i["useContext"])(r["context"]),m=o.config,h=m.logo,s=m.title,d=m.description,p=m.mode,v=m.repository.url,g=o.menu,y=o.nav,N=o.base,E=o.meta,f=Boolean((E.hero||E.features||E.gapless)&&"site"===p)||!1===E.sidemenu||void 0;return n.a.createElement("div",{className:"__dumi-default-menu","data-mode":p,"data-hidden":f,"data-mobile-show":!t||void 0},n.a.createElement("div",{className:"__dumi-default-menu-inner"},n.a.createElement("div",{className:"__dumi-default-menu-header"},n.a.createElement(r["Link"],{to:N,className:"__dumi-default-menu-logo",style:{backgroundImage:h&&"url('".concat(h,"')")}}),n.a.createElement("h1",null,s),n.a.createElement("p",null,d),/github\.com/.test(v)&&"doc"===p&&n.a.createElement("p",null,n.a.createElement("object",{type:"image/svg+xml",data:"https://img.shields.io/github/stars".concat(v.match(/((\/[^\/]+){2})$/)[1],"?style=social")}))),n.a.createElement("div",{className:"__dumi-default-menu-mobile-area"},!!y.length&&n.a.createElement("ul",{className:"__dumi-default-menu-nav-list"},y.map((e=>{var t,a=Boolean(null===(t=e.children)||void 0===t?void 0:t.length)&&n.a.createElement("ul",null,e.children.map((e=>n.a.createElement("li",{key:e.path||e.title},n.a.createElement(r["NavLink"],{to:e.path},e.title)))));return n.a.createElement("li",{key:e.path||e.title},e.path?n.a.createElement(r["NavLink"],{to:e.path},e.title):e.title,a)}))),n.a.createElement("div",{className:"tool"},l,n.a.createElement(u,{location:a}),n.a.createElement("a",{className:"icon",href:"https://github.com/liihuu/KLineChart"},n.a.createElement("svg",{viewBox:"0 0 1024 1024"},n.a.createElement("path",{d:"M512 85.333333C276.266667 85.333333 85.333333 276.266667 85.333333 512a426.410667 426.410667 0 0 0 291.754667 404.821333c21.333333 3.712 29.312-9.088 29.312-20.309333 0-10.112-0.554667-43.690667-0.554667-79.445333-107.178667 19.754667-134.912-26.112-143.445333-50.133334-4.821333-12.288-25.6-50.133333-43.733333-60.288-14.933333-7.978667-36.266667-27.733333-0.554667-28.245333 33.621333-0.554667 57.6 30.933333 65.621333 43.733333 38.4 64.512 99.754667 46.378667 124.245334 35.2 3.754667-27.733333 14.933333-46.378667 27.221333-57.045333-94.933333-10.666667-194.133333-47.488-194.133333-210.688 0-46.421333 16.512-84.778667 43.733333-114.688-4.266667-10.666667-19.2-54.4 4.266667-113.066667 0 0 35.712-11.178667 117.333333 43.776a395.946667 395.946667 0 0 1 106.666667-14.421333c36.266667 0 72.533333 4.778667 106.666666 14.378667 81.578667-55.466667 117.333333-43.690667 117.333334-43.690667 23.466667 58.666667 8.533333 102.4 4.266666 113.066667 27.178667 29.866667 43.733333 67.712 43.733334 114.645333 0 163.754667-99.712 200.021333-194.645334 210.688 15.445333 13.312 28.8 38.912 28.8 78.933333 0 57.045333-0.554667 102.912-0.554666 117.333334 0 11.178667 8.021333 24.490667 29.354666 20.224A427.349333 427.349333 0 0 0 938.666667 512c0-235.733333-190.933333-426.666667-426.666667-426.666667z"}))))),n.a.createElement("ul",{className:"__dumi-default-menu-list"},!f&&g.map((e=>{var t,l=Boolean(null===(t=E.slugs)||void 0===t?void 0:t.length),i=e.children&&Boolean(e.children.length),o="menu"===E.toc&&!i&&l&&e.path===a.pathname.replace(/([^^])\/$/,"$1"),m=i?e.children.map((e=>e.path)):[e.path,a.pathname.startsWith("".concat(e.path,"/"))&&E.title===e.title?a.pathname:null];return n.a.createElement("li",{key:e.path||e.title},n.a.createElement(r["NavLink"],{to:e.path,isActive:()=>m.includes(a.pathname)},e.title),Boolean(e.children&&e.children.length)&&n.a.createElement("ul",null,e.children.map((e=>n.a.createElement("li",{key:e.path},n.a.createElement(r["NavLink"],{to:e.path,exact:!0},n.a.createElement("span",null,e.title)),Boolean("menu"===E.toc&&"undefined"!==typeof window&&e.path===a.pathname&&l)&&n.a.createElement(c["a"],{slugs:E.slugs}))))),o&&n.a.createElement(c["a"],{slugs:E.slugs}))})))))}),f=E,C=(a("vAZa"),a("jlma"),e=>{var t=Object(i["useState"])(null),a=Object(l["a"])(t,2),r=a[0],c=a[1];return Object(i["useEffect"])((()=>{var t="https://img.shields.io/github/".concat(e.type,"s/").concat(e.ower,"/").concat(e.project,".json");fetch(t).then((e=>e.json())).then((e=>{c(e.value||"")})).catch((e=>{}))}),[]),n.a.createElement("a",{className:"badge",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/".concat(e.ower,"/").concat(e.project)},n.a.createElement("div",{className:"badge-icon"},n.a.createElement("svg",{viewBox:"0 0 1024 1024"},n.a.createElement("path",{d:"M512 85.333333C276.266667 85.333333 85.333333 276.266667 85.333333 512a426.410667 426.410667 0 0 0 291.754667 404.821333c21.333333 3.712 29.312-9.088 29.312-20.309333 0-10.112-0.554667-43.690667-0.554667-79.445333-107.178667 19.754667-134.912-26.112-143.445333-50.133334-4.821333-12.288-25.6-50.133333-43.733333-60.288-14.933333-7.978667-36.266667-27.733333-0.554667-28.245333 33.621333-0.554667 57.6 30.933333 65.621333 43.733333 38.4 64.512 99.754667 46.378667 124.245334 35.2 3.754667-27.733333 14.933333-46.378667 27.221333-57.045333-94.933333-10.666667-194.133333-47.488-194.133333-210.688 0-46.421333 16.512-84.778667 43.733333-114.688-4.266667-10.666667-19.2-54.4 4.266667-113.066667 0 0 35.712-11.178667 117.333333 43.776a395.946667 395.946667 0 0 1 106.666667-14.421333c36.266667 0 72.533333 4.778667 106.666666 14.378667 81.578667-55.466667 117.333333-43.690667 117.333334-43.690667 23.466667 58.666667 8.533333 102.4 4.266666 113.066667 27.178667 29.866667 43.733333 67.712 43.733334 114.645333 0 163.754667-99.712 200.021333-194.645334 210.688 15.445333 13.312 28.8 38.912 28.8 78.933333 0 57.045333-0.554667 102.912-0.554666 117.333334 0 11.178667 8.021333 24.490667 29.354666 20.224A427.349333 427.349333 0 0 0 938.666667 512c0-235.733333-190.933333-426.666667-426.666667-426.666667z"}))),r&&n.a.createElement(i["Fragment"],null,n.a.createElement("i",{className:"badge-arrow"}),n.a.createElement("span",{className:"badge-value"},r)))}),z=e=>n.a.createElement("div",{className:"__dumi-default-layout-hero"},n.a.createElement("div",{style:{textAlign:"center"}},e.image&&n.a.createElement(m["a"],{animation:[{type:"from",opacity:0,scaleX:0,scaleY:0}],style:{transformOrigin:"center center"}},n.a.createElement("img",{src:e.image})),n.a.createElement("h1",null,n.a.createElement(h["a"],{delay:500,enter:e=>{switch(e.index){case 0:return{rotate:90,opacity:0,y:-60};case 10:case 1:return{y:-60,x:-10,opacity:0};case 9:case 2:return{y:-60,x:20,opacity:0};case 3:return{y:60,opacity:0};case 8:case 4:return{x:30,opacity:0};case 5:return{enter:[{scale:2,opacity:0,type:"set"},{scale:1.2,opacity:1,duration:300},{scale:.9,duration:200},{scale:1.05,duration:150},{scale:1,duration:100}],leave:{opacity:0,scale:0}};case 6:return{scale:.8,x:30,y:-10,opacity:0};case 7:return{scale:.8,x:30,y:10,opacity:0};default:return{opacity:0}}}},"".concat(e.title," ").concat(Object(d["version"])().split(".")[0],".0"))),n.a.createElement(m["a"],{animation:{type:"from",opacity:0,x:-100,delay:1200}},n.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.desc}})),n.a.createElement(m["a"],{animation:{type:"from",opacity:0,x:100,delay:1200}},n.a.createElement("div",{className:"__dumi-default-layout-hero-button-wrapper"},e.actions&&e.actions.map((e=>n.a.createElement(r["Link"],{className:"".concat(e.type||""),to:e.link,key:e.text},n.a.createElement("span",null,e.text)))),e.githubs&&e.githubs.map((e=>n.a.createElement(C,{key:e.type,type:e.type,ower:e.ower,project:e.project}))))))),k=e=>n.a.createElement(s["a"],{className:"__dumi-default-layout-features",key:"queue",delay:1600,ease:"easeOutQuad",type:"bottom",leaveReverse:!0},e.map((e=>n.a.createElement("dl",{key:e.title,style:{backgroundImage:e.icon?"url(".concat(e.icon,")"):void 0}},e.link?n.a.createElement(r["Link"],{to:e.link},n.a.createElement("dt",null,e.title)):n.a.createElement("dt",null,e.title),n.a.createElement("dd",{dangerouslySetInnerHTML:{__html:e.desc}}))))),b=e=>{var t,a,m=e.children,h=e.location,s=Object(i["useContext"])(r["context"]),d=s.config,p=d.mode,u=d.repository,v=(s.nav,s.meta),y=s.locale,E=u.url,C=u.branch,b=u.platform,_=Object(i["useState"])(!0),x=Object(l["a"])(_,2),P=x[0],A=x[1],I="site"===p,w=I&&v.hero,L=I&&v.features,S=!1!==v.sidemenu&&!w&&!L&&!v.gapless,j=!w&&!L&&Boolean(null===(t=v.slugs)||void 0===t?void 0:t.length)&&("content"===v.toc||void 0===v.toc)&&!v.gapless,O=/^zh|cn$/i.test(y),M=new Date(v.updatedTime),q="".concat(M.toLocaleDateString([],{hour12:!1})," ").concat(M.toLocaleTimeString([],{hour12:!1})),B={github:"GitHub",gitlab:"GitLab"}[(null===(a=(E||"").match(/(github|gitlab)/))||void 0===a?void 0:a[1])||"nothing"]||b;return n.a.createElement("div",{className:"__dumi-default-layout","data-route":h.pathname,"data-show-sidemenu":String(S),"data-show-slugs":String(j),"data-site-mode":I,"data-gapless":String(!!v.gapless),onClick:()=>{P||A(!0)}},n.a.createElement(g,{location:h,navPrefix:n.a.createElement(o["a"],null),darkPrefix:n.a.createElement(N,null),onMobileMenuClick:()=>{A((e=>!e))}}),n.a.createElement(f,{darkPrefix:n.a.createElement(N,null),mobileMenuCollapsed:P,location:h}),j&&n.a.createElement(c["a"],{slugs:v.slugs,className:"__dumi-default-layout-toc"}),w&&z(v.hero),L&&k(v.features),n.a.createElement("div",{className:"__dumi-default-layout-content"},m,!w&&!L&&v.filePath&&!v.gapless&&n.a.createElement("div",{className:"__dumi-default-layout-footer-meta"},B&&n.a.createElement(r["Link"],{to:"".concat(E,"/edit/").concat(C,"/").concat(v.filePath)},O?"\u5728 ".concat(B," \u4e0a\u7f16\u8f91\u6b64\u9875"):"Edit this doc on ".concat(B)),(!v.content||!v.content.hideUpdateTime)&&n.a.createElement("span",{"data-updated-text":O?"\u6700\u540e\u66f4\u65b0\u65f6\u95f4\uff1a":"Last update: "},q)),v.footer&&n.a.createElement("div",{className:"__dumi-default-layout-footer",dangerouslySetInnerHTML:{__html:v.footer}})))};t["default"]=b},a3Lv:function(e,t,a){},afA6:function(e,t,a){"use strict";a.r(t);var l=a("wx14"),i=a("kM82"),n=a.n(i),r=a("q3YX"),c={},o=a("x2v5"),m=a("KcUY"),h=a.n(m);t["default"]=e=>n.a.createElement(h.a,Object(l["a"])({},e,{config:r,demos:c,apis:o}))},cRzs:function(e,t,a){},hFYA:function(e,t,a){},jlma:function(e,t,a){},q3YX:function(e){e.exports=JSON.parse('{"menus":{"en-US":{"*":[{"path":"/","title":"KLineChart - Highly customizable professional lightweight financial charts","meta":{}}],"/advanced":[{"path":"/advanced/figure","title":"Figure","meta":{"order":1}},{"path":"/advanced/indicator","title":"Technical indicator","meta":{"order":2}},{"path":"/advanced/overlay","title":"Overlay","meta":{"order":3}}],"/api":[{"path":"/api/chart","title":"Chart API","meta":{"order":1}},{"path":"/api/instance","title":"Instance API","meta":{"order":2}}],"/guide":[{"path":"/guide/introduce","title":"Introducation","meta":{"order":1}},{"path":"/guide/get-started","title":"Getting Started","meta":{"order":2}},{"path":"/guide/style","title":"Style","meta":{"order":3}},{"path":"/guide/data","title":"Data","meta":{"order":4}},{"path":"/guide/environment","title":"Environment","meta":{"order":5}},{"path":"/guide/hot-key","title":"Hot Key","meta":{"order":5}},{"path":"/guide/faq","title":"FAQ","meta":{"order":6}},{"path":"/guide/v8-to-v9","title":"From v8 to v9","meta":{"order":7}},{"path":"/guide/changelog","title":"Changelog","meta":{"order":8}}],"/history":[{"path":"/history","title":"History","meta":{}}],"/pro":[{"path":"/pro","title":"Pro","meta":{}}],"/sample":[{"path":"/sample","title":"Sample","meta":{}}],"/sponsor":[{"path":"/sponsor","title":"Sponsor","meta":{"order":1}}],"/v7":[{"path":"/v7/chart-api","title":"Chart API","meta":{}},{"path":"/v7/data","title":"Data source","meta":{}},{"path":"/v7/features","title":"Features","meta":{}},{"path":"/v7/graphic-mark","title":"Graphic mark","meta":{}},{"path":"/v7/graphic-mark-auxiliary-api","title":"Graphic mark auxiliary API","meta":{}},{"path":"/v7/indicator","title":"Technical indicator","meta":{}},{"path":"/v7/instance-api","title":"Instance API","meta":{}},{"path":"/v7/quick-start","title":"Quick start","meta":{}},{"path":"/v7/style","title":"Style description","meta":{}}],"/v8":[{"path":"/v8/chart-api","title":"Chart API","meta":{}},{"path":"/v8/data","title":"Data source","meta":{}},{"path":"/v8/features","title":"Features","meta":{}},{"path":"/v8/indicator","title":"Technical indicator","meta":{}},{"path":"/v8/instance-api","title":"Instance API","meta":{}},{"path":"/v8/quick-start","title":"Quick start","meta":{}},{"path":"/v8/shape","title":"Shape","meta":{}},{"path":"/v8/shape-auxiliary-api","title":"Shape auxiliary API","meta":{}},{"path":"/v8/style","title":"Style description","meta":{}},{"path":"/v8/v7-to-v8","title":"From v7 to v8","meta":{}}]},"zh-CN":{"*":[{"path":"/zh-CN","title":"KLineChart - \u53ef\u9ad8\u5ea6\u81ea\u5b9a\u4e49\u7684\u4e13\u4e1a\u7ea7\u8f7b\u91cf\u91d1\u878d\u56fe\u8868","meta":{}}],"/zh-CN/advanced":[{"path":"/zh-CN/advanced/figure","title":"\u57fa\u7840\u56fe\u5f62","meta":{"order":1}},{"path":"/zh-CN/advanced/indicator","title":"\u6280\u672f\u6307\u6807","meta":{"order":2}},{"path":"/zh-CN/advanced/overlay","title":"\u8986\u76d6\u7269","meta":{"order":3}}],"/zh-CN/api":[{"path":"/zh-CN/api/chart","title":"\u56fe\u8868API","meta":{"order":1}},{"path":"/zh-CN/api/instance","title":"\u5b9e\u4f8bAPI","meta":{"order":2}}],"/zh-CN/guide":[{"path":"/zh-CN/guide/introduce","title":"\u4ecb\u7ecd","meta":{"order":1}},{"path":"/zh-CN/guide/get-started","title":"\u5feb\u901f\u5f00\u59cb","meta":{"order":2}},{"path":"/zh-CN/guide/style","title":"\u6837\u5f0f\u914d\u7f6e","meta":{"order":3}},{"path":"/zh-CN/guide/data","title":"\u6570\u636e","meta":{"order":4}},{"path":"/zh-CN/guide/environment","title":"\u73af\u5883\u8981\u6c42","meta":{"order":5}},{"path":"/zh-CN/guide/hot-key","title":"\u5feb\u6377\u952e","meta":{"order":5}},{"path":"/zh-CN/guide/faq","title":"\u5e38\u89c1\u95ee\u9898","meta":{"order":6}},{"path":"/zh-CN/guide/v8-to-v9","title":"\u4eceV8\u5230V9","meta":{"order":7}},{"path":"/zh-CN/guide/changelog","title":"\u66f4\u65b0\u65e5\u5fd7","meta":{"order":8}}],"/zh-CN/history":[{"path":"/zh-CN/history","title":"\u5386\u53f2\u7248\u672c","meta":{}}],"/zh-CN/pro":[{"path":"/zh-CN/pro","title":"Pro","meta":{}}],"/zh-CN/sample":[{"path":"/zh-CN/sample","title":"\u793a\u4f8b","meta":{}}],"/zh-CN/sponsor":[{"path":"/zh-CN/sponsor","title":"\u8d5e\u52a9","meta":{"order":1}}],"/zh-CN/v7":[{"path":"/zh-CN/v7/chart-api","title":"\u56fe\u8868 API","meta":{}},{"path":"/zh-CN/v7/data","title":"\u6570\u636e\u6e90","meta":{}},{"path":"/zh-CN/v7/features","title":"\u529f\u80fd\u96c6","meta":{}},{"path":"/zh-CN/v7/graphic-mark","title":"\u56fe\u5f62\u6807\u8bb0","meta":{}},{"path":"/zh-CN/v7/graphic-mark-auxiliary-api","title":"\u56fe\u5f62\u6807\u8bb0\u8f85\u52a9 API","meta":{}},{"path":"/zh-CN/v7/indicator","title":"\u6280\u672f\u6307\u6807","meta":{}},{"path":"/zh-CN/v7/instance-api","title":"\u5b9e\u4f8b API","meta":{}},{"path":"/zh-CN/v7/quick-start","title":"\u5feb\u901f\u5f00\u59cb","meta":{}},{"path":"/zh-CN/v7/style","title":"\u6837\u5f0f\u8bf4\u660e","meta":{}}],"/zh-CN/v8":[{"path":"/zh-CN/v8/chart-api","title":"\u56fe\u8868 API","meta":{}},{"path":"/zh-CN/v8/data","title":"\u6570\u636e\u6e90","meta":{}},{"path":"/zh-CN/v8/features","title":"\u529f\u80fd\u96c6","meta":{}},{"path":"/zh-CN/v8/indicator","title":"\u6280\u672f\u6307\u6807","meta":{}},{"path":"/zh-CN/v8/instance-api","title":"\u5b9e\u4f8b API","meta":{}},{"path":"/zh-CN/v8/quick-start","title":"\u5feb\u901f\u5f00\u59cb","meta":{}},{"path":"/zh-CN/v8/shape","title":"\u56fe\u5f62","meta":{}},{"path":"/zh-CN/v8/shape-auxiliary-api","title":"\u56fe\u5f62\u6807\u8bb0\u8f85\u52a9 API","meta":{}},{"path":"/zh-CN/v8/style","title":"\u6837\u5f0f\u8bf4\u660e","meta":{}},{"path":"/zh-CN/v8/v7-to-v8","title":"\u4ece v7 \u5230 v8","meta":{}}]}},"locales":[{"name":"en-US","label":"English"},{"name":"zh-CN","label":"\u4e2d\u6587"}],"navs":{"en-US":[{"title":"Guide","path":"/guide"},{"title":"API","path":"/api"},{"title":"Advanced","path":"/advanced"},{"title":"Sample","path":"/sample"},{"title":"Pro","path":"/pro"},{"title":"History","path":"/history"},{"title":"Sponsor","path":"/sponsor"}],"zh-CN":[{"title":"\u6307\u5357","path":"/zh-CN/guide"},{"title":"API","path":"/zh-CN/api"},{"title":"\u8fdb\u9636","path":"/zh-CN/advanced"},{"title":"\u793a\u4f8b","path":"/zh-CN/sample"},{"title":"Pro","path":"/zh-CN/pro"},{"title":"\u5386\u53f2\u7248\u672c","path":"/zh-CN/history"},{"title":"\u8d5e\u52a9","path":"/zh-CN/sponsor"}]},"title":"KLineChart","logo":"/images/logo_1.svg","mode":"site","repository":{"url":"","branch":"master"},"theme":{}}')},x2v5:function(e){e.exports=JSON.parse("{}")}}]);