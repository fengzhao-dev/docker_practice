(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{536:function(t,e,s){"use strict";s.r(e);var a=s(1),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"使用-etcdctl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-etcdctl"}},[t._v("#")]),t._v(" 使用 etcdctl")]),t._v(" "),e("p",[e("code",[t._v("etcdctl")]),t._v(" 是一个命令行客户端，它能提供一些简洁的命令，供用户直接跟 "),e("code",[t._v("etcd")]),t._v(" 服务打交道，而无需基于 "),e("code",[t._v("HTTP API")]),t._v(" 方式。这在某些情况下将很方便，例如用户对服务进行测试或者手动修改数据库内容。我们也推荐在刚接触 "),e("code",[t._v("etcd")]),t._v(" 时通过 "),e("code",[t._v("etcdctl")]),t._v(" 命令来熟悉相关的操作，这些操作跟 "),e("code",[t._v("HTTP API")]),t._v(" 实际上是对应的。")]),t._v(" "),e("p",[e("code",[t._v("etcd")]),t._v(" 项目二进制发行包中已经包含了 "),e("code",[t._v("etcdctl")]),t._v(" 工具，没有的话，可以从 "),e("a",{attrs:{href:"https://github.com/etcd-io/etcd/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/etcd-io/etcd/releases"),e("OutboundLink")],1),t._v(" 下载。")]),t._v(" "),e("p",[e("code",[t._v("etcdctl")]),t._v(" 支持如下的命令，大体上分为数据库操作和非数据库操作两类，后面将分别进行解释。")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('NAME:\n\tetcdctl - A simple command line client for etcd3.\n\nUSAGE:\n\tetcdctl\n\nVERSION:\n\t3.4.0\n\nAPI VERSION:\n\t3.4\n\n\nCOMMANDS:\n\tget\t\t\tGets the key or a range of keys\n\tput\t\t\tPuts the given key into the store\n\tdel\t\t\tRemoves the specified key or range of keys [key, range_end)\n\ttxn\t\t\tTxn processes all the requests in one transaction\n\tcompaction\t\tCompacts the event history in etcd\n\talarm disarm\t\tDisarms all alarms\n\talarm list\t\tLists all alarms\n\tdefrag\t\t\tDefragments the storage of the etcd members with given endpoints\n\tendpoint health\t\tChecks the healthiness of endpoints specified in `--endpoints` flag\n\tendpoint status\t\tPrints out the status of endpoints specified in `--endpoints` flag\n\twatch\t\t\tWatches events stream on keys or prefixes\n\tversion\t\t\tPrints the version of etcdctl\n\tlease grant\t\tCreates leases\n\tlease revoke\t\tRevokes leases\n\tlease timetolive\tGet lease information\n\tlease keep-alive\tKeeps leases alive (renew)\n\tmember add\t\tAdds a member into the cluster\n\tmember remove\t\tRemoves a member from the cluster\n\tmember update\t\tUpdates a member in the cluster\n\tmember list\t\tLists all members in the cluster\n\tsnapshot save\t\tStores an etcd node backend snapshot to a given file\n\tsnapshot restore\tRestores an etcd member snapshot to an etcd directory\n\tsnapshot status\t\tGets backend snapshot status of a given file\n\tmake-mirror\t\tMakes a mirror at the destination etcd cluster\n\tmigrate\t\t\tMigrates keys in a v2 store to a mvcc store\n\tlock\t\t\tAcquires a named lock\n\telect\t\t\tObserves and participates in leader election\n\tauth enable\t\tEnables authentication\n\tauth disable\t\tDisables authentication\n\tuser add\t\tAdds a new user\n\tuser delete\t\tDeletes a user\n\tuser get\t\tGets detailed information of a user\n\tuser list\t\tLists all users\n\tuser passwd\t\tChanges password of user\n\tuser grant-role\t\tGrants a role to a user\n\tuser revoke-role\tRevokes a role from a user\n\trole add\t\tAdds a new role\n\trole delete\t\tDeletes a role\n\trole get\t\tGets detailed information of a role\n\trole list\t\tLists all roles\n\trole grant-permission\tGrants a key to a role\n\trole revoke-permission\tRevokes a key from a role\n\tcheck perf\t\tCheck the performance of the etcd cluster\n\thelp\t\t\tHelp about any command\n\nOPTIONS:\n      --cacert=""\t\t\t\tverify certificates of TLS-enabled secure servers using this CA bundle\n      --cert=""\t\t\t\t\tidentify secure client using this TLS certificate file\n      --command-timeout=5s\t\t\ttimeout for short running command (excluding dial timeout)\n      --debug[=false]\t\t\t\tenable client-side debug logging\n      --dial-timeout=2s\t\t\t\tdial timeout for client connections\n      --endpoints=[127.0.0.1:2379]\t\tgRPC endpoints\n      --hex[=false]\t\t\t\tprint byte strings as hex encoded strings\n      --insecure-skip-tls-verify[=false]\tskip server certificate verification\n      --insecure-transport[=true]\t\tdisable transport security for client connections\n      --key=""\t\t\t\t\tidentify secure client using this TLS key file\n      --user=""\t\t\t\t\tusername[:password] for authentication (prompt if password is not supplied)\n  -w, --write-out="simple"\t\t\tset the output format (fields, json, protobuf, simple, table)\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br"),e("span",{staticClass:"line-number"},[t._v("27")]),e("br"),e("span",{staticClass:"line-number"},[t._v("28")]),e("br"),e("span",{staticClass:"line-number"},[t._v("29")]),e("br"),e("span",{staticClass:"line-number"},[t._v("30")]),e("br"),e("span",{staticClass:"line-number"},[t._v("31")]),e("br"),e("span",{staticClass:"line-number"},[t._v("32")]),e("br"),e("span",{staticClass:"line-number"},[t._v("33")]),e("br"),e("span",{staticClass:"line-number"},[t._v("34")]),e("br"),e("span",{staticClass:"line-number"},[t._v("35")]),e("br"),e("span",{staticClass:"line-number"},[t._v("36")]),e("br"),e("span",{staticClass:"line-number"},[t._v("37")]),e("br"),e("span",{staticClass:"line-number"},[t._v("38")]),e("br"),e("span",{staticClass:"line-number"},[t._v("39")]),e("br"),e("span",{staticClass:"line-number"},[t._v("40")]),e("br"),e("span",{staticClass:"line-number"},[t._v("41")]),e("br"),e("span",{staticClass:"line-number"},[t._v("42")]),e("br"),e("span",{staticClass:"line-number"},[t._v("43")]),e("br"),e("span",{staticClass:"line-number"},[t._v("44")]),e("br"),e("span",{staticClass:"line-number"},[t._v("45")]),e("br"),e("span",{staticClass:"line-number"},[t._v("46")]),e("br"),e("span",{staticClass:"line-number"},[t._v("47")]),e("br"),e("span",{staticClass:"line-number"},[t._v("48")]),e("br"),e("span",{staticClass:"line-number"},[t._v("49")]),e("br"),e("span",{staticClass:"line-number"},[t._v("50")]),e("br"),e("span",{staticClass:"line-number"},[t._v("51")]),e("br"),e("span",{staticClass:"line-number"},[t._v("52")]),e("br"),e("span",{staticClass:"line-number"},[t._v("53")]),e("br"),e("span",{staticClass:"line-number"},[t._v("54")]),e("br"),e("span",{staticClass:"line-number"},[t._v("55")]),e("br"),e("span",{staticClass:"line-number"},[t._v("56")]),e("br"),e("span",{staticClass:"line-number"},[t._v("57")]),e("br"),e("span",{staticClass:"line-number"},[t._v("58")]),e("br"),e("span",{staticClass:"line-number"},[t._v("59")]),e("br"),e("span",{staticClass:"line-number"},[t._v("60")]),e("br"),e("span",{staticClass:"line-number"},[t._v("61")]),e("br"),e("span",{staticClass:"line-number"},[t._v("62")]),e("br"),e("span",{staticClass:"line-number"},[t._v("63")]),e("br"),e("span",{staticClass:"line-number"},[t._v("64")]),e("br"),e("span",{staticClass:"line-number"},[t._v("65")]),e("br"),e("span",{staticClass:"line-number"},[t._v("66")]),e("br"),e("span",{staticClass:"line-number"},[t._v("67")]),e("br"),e("span",{staticClass:"line-number"},[t._v("68")]),e("br"),e("span",{staticClass:"line-number"},[t._v("69")]),e("br"),e("span",{staticClass:"line-number"},[t._v("70")]),e("br"),e("span",{staticClass:"line-number"},[t._v("71")]),e("br"),e("span",{staticClass:"line-number"},[t._v("72")]),e("br")])]),e("h2",{attrs:{id:"数据库操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库操作"}},[t._v("#")]),t._v(" 数据库操作")]),t._v(" "),e("p",[t._v("数据库操作围绕对键值和目录的 CRUD （符合 REST 风格的一套操作：Create）完整生命周期的管理。")]),t._v(" "),e("p",[t._v("etcd 在键的组织上采用了层次化的空间结构（类似于文件系统中目录的概念），用户指定的键可以为单独的名字，如 "),e("code",[t._v("testkey")]),t._v("，此时实际上放在根目录 "),e("code",[t._v("/")]),t._v(" 下面，也可以为指定目录结构，如 "),e("code",[t._v("cluster1/node2/testkey")]),t._v("，则将创建相应的目录结构。")]),t._v(" "),e("blockquote",[e("p",[t._v("注：CRUD 即 Create, Read, Update, Delete，是符合 REST 风格的一套 API 操作。")])]),t._v(" "),e("h3",{attrs:{id:"put"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#put"}},[t._v("#")]),t._v(" put")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ etcdctl put /testdir/testkey "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello world"')]),t._v("\nOK\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h3",{attrs:{id:"get"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[t._v("#")]),t._v(" get")]),t._v(" "),e("p",[t._v("获取指定键的值。例如")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ etcdctl put testkey hello\nOK\n$ etcdctl get testkey\ntestkey\nhello\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("支持的选项为")]),t._v(" "),e("p",[e("code",[t._v("--sort")]),t._v("\t对结果进行排序")]),t._v(" "),e("p",[e("code",[t._v("--consistent")]),t._v(" 将请求发给主节点，保证获取内容的一致性")]),t._v(" "),e("h3",{attrs:{id:"del"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#del"}},[t._v("#")]),t._v(" del")]),t._v(" "),e("p",[t._v("删除某个键值。例如")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ etcdctl del testkey\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h2",{attrs:{id:"非数据库操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#非数据库操作"}},[t._v("#")]),t._v(" 非数据库操作")]),t._v(" "),e("h3",{attrs:{id:"watch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#watch"}},[t._v("#")]),t._v(" watch")]),t._v(" "),e("p",[t._v("监测一个键值的变化，一旦键值发生更新，就会输出最新的值。")]),t._v(" "),e("p",[t._v("例如，用户更新 "),e("code",[t._v("testkey")]),t._v(" 键值为 "),e("code",[t._v("Hello world")]),t._v("。")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ etcdctl "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("watch")]),t._v(" testkey\nPUT\ntestkey\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("h3",{attrs:{id:"member"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#member"}},[t._v("#")]),t._v(" member")]),t._v(" "),e("p",[t._v("通过 "),e("code",[t._v("list")]),t._v("、"),e("code",[t._v("add")]),t._v("、"),e("code",[t._v("update")]),t._v("、"),e("code",[t._v("remove")]),t._v(" 命令列出、添加、更新、删除 etcd 实例到 etcd 集群中。")]),t._v(" "),e("p",[t._v("例如本地启动一个 "),e("code",[t._v("etcd")]),t._v(" 服务实例后，可以用如下命令进行查看。")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ etcdctl member list\n422a74f03b622fef, started, node1, http://172.16.238.100:2380, http://172.16.238.100:23\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);