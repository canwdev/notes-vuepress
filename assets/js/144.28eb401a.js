(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{722:function(e,t,r){"use strict";r.r(t);var s=r(57),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"vue-router路由有几种模式-说说它们的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue-router路由有几种模式-说说它们的区别"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://github.com/haizlin/fe-interview/issues/416",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-router路由有几种模式？说说它们的区别？"),r("OutboundLink")],1)]),e._v(" "),r("ul",[r("li",[e._v("hash模式：\n"),r("ol",[r("li",[e._v("url路径会出现 "),r("code",[e._v("#")]),e._v(" 字符")]),e._v(" "),r("li",[e._v("hash值不包括在 HTTP 请求中，它是交由前端路由处理，所以改变hash值时不会刷新页面，也不会向服务器发送请求")]),e._v(" "),r("li",[e._v("hash值的改变会触发hashchange事件")])])]),e._v(" "),r("li",[e._v("history模式：\n"),r("ol",[r("li",[e._v("整个地址重新加载，可以保存历史记录，方便前进后退")]),e._v(" "),r("li",[e._v("使用 HTML5 API（旧浏览器不支持）和 HTTP服务端配置，没有后台配置的话，页面刷新时会出现404")])])])]),e._v(" "),r("h2",{attrs:{id:"如果vue-router使用history模式-部署时要注意什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如果vue-router使用history模式-部署时要注意什么"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://github.com/haizlin/fe-interview/issues/370",target:"_blank",rel:"noopener noreferrer"}},[e._v("如果vue-router使用history模式，部署时要注意什么？"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("HTTP 服务端需要进行配置，将页面请求全部重定向到 "),r("code",[e._v("index.html")]),e._v("。"),r("a",{attrs:{href:"https://router.vuejs.org/zh/guide/essentials/history-mode.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考官方文档"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("nginx 配置：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("location / {\n  try_files $uri $uri/ /index.html;\n}\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);