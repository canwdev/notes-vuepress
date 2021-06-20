(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{648:function(e,t,n){"use strict";n.r(t);var s=n(27),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"electron-js-快速入坑指南"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#electron-js-快速入坑指南"}},[e._v("#")]),e._v(" Electron.js 快速入坑指南")]),e._v(" "),n("blockquote",[n("p",[e._v("使用 JavaScript, HTML 和 CSS 构建跨平台的桌面应用。如果你可以建一个网站，你就可以建一个桌面应用程序。 Electron 是一个使用 JavaScript, HTML 和 CSS 等 Web 技术创建原生程序的框架，它负责比较难搞的部分，你只需把精力放在你的应用的核心上即可。")])]),e._v(" "),n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),n("p",[e._v("由于国内网络问题，需要先设置镜像。")]),e._v(" "),n("p",[e._v("编辑 "),n("code",[e._v("~/.npmrc")]),e._v(" 在里面添加 "),n("code",[e._v('electron_mirror="https://npm.taobao.org/mirrors/electron/"')])]),e._v(" "),n("p",[e._v("安装 electron："),n("code",[e._v("npm i -g electron")])]),e._v(" "),n("h2",{attrs:{id:"使用官方示例文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用官方示例文件"}},[e._v("#")]),e._v(" 使用官方示例文件")]),e._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 克隆示例项目的仓库")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/electron/electron-quick-start\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 进入这个仓库")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" electron-quick-start\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 安装依赖并运行")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" start\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 如果全局安装了 electron，直接执行：")]),e._v("\nelectron "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br")])]),n("h2",{attrs:{id:"windows-下的打包-electron-builder"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#windows-下的打包-electron-builder"}},[e._v("#")]),e._v(" Windows 下的打包（electron-builder）")]),e._v(" "),n("p",[e._v("安装 electron-builder："),n("code",[e._v("npm i -g electron-builder")])]),e._v(" "),n("p",[e._v("由于国内网络问题，导致依赖winCodeSign和nsis下载报错，这时需要手动下载然后放到指定位置。")]),e._v(" "),n("ul",[n("li",[e._v("winCodeSign\n"),n("ul",[n("li",[e._v("下载链接：https://github.com/electron-userland/electron-builder-binaries/releases/tag/winCodeSign-2.5.0")]),e._v(" "),n("li",[e._v("解压后位置："),n("code",[e._v("C:\\Users\\用户名\\AppData\\Local\\electron-builder\\Cache\\winCodeSign\\winCodeSign-2.5.0")])])])]),e._v(" "),n("li",[e._v("nsis\n"),n("ul",[n("li",[e._v("下载链接：https://github.com/electron-userland/electron-builder-binaries/releases")]),e._v(" "),n("li",[e._v("解压后位置："),n("code",[e._v("C:\\Users\\用户名\\AppData\\Local\\electron-builder\\Cache\\nsis\\nsis-3.0.3.2")])])])])]),e._v(" "),n("p",[e._v("安装完成后即可开始打包")]),e._v(" "),n("ul",[n("li",[e._v("打包成绿色免安装 "),n("code",[e._v("electron-builder --dir")])]),e._v(" "),n("li",[e._v("打包成exe的安装包 "),n("code",[e._v("electron-builder")])])]),e._v(" "),n("h2",{attrs:{id:"electron-require-is-not-defined"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#electron-require-is-not-defined"}},[e._v("#")]),e._v(" Electron require() is not defined")]),e._v(" "),n("p",[e._v("从版本5开始，nodeIntegration的默认值从true更改为false。您可以在创建浏览器窗口时启用它：")]),e._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[e._v("app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'ready'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    mainWindow "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("BrowserWindow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        webPreferences"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n            nodeIntegration"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br")])]),n("h1",{attrs:{id:"参考"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),n("ul",[n("li",[e._v("https://electronjs.org/")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://www.imqianduan.com/electron/electron-builder.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("利用electron-builder打包electron成exe"),n("OutboundLink")],1)])]),e._v(" "),n("h2",{attrs:{id:"学习资源"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#学习资源"}},[e._v("#")]),e._v(" 学习资源")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://electronjs.org/docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("electronjs.org/docs"),n("OutboundLink")],1),e._v(" - Electron的所有文档")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://electronjs.org/community#boilerplates",target:"_blank",rel:"noopener noreferrer"}},[e._v("electronjs.org/community#boilerplates"),n("OutboundLink")],1),e._v(" - 社区创建的示例入门应用程序")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/electron/electron-quick-start",target:"_blank",rel:"noopener noreferrer"}},[e._v("electron/electron-quick-start"),n("OutboundLink")],1),e._v(" - 一个非常基本的入门电子应用程序")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/electron/simple-samples",target:"_blank",rel:"noopener noreferrer"}},[e._v("electron/simple-samples"),n("OutboundLink")],1),e._v(" - 小型应用程序，具有将其进一步发展的想法")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/electron/electron-api-demos",target:"_blank",rel:"noopener noreferrer"}},[e._v("electron/electron-api-demos"),n("OutboundLink")],1),e._v(" - 教您如何使用Electron的Electron应用程序")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/hokein/electron-sample-apps",target:"_blank",rel:"noopener noreferrer"}},[e._v("hokein/electron-sample-apps"),n("OutboundLink")],1),e._v(" - 适用于各种Electron API的小型演示应用程序")])])])}),[],!1,null,null,null);t.default=r.exports}}]);