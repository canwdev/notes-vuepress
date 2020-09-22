(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{643:function(s,e,t){"use strict";t.r(e);var n=t(57),a=Object(n.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"解决-samsung-s7-在-linux-mint-下无法使用-usb-网络共享-rndis-的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决-samsung-s7-在-linux-mint-下无法使用-usb-网络共享-rndis-的问题"}},[s._v("#")]),s._v(" 解决 Samsung S7 在 Linux Mint 下无法使用 USB 网络共享(RNDIS)的问题")]),s._v(" "),t("p",[s._v("修改 MAC 地址可以解决该问题")]),s._v(" "),t("p",[s._v("首先运行：")]),s._v(" "),t("p",[t("code",[s._v("ip link show")])]),s._v(" "),t("p",[s._v("This will list the network devices, Find the one you want to change.")]),s._v(" "),t("p",[s._v("比如有问题的设备是 device is enp0s20f0u6")]),s._v(" "),t("p",[s._v("运行:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo ip link set dev <your_device> down")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" dev enp0s20f0u6 down\n")])])]),t("p",[s._v("然后:")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo ip link set dev <your_device> address <your_new_mac_address>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" dev enp0s20f0u6 address 4C:ED:FB:74:41:45\n")])])]),t("p",[s._v("或者，如果你想自动生成 MAC 地址，安装 Macchanger：")]),s._v(" "),t("p",[t("code",[s._v("sudo apt install macchanger")])]),s._v(" "),t("p",[s._v("To change MAC address")]),s._v(" "),t("p",[t("code",[s._v("sudo macchanger -r <your_device>")])]),s._v(" "),t("p",[s._v("最后：")]),s._v(" "),t("p",[t("code",[s._v("sudo ip link set dev <your_device> up")])]),s._v(" "),t("h1",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://askubuntu.com/a/1160490",target:"_blank",rel:"noopener noreferrer"}},[s._v("USB tethering not working in 18.04 fresh install"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=a.exports}}]);