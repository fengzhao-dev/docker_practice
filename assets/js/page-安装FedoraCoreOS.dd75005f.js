(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{528:function(a,s,t){"use strict";t.r(s);var e=t(1),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"安装-fedora-coreos"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-fedora-coreos"}},[a._v("#")]),a._v(" 安装 Fedora CoreOS")]),a._v(" "),s("h2",{attrs:{id:"下载-iso"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载-iso"}},[a._v("#")]),a._v(" 下载 ISO")]),a._v(" "),s("p",[a._v("在 "),s("a",{attrs:{href:"https://getfedora.org/coreos/download/",target:"_blank",rel:"noopener noreferrer"}},[a._v("下载页面"),s("OutboundLink")],1),a._v(" "),s("code",[a._v("Bare Metal & Virtualized")]),a._v(" 标签页下载 ISO。")]),a._v(" "),s("h2",{attrs:{id:"编写-fcc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写-fcc"}},[a._v("#")]),a._v(" 编写 FCC")]),a._v(" "),s("p",[a._v("FCC 是 Fedora CoreOS Configuration （Fedora CoreOS 配置）的简称。")]),a._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# example.fcc")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("variant")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" fcos\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 1.0.0\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("passwd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("users")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" core\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ssh_authorized_keys")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" ssh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("rsa AAAA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("...")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[a._v("将 "),s("code",[a._v("ssh-rsa AAAA...")]),a._v(" 替换为自己的 SSH 公钥（位于 "),s("code",[a._v("~/.ssh/id_rsa.pub")]),a._v("）。")]),a._v(" "),s("h2",{attrs:{id:"转换-fcc-为-ignition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转换-fcc-为-ignition"}},[a._v("#")]),a._v(" 转换 FCC 为 Ignition")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--rm")]),a._v(" quay.io/coreos/fcct:v0.5.0 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--pretty")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--strict")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" example.fcc "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" example.ign\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"挂载-iso-启动虚拟机并安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#挂载-iso-启动虚拟机并安装"}},[a._v("#")]),a._v(" 挂载 ISO 启动虚拟机并安装")]),a._v(" "),s("blockquote",[s("p",[a._v("虚拟机需要分配 3GB 以上内存，否则会无法启动。")])]),a._v(" "),s("p",[a._v("在虚拟机终端执行以下命令安装：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" coreos-installer "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" /dev/sda --ignition-file example.ign\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("安装之后重新启动即可使用。")]),a._v(" "),s("h2",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[a._v("#")]),a._v(" 使用")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ssh")]),a._v(" core@虚拟机IP\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--version")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h2",{attrs:{id:"参考链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[a._v("#")]),a._v(" 参考链接")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.fedoraproject.org/en-US/fedora-coreos/bare-metal/",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方文档"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);