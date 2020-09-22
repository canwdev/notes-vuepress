(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{613:function(t,s,e){"use strict";e.r(s);var a=e(57),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"rimg2sdat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rimg2sdat"}},[t._v("#")]),t._v(" rimg2sdat")]),t._v(" "),e("p",[t._v("Tool to convert raw images(EXT4 filesystem) to sparse Android data (system.new.dat)")]),t._v(" "),e("h2",{attrs:{id:"requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),e("ul",[e("li",[t._v("Requires Python 2.7.5 or newer installed on your system")]),t._v(" "),e("li",[t._v("It currently supports Windows, Linux (tested)")]),t._v(" "),e("li",[t._v("Python package: "),e("code",[t._v("brotli")]),t._v(" or "),e("code",[t._v("brotlipy")]),t._v(" (only the "),e("code",[t._v("-c")]),t._v(" parameter is specified)")])]),t._v(" "),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ ./rimg2sdat.py\nusage: rimg2sdat.py [OPTION] <raw_image_file>\n\npositional arguments:\n  raw_image_file  input system raw image file\n\noptional arguments:\n  -h, --help      show this help message and exit\n  -o outdir       output directory, default: current directory\n  -p prefix       name of sparse data image (prefix.new.dat), default: system\n  -v version      transfer list version number, default: 4\n  -c              compress the new.dat file to new.dat.br file with brotli.\n                  (WARNING! Only Android 8.1 support)\n  -nl             when version was 4, no limit 1024 blocks in single command\n  -sha1           get sha1 checksums of sparse data image\n")])])]),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# create system.transfer.list of version 4, and system.new.dat\n~$ ./rimg2sdat.py system.img\n\n# create system.transfer.list of version 3, and system.new.dat\n~$ ./rimg2sdat.py -v 3 system.img\n \n# create test.transfer.list of version 4, then compression test.new.dat into test.new.dat.br\n~$ ./rimg2sdat.py -p test -c system.img\n \n# create system.transfer.list of version 4\n# get sha1 checksums of system.new.dat, then compression it into system.new.dat.br\n~$ ./rimg2sdat.py -c -sha1 system.img\n")])])]),e("h2",{attrs:{id:"also-can-be-a-module"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#also-can-be-a-module"}},[t._v("#")]),t._v(" Also can be a module")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" rimg2sdat\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ~$ ./rimg2sdat.py system.img")]),t._v("\nrimg2sdat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'system.img'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ~$ ./rimg2sdat.py -p test -c -sha1 system.img")]),t._v("\nrimg2sdat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'system.img'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-p test -c -sha1'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"info"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#info"}},[t._v("#")]),t._v(" Info")]),t._v(" "),e("p",[t._v("If you looking decompressing system.new.dat file, you can refer to "),e("a",{attrs:{href:"https://github.com/xpirt/sdat2img",target:"_blank",rel:"noopener noreferrer"}},[t._v("sdat2img"),e("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);