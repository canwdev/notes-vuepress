(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{642:function(a,s,e){"use strict";e.r(s);var v=e(57),n=Object(v.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"samba-文件共享服务安装与配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#samba-文件共享服务安装与配置"}},[a._v("#")]),a._v(" Samba 文件共享服务安装与配置")]),a._v(" "),e("p",[a._v("参考：https://m.linuxidc.com/Linux/2018-11/155466.htm")]),a._v(" "),e("blockquote",[e("p",[a._v("Samba(SMB) 是一种在局域网上共享文件和打印机的一种通信协议，我们可以利用 Samba 在网络中访问开启了该服务的计算机中的文件，就像访问本地磁盘一样便利。")])]),a._v(" "),e("h2",{attrs:{id:"安装并配置-samba-服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装并配置-samba-服务器"}},[a._v("#")]),a._v(" 安装并配置 Samba 服务器")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("安装服务\nUbuntu："),e("code",[a._v("sudo apt-get install samba samba-common")])]),a._v(" "),e("p",[a._v("Manjaro KDE："),e("code",[a._v("pamac install samba kdenetwork-filesharing manjaro-settings-samba")])])]),a._v(" "),e("li",[e("p",[a._v("创建一个用于分享的samba目录\n"),e("code",[a._v("sudo mkdir /home/username/Public/share")])])]),a._v(" "),e("li",[e("p",[a._v("给创建的这个目录设置权限\n"),e("code",[a._v("sudo chmod 0700 /home/username/Public/share")])])]),a._v(" "),e("li",[e("p",[a._v("添加用户(下面的 username 是我的 Linux 用户名，之后会需要设置samba的独立密码)。")]),a._v(" "),e("p",[e("code",[a._v("sudo smbpasswd -a username")])])]),a._v(" "),e("li",[e("p",[a._v("配置samba的配置文件")]),a._v(" "),e("p",[e("code",[a._v("sudo vi /etc/samba/smb.conf")]),a._v("，在配置文件smb.conf的最后添加下面的内容（"),e("code",[a._v("shift+g")]),a._v(" 跳转到最后一行）：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("[share]\ncomment = share folder\nbrowseable = yes\npath = /home/username/Public/share\ncreate mask = 0700\ndirectory mask = 0700\nvalid users = username\nforce user = username\nforce group = username\npublic = yes\navailable = yes\nwritable = yes\n")])])]),e("blockquote",[e("p",[a._v("在上面valid users = username中的"),e("strong",[a._v("username")]),a._v("为我的 Linux 用户名")])]),a._v(" "),e("blockquote",[e("p",[a._v("如果要开启 symlink，需要在 "),e("code",[a._v("[global]")]),a._v(" 节中写入以下配置：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("follow symlinks = yes\nwide links = yes\nunix extensions = no\n")])])])])]),a._v(" "),e("li",[e("p",[a._v("重启samba服务器，这样 samba 服务就配置完成并启动成功了")]),a._v(" "),e("ul",[e("li",[a._v("Ubuntu: "),e("code",[a._v("sudo service smbd restart")])]),a._v(" "),e("li",[a._v("Manjaro: "),e("code",[a._v("sudo systemctl restart smb")])])])]),a._v(" "),e("li",[e("p",[a._v("查看本机 IP 地址："),e("code",[a._v("ifconfig")]),a._v(" 或者 "),e("code",[a._v("ip a")])])])]),a._v(" "),e("h2",{attrs:{id:"在-windows-中连接-samba"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在-windows-中连接-samba"}},[a._v("#")]),a._v(" 在 Windows 中连接 Samba")]),a._v(" "),e("p",[e("code",[a._v("Win+R")]),a._v(" 在弹出的运行窗口中输入 "),e("code",[a._v("\\\\ip")]),a._v(" 即可访问。如"),e("code",[a._v("\\\\192.168.1.102")]),a._v("。")]),a._v(" "),e("p",[a._v("在 Win10 中可能会有提示："),e("strong",[a._v("你不能访问此共享文件夹，因为你组织的安全策略阻止未经身份验证的来宾访问。这些策略可帮助保护你的电脑免受网络上不安全设备或恶意设备的威胁。")])]),a._v(" "),e("ol",[e("li",[a._v("按 "),e("code",[a._v("Win+R")]),a._v(" 输入 "),e("code",[a._v("gpedit.msc")]),a._v(" 启动本地组策略编辑器")]),a._v(" "),e("li",[a._v("依次找到“计算机配置-管理模板-网络-Lanman工作站”这个节点，在右侧内容区可以看到“启用不安全的来宾登录”这一条策略设置。状态是“未配置”。")]),a._v(" "),e("li",[a._v("双击“启用不安全的来宾登录”这一条策略设置，将其状态修改为“已启用”并单击确定按钮。")]),a._v(" "),e("li",[a._v("设置完成再次尝试访问发现可以正常访问了。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);