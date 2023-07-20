(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{462:function(e,t,s){"use strict";s.r(t);var a=s(1),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"配置-http-https-网络代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-http-https-网络代理"}},[e._v("#")]),e._v(" 配置 HTTP/HTTPS 网络代理")]),e._v(" "),t("p",[e._v("使用Docker的过程中，因为网络原因，通常需要使用 HTTP/HTTPS 代理来加速镜像拉取、构建和使用。下面是常见的三种场景。")]),e._v(" "),t("h2",{attrs:{id:"为-dockerd-设置网络代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为-dockerd-设置网络代理"}},[e._v("#")]),e._v(" 为 dockerd 设置网络代理")]),e._v(" "),t("p",[e._v('"docker pull" 命令是由 dockerd 守护进程执行。而 dockerd 守护进程是由 systemd 管理。因此，如果需要在执行 "docker pull" 命令时使用 HTTP/HTTPS 代理，需要通过 systemd 配置。')]),e._v(" "),t("ul",[t("li",[e._v("为 dockerd 创建配置文件夹。")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo mkdir -p /etc/systemd/system/docker.service.d\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ul",[t("li",[e._v("为 dockerd 创建 HTTP/HTTPS 网络代理的配置文件，文件路径是 /etc/systemd/system/docker.service.d/http-proxy.conf 。并在该文件中添加相关环境变量。")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[Service]\nEnvironment="HTTP_PROXY=http://proxy.example.com:8080/"\nEnvironment="HTTPS_PROXY=http://proxy.example.com:8080/"\nEnvironment="NO_PROXY=localhost,127.0.0.1,.example.com"\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("ul",[t("li",[e._v("刷新配置并重启 docker 服务。")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo systemctl daemon-reload\nsudo systemctl restart docker\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("h2",{attrs:{id:"为-docker-容器设置网络代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为-docker-容器设置网络代理"}},[e._v("#")]),e._v(" 为 docker 容器设置网络代理")]),e._v(" "),t("p",[e._v("在容器运行阶段，如果需要使用 HTTP/HTTPS 代理，可以通过更改 docker 客户端配置，或者指定环境变量的方式。")]),e._v(" "),t("ul",[t("li",[e._v("更改 docker 客户端配置：创建或更改 ~/.docker/config.json，并在该文件中添加相关配置。")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n "proxies":\n {\n   "default":\n   {\n     "httpProxy": "http://proxy.example.com:8080/",\n     "httpsProxy": "http://proxy.example.com:8080/",\n     "noProxy": "localhost,127.0.0.1,.example.com"\n   }\n }\n}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br")])]),t("ul",[t("li",[e._v('指定环境变量：运行 "docker run" 命令时，指定相关环境变量。')])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("环境变量")]),e._v(" "),t("th",[e._v("docker run 示例")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("HTTP_PROXY")]),e._v(" "),t("td",[e._v('--env HTTP_PROXY="http://proxy.example.com:8080/"')])]),e._v(" "),t("tr",[t("td",[e._v("HTTPS_PROXY")]),e._v(" "),t("td",[e._v('--env HTTPS_PROXY="http://proxy.example.com:8080/"')])]),e._v(" "),t("tr",[t("td",[e._v("NO_PROXY")]),e._v(" "),t("td",[e._v('--env NO_PROXY="localhost,127.0.0.1,.example.com"')])])])]),e._v(" "),t("h2",{attrs:{id:"为-docker-build-过程设置网络代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为-docker-build-过程设置网络代理"}},[e._v("#")]),e._v(" 为 docker build 过程设置网络代理")]),e._v(" "),t("p",[e._v('在容器构建阶段，如果需要使用 HTTP/HTTPS 代理，可以通过指定 "docker build" 的环境变量，或者在 Dockerfile 中指定环境变量的方式。')]),e._v(" "),t("ul",[t("li",[e._v('使用 "--build-arg" 指定 "docker build" 的相关环境变量')])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('docker build \\\n    --build-arg "HTTP_PROXY=http://proxy.example.com:8080/" \\\n    --build-arg "HTTPS_PROXY=http://proxy.example.com:8080/" \\\n    --build-arg "NO_PROXY=localhost,127.0.0.1,.example.com" .\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("ul",[t("li",[e._v("在 Dockerfile 中指定相关环境变量")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("环境变量")]),e._v(" "),t("th",[e._v("Dockerfile 示例")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("HTTP_PROXY")]),e._v(" "),t("td",[e._v('ENV HTTP_PROXY="http://proxy.example.com:8080/"')])]),e._v(" "),t("tr",[t("td",[e._v("HTTPS_PROXY")]),e._v(" "),t("td",[e._v('ENV HTTPS_PROXY="http://proxy.example.com:8080/"')])]),e._v(" "),t("tr",[t("td",[e._v("NO_PROXY")]),e._v(" "),t("td",[e._v('ENV NO_PROXY="localhost,127.0.0.1,.example.com"')])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);