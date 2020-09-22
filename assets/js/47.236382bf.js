(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{616:function(s,t,e){"use strict";e.r(t);var a=e(57),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"android-魔改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#android-魔改"}},[s._v("#")]),s._v(" Android 魔改")]),s._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/manual/android-rom-modify/"}},[s._v("Android ROM 在 Ubuntu 下的 system.new.dat 的解包、修改和打包")])],1)]),s._v(" "),e("h2",{attrs:{id:"常用-android-刷机命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用-android-刷机命令"}},[s._v("#")]),s._v(" 常用 Android 刷机命令")]),s._v(" "),e("h3",{attrs:{id:"使用-fastboot-刷入-recovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-fastboot-刷入-recovery"}},[s._v("#")]),s._v(" 使用 fastboot 刷入 Recovery")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看设备列表")]),s._v("\nfastboot.exe devices\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 刷入 recovery 到 recovery 分区")]),s._v("\nfastboot.exe flash recovery recovery.img\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 立即引导 recovery")]),s._v("\nfastboot.exe boot recovery.img\n")])])]),e("h2",{attrs:{id:"常用-adb-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用-adb-命令"}},[s._v("#")]),s._v(" 常用 ADB 命令")]),s._v(" "),e("p",[s._v("参考：https://github.com/jaredrummler/android-shell-scripts")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 快速重启")]),s._v("\nsetprop ctl.restart zygote\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启至 bootloader")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v(" bootloader\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启至 recovery")]),s._v("\nsetprop ctl.start pre-recovery\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v(" recovery "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fallback")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启")]),s._v("\nsetprop sys.powerctl "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fallback")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启 SystemUI")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" call activity "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),s._v(" s16 com.android.systemui\nam startservice -n com.android.systemui/.SystemUIService\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关机")]),s._v("\nsetprop sys.powerctl "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v(" -p "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fallback")]),s._v("\n")])])]),e("h2",{attrs:{id:"nokia-n1-开启-otg-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nokia-n1-开启-otg-命令"}},[s._v("#")]),s._v(" Nokia N1 开启 OTG 命令")]),s._v(" "),e("blockquote",[e("p",[s._v("注：开启后在重启之前都不能充电。")])]),s._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" A "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /sys/kernel/debug/usb/dwc3_debugfs_root/otg_id\n")])])]),e("h2",{attrs:{id:"build-prop-优化代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-prop-优化代码"}},[s._v("#")]),s._v(" build.prop 优化代码")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Disables logcat")]),s._v("\nlogcat.live"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("disable\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Disable Automatic Error Reporting")]),s._v("\nprofiler.force_disable_err_rpt"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nprofiler.force_disable_ulog"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nro.kernel.checkjni"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nro.kernel.android.checkjni"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\npersist.android.strictmode"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Better net speeds.")]),s._v("\nnet.tcp.buffersize.default"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096,87380")]),s._v(",256960, "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("16384,256960")]),s._v("\nnet.tcp.buffersize.wifi"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096,87380")]),s._v(",256960,409 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6,163")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("84,256960")]),s._v("\nnet.tcp.buffersize.umts"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096,8")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7380,256960")]),s._v(",4096,163 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("84,256960")]),s._v("\nnet.tcp.buffersize.gprs"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096,8")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7380,256960")]),s._v(",4096,163 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("84,256960")]),s._v("\nnet.tcp.buffersize.edge"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096,8")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7380,256960")]),s._v(",4096,163 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("84,256960")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Better scrolling.")]),s._v("\nwindowsmgr.max_events_per_sec"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("150")]),s._v("\nro.min_pointer_dur"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" ro.max.fling_velocity"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("12000")]),s._v("\nro.min.fling_velocity"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Faster boot.")]),s._v("\nro.config.hw_quickpoweron"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭开机动画")]),s._v("\ndebug.sf.nobootanimation"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 低内存模式")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://source.android.com/devices/tech/perf/low-ram")]),s._v("\nro.config.low_ram"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n")])])]),e("h2",{attrs:{id:"刷机疑难杂症"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#刷机疑难杂症"}},[s._v("#")]),s._v(" 刷机疑难杂症")]),s._v(" "),e("ul",[e("li",[s._v("如果无法刷入，请检查\n"),e("ul",[e("li",[s._v("设备型号与脚本判定是否一致，如果要强刷，请修改刷机包 "),e("code",[s._v("\\META-INF\\com\\google\\android\\updater-script")]),s._v(" 里的判定机制")]),s._v(" "),e("li",[s._v("底包（firmware）是否达到要求，如果底包版本过低则无法刷入")]),s._v(" "),e("li",[s._v("TWRP 是否支持刷入该版本的Android")])])]),s._v(" "),e("li",[s._v("如果刷入后卡第一屏（无开机动画）\n"),e("ul",[e("li",[s._v("可能是 /data 分区出了问题，先备份数据，然后完全格式化 /data 分区，再重新刷入")]),s._v(" "),e("li",[s._v("可能是 ROM 本身的问题")])])]),s._v(" "),e("li",[s._v("如果重启后总是进入 recovery\n"),e("ul",[e("li",[s._v("可能是把 recovery.img 刷入了 boot 分区导致的")]),s._v(" "),e("li",[s._v("可能是 boot 损坏了导致自动启动 recovery 分区")]),s._v(" "),e("li",[s._v("线刷官方包或者卡刷上一次能用的包应该可以解决问题")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);