(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{612:function(r,t,e){"use strict";e.r(t);var o=e(1),n=Object(o.a)({},(function(){var r=this,t=r._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"其它安全特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其它安全特性"}},[r._v("#")]),r._v(" 其它安全特性")]),r._v(" "),t("p",[r._v("除了能力机制之外，还可以利用一些现有的安全机制来增强使用 Docker 的安全性，例如 TOMOYO, AppArmor, Seccomp, SELinux, GRSEC 等。")]),r._v(" "),t("p",[r._v("Docker 当前默认只启用了能力机制。用户可以采用多种方案来加强 Docker 主机的安全，例如：")]),r._v(" "),t("ul",[t("li",[r._v("在内核中启用 GRSEC 和 PAX，这将增加很多编译和运行时的安全检查；通过地址随机化避免恶意探测等。并且，启用该特性不需要 Docker 进行任何配置。")]),r._v(" "),t("li",[r._v("使用一些有增强安全特性的容器模板，比如带 AppArmor 的模板和 Redhat 带 SELinux 策略的模板。这些模板提供了额外的安全特性。")]),r._v(" "),t("li",[r._v("用户可以自定义访问控制机制来定制安全策略。")])]),r._v(" "),t("p",[r._v("跟其它添加到 Docker 容器的第三方工具一样（比如网络拓扑和文件系统共享），有很多类似的机制，在不改变 Docker 内核情况下就可以加固现有的容器。")])])}),[],!1,null,null,null);t.default=n.exports}}]);