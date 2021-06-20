(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{640:function(s,e,t){"use strict";t.r(e);var a=t(27),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"linux-fstab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-fstab"}},[s._v("#")]),s._v(" Linux fstab")]),s._v(" "),t("blockquote",[t("p",[s._v("sudo vim /etc/fstab")])]),s._v(" "),t("h2",{attrs:{id:"fstab-文件内容及释义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fstab-文件内容及释义"}},[s._v("#")]),s._v(" fstab 文件内容及释义")]),s._v(" "),t("p",[s._v("参考：")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://wiki.archlinux.org/index.php/Fstab_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)",target:"_blank",rel:"noopener noreferrer"}},[s._v("fstab - ArchWiki"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.cnblogs.com/huapox/p/3509637.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("ubuntu 重新挂载home"),t("OutboundLink")],1)])]),s._v(" "),t("p",[s._v("fstab文件可用于定义磁盘分区，各种其他块设备或远程文件系统应如何装入文件系统。")]),s._v(" "),t("p",[s._v("一个 "),t("code",[s._v("/etc/fstab")]),s._v(" 示例，使用内核名称标识磁盘:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# /etc/fstab: static file system information.\n#\n# Use 'blkid' to print the universally unique identifier for a device; this may\n# be used with UUID= as a more robust way to name devices that works even if\n# disks are added and removed. See fstab(5).\n#\n# <file system>        <dir>         <type>    <options>             <dump> <pass>\ntmpfs                  /tmp          tmpfs     nodev,nosuid          0      0\n/dev/sda1              /             ext4      defaults,noatime      0      1\n/dev/sda2              none          swap      defaults              0      0\n/dev/sda3              /home         ext4      defaults,noatime      0      2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("字段解释：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("<file systems>")]),s._v("：要挂载的分区或存储设备。最初，该字段只包含待挂载分区的设备名（如/dev/sda1）。现在，除设备名外，还可以包含LABEL或UUID。")]),s._v(" "),t("li",[t("code",[s._v("<dir>")]),s._v("："),t("code",[s._v("<file systems>")]),s._v(" 的文件系统挂载点。")]),s._v(" "),t("li",[t("code",[s._v("<type>")]),s._v("：文件系统类型，支持许多种不同的文件系统：如"),t("code",[s._v("ext4")]),s._v(", "),t("code",[s._v("vfat")]),s._v(", "),t("code",[s._v("ntfs")]),s._v(", "),t("code",[s._v("swap")]),s._v(", "),t("code",[s._v("auto")]),s._v("等。 设置成"),t("code",[s._v("auto")]),s._v("类型，mount 命令会猜测使用的文件系统类型，对 CDROM 和 DVD 等移动设备是非常有用的。")]),s._v(" "),t("li",[t("code",[s._v("<options>")]),s._v("：挂载时使用的参数，注意有些参数是特定文件系统才有的。")]),s._v(" "),t("li",[t("code",[s._v("<dump>")]),s._v("：dump 工具通过它决定何时作备份。dump 会检查其内容，并用数字来决定是否对这个文件系统进行备份。 允许的数字是 0 和 1 。0 表示忽略， 1 则进行备份。大部分的用户是没有安装 dump 的 ，对他们而言 "),t("code",[s._v("<dump>")]),s._v(" 应设为 0。")]),s._v(" "),t("li",[t("code",[s._v("<pass>")]),s._v("：fsck 读取 "),t("code",[s._v("<pass>")]),s._v(" 的数值来决定需要检查的文件系统的检查顺序。允许的数字是0, 1, 和2。 0表示不必检查该文件系统，数字1示意该文件系统需要先行检查（用于根文件系统）。数字2则表示完成根文件系统检查后，再检查该文件系统。")])]),s._v(" "),t("h2",{attrs:{id:"更改-home-挂载点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更改-home-挂载点"}},[s._v("#")]),s._v(" 更改 /home 挂载点")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("复制原有 home 内容到新分区")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -ax /home/* /mnt/test/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("找到目标分区 UUID："),t("code",[s._v("sudo blkid")])])]),s._v(" "),t("li",[t("p",[s._v("重命名旧 "),t("code",[s._v("/home")]),s._v("目录，并且创建一个新的空目录（必要）")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /home /home.old\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /home\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("将挂载点保，"),t("code",[s._v("sudo vim /etc/fstab")]),s._v("，按照如下格式修改：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("UUID=45a8f854-55c1-435b-b37e-8cfce8f8a6b2 /              ext4    defaults,noatime 0 1\nUUID=ba6bab0d-ecc4-48f8-b0f8-fc999bd67491 /home          ext4    defaults 0 2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("第一个 UUID 是系统根目录的分区，第二个则是新 home 的分区。")])]),s._v(" "),t("li",[t("p",[s._v("重启，如果成功进入系统就可以删除旧的 "),t("code",[s._v("home.old")])])])]),s._v(" "),t("p",[s._v("参考："),t("a",{attrs:{href:"https://blog.csdn.net/u012796629/article/details/100841549",target:"_blank",rel:"noopener noreferrer"}},[s._v("ubuntu18.04 更改/home挂载点"),t("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);