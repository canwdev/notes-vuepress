(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{628:function(t,a,r){"use strict";r.r(a);var s=r(57),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"aria2-终极下载神器-·-安装与配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aria2-终极下载神器-·-安装与配置"}},[t._v("#")]),t._v(" Aria2 终极下载神器 · 安装与配置")]),t._v(" "),r("h2",{attrs:{id:"服务端安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务端安装"}},[t._v("#")]),t._v(" 服务端安装")]),t._v(" "),r("h3",{attrs:{id:"ubuntu"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu"}},[t._v("#")]),t._v(" Ubuntu")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" aria2\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /etc/aria2\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建session文件")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" /etc/aria2/aria2.session\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("777")]),t._v(" /etc/aria2/aria2.session \n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建配置文件")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /etc/aria2/aria2.conf\n")])])]),r("p",[t._v("配置文件参考："),r("a",{attrs:{href:"./images/aria2.conf"}},[t._v("aria2.conf")])]),t._v(" "),r("h3",{attrs:{id:"windows"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[t._v("#")]),t._v(" Windows")]),t._v(" "),r("p",[t._v("Windows可以直接使用懒人包，无需安装，自带配置，"),r("a",{attrs:{href:"http://aria2c.com/archiver/aria2.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载 Windows 设置懒人包"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"webui安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#webui安装"}},[t._v("#")]),t._v(" WebUI安装")]),t._v(" "),r("p",[t._v("WebUI是用于管理Aria2服务的图形化界面，这里推荐使用AriaNg：")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/mayswind/AriaNg",target:"_blank",rel:"noopener noreferrer"}},[t._v("AriaNg"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/ziahamza/webui-aria2",target:"_blank",rel:"noopener noreferrer"}},[t._v("webui-aria2"),r("OutboundLink")],1)])]),t._v(" "),r("h3",{attrs:{id:"测试torrent下载速度"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#测试torrent下载速度"}},[t._v("#")]),t._v(" 测试torrent下载速度")]),t._v(" "),r("p",[t._v("配置文件参考："),r("a",{attrs:{href:"./images/aria2.conf"}},[t._v("aria2.conf")])]),t._v(" "),r("p",[t._v("可以使用热门种子测试下载速度 "),r("a",{attrs:{href:"https://ubuntu.com/download/alternative-downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu Alternative downloads"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("最全的tracker列表：https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_all.txt")]),t._v(" "),r("h3",{attrs:{id:"aria2-守护进程、开机启动-systemd-systemctl-配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aria2-守护进程、开机启动-systemd-systemctl-配置"}},[t._v("#")]),t._v(" aria2 守护进程、开机启动：systemd/systemctl 配置")]),t._v(" "),r("p",[t._v("创建文件："),r("code",[t._v("/etc/systemd/system/caria2.service")])]),t._v(" "),r("p",[t._v("根据你的实际情况编辑并保存：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("[Unit]\nDescription=Aria2 Service\nAfter=network.target\n\n[Service]\nType=simple\nUser=root\nGroup=root\nWorkingDirectory=/usr/www/aria2\nRestart=always\nExecStart=/usr/bin/aria2c --conf-path=/usr/www/aria2/aria2.conf\n\n[Install]\nWantedBy=default.target\n")])])]),r("p",[t._v("保存后，执行：")]),t._v(" "),r("div",{staticClass:"language-sh extra-class"},[r("pre",{pre:!0,attrs:{class:"language-sh"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重新加载配置文件（如果你修改了的话）")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl daemon-reload\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动服务")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl start aria2\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看服务是否正常运作")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl status aria2\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设为开机启动")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" aria2\n")])])]),r("h2",{attrs:{id:"参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.jianshu.com/p/2f7e087f452b",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu18.04安装配置及使用aria2"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.sqlsec.com/2018/05/termux.html#toc-heading-86",target:"_blank",rel:"noopener noreferrer"}},[t._v("Termux使用Aria2打造自己的下载工具"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/37021947",target:"_blank",rel:"noopener noreferrer"}},[t._v("抛弃迅雷，Aria2 新手入门"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://www.senra.me/solutions-to-aria2-bt-metalink-download-slowly/",target:"_blank",rel:"noopener noreferrer"}},[t._v("解决Aria2 BT下载速度慢没速度的问题"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);