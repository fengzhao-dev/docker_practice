(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{554:function(s,e,t){"use strict";t.r(e);var a=t(1),n=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"onbuild-为他人做嫁衣裳"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#onbuild-为他人做嫁衣裳"}},[s._v("#")]),s._v(" ONBUILD 为他人做嫁衣裳")]),s._v(" "),e("p",[s._v("格式："),e("code",[s._v("ONBUILD <其它指令>")]),s._v("。")]),s._v(" "),e("p",[e("code",[s._v("ONBUILD")]),s._v(" 是一个特殊的指令，它后面跟的是其它指令，比如 "),e("code",[s._v("RUN")]),s._v(", "),e("code",[s._v("COPY")]),s._v(" 等，而这些指令，在当前镜像构建时并不会被执行。只有当以当前镜像为基础镜像，去构建下一级镜像的时候才会被执行。")]),s._v(" "),e("p",[e("code",[s._v("Dockerfile")]),s._v(" 中的其它指令都是为了定制当前镜像而准备的，唯有 "),e("code",[s._v("ONBUILD")]),s._v(" 是为了帮助别人定制自己而准备的。")]),s._v(" "),e("p",[s._v("假设我们要制作 Node.js 所写的应用的镜像。我们都知道 Node.js 使用 "),e("code",[s._v("npm")]),s._v(" 进行包管理，所有依赖、配置、启动信息等会放到 "),e("code",[s._v("package.json")]),s._v(" 文件里。在拿到程序代码后，需要先进行 "),e("code",[s._v("npm install")]),s._v(" 才可以获得所有需要的依赖。然后就可以通过 "),e("code",[s._v("npm start")]),s._v(" 来启动应用。因此，一般来说会这样写 "),e("code",[s._v("Dockerfile")]),s._v("：")]),s._v(" "),e("div",{staticClass:"language-docker line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-docker"}},[e("code",[e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" node:slim")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" mkdir /app")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /app")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" ./package.json /app")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" [ "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm"')]),s._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"install"')]),s._v(" ]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" . /app/")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" [ "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm"')]),s._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start"')]),s._v(" ]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("把这个 "),e("code",[s._v("Dockerfile")]),s._v(" 放到 Node.js 项目的根目录，构建好镜像后，就可以直接拿来启动容器运行。但是如果我们还有第二个 Node.js 项目也差不多呢？好吧，那就再把这个 "),e("code",[s._v("Dockerfile")]),s._v(" 复制到第二个项目里。那如果有第三个项目呢？再复制么？文件的副本越多，版本控制就越困难，让我们继续看这样的场景维护的问题。")]),s._v(" "),e("p",[s._v("如果第一个 Node.js 项目在开发过程中，发现这个 "),e("code",[s._v("Dockerfile")]),s._v(" 里存在问题，比如敲错字了、或者需要安装额外的包，然后开发人员修复了这个 "),e("code",[s._v("Dockerfile")]),s._v("，再次构建，问题解决。\b第一个项目没问题了，但是第二个项目呢？虽然最初 "),e("code",[s._v("Dockerfile")]),s._v(" 是复制、粘贴自第一个项目的，但是并不会因为第一个项目修复了他们的 "),e("code",[s._v("Dockerfile")]),s._v("，而第二个项目的 "),e("code",[s._v("Dockerfile")]),s._v(" 就会被自动修复。")]),s._v(" "),e("p",[s._v("那么我们可不可以做一个基础镜像，然后各个项目使用这个基础镜像呢？这样基础镜像更新，各个项目不用同步 "),e("code",[s._v("Dockerfile")]),s._v(" 的变化，重新构建后就继承了基础镜像的更新？好吧，可以，让我们看看这样的结果。那么上面的这个 "),e("code",[s._v("Dockerfile")]),s._v(" 就会变为：")]),s._v(" "),e("div",{staticClass:"language-docker line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-docker"}},[e("code",[e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" node:slim")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" mkdir /app")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /app")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" [ "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm"')]),s._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start"')]),s._v(" ]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("这里我们把项目相关的构建指令拿出来，放到子项目里去。假设这个基础镜像的名字为 "),e("code",[s._v("my-node")]),s._v(" 的话，各个项目内的自己的 "),e("code",[s._v("Dockerfile")]),s._v(" 就变为：")]),s._v(" "),e("div",{staticClass:"language-docker line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-docker"}},[e("code",[e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" my-node")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" ./package.json /app")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" [ "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm"')]),s._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"install"')]),s._v(" ]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" . /app/")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("基础镜像变化后，各个项目都用这个 "),e("code",[s._v("Dockerfile")]),s._v(" 重新构建镜像，会继承基础镜像的更新。")]),s._v(" "),e("p",[s._v("那么，问题解决了么？没有。准确说，只解决了一半。如果这个 "),e("code",[s._v("Dockerfile")]),s._v(" 里面有些东西需要调整呢？比如 "),e("code",[s._v("npm install")]),s._v(" 都需要加一些参数，那怎么办？这一行 "),e("code",[s._v("RUN")]),s._v(" 是不可能放入基础镜像的，因为涉及到了当前项目的 "),e("code",[s._v("./package.json")]),s._v("，难道又要一个个修改么？所以说，这样制作基础镜像，只解决了原来的 "),e("code",[s._v("Dockerfile")]),s._v(" 的前4条指令的变化问题，而后面三条指令的变化则完全没办法处理。")]),s._v(" "),e("p",[e("code",[s._v("ONBUILD")]),s._v(" 可以解决这个问题。让我们用 "),e("code",[s._v("ONBUILD")]),s._v(" 重新写一下基础镜像的 "),e("code",[s._v("Dockerfile")]),s._v(":")]),s._v(" "),e("div",{staticClass:"language-docker line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-docker"}},[e("code",[e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" node:slim")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" mkdir /app")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /app")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ONBUILD")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" ./package.json /app")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ONBUILD")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" [ "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm"')]),s._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"install"')]),s._v(" ]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ONBUILD")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" . /app/")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" [ "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"npm"')]),s._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"start"')]),s._v(" ]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("这次我们回到原始的 "),e("code",[s._v("Dockerfile")]),s._v("，但是这次将项目相关的指令加上 "),e("code",[s._v("ONBUILD")]),s._v("，这样在构建基础镜像的时候，这三行并不会被执行。然后各个项目的 "),e("code",[s._v("Dockerfile")]),s._v(" 就变成了简单地：")]),s._v(" "),e("div",{staticClass:"language-docker line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-docker"}},[e("code",[e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" my-node")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("是的，只有这么一行。当在各个项目目录中，用这个只有一行的 "),e("code",[s._v("Dockerfile")]),s._v(" 构建镜像时，之前基础镜像的那三行 "),e("code",[s._v("ONBUILD")]),s._v(" 就会开始执行，成功的将当前项目的代码复制进镜像、并且针对本项目执行 "),e("code",[s._v("npm install")]),s._v("，生成应用镜像。")])])}),[],!1,null,null,null);e.default=n.exports}}]);