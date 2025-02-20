(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{198:function(t,e,n){},205:function(t,e,n){"use strict";var a=n(0).a.extend({name:"MyTransition",props:{delay:{type:Number,default:0},duration:{type:Number,default:.25}},methods:{setStyle(t){t.style.transition=`transform ${this.duration}s ease-in-out ${this.delay}s, opacity ${this.duration}s ease-in-out ${this.delay}s`,t.style.transform="translateY(-20px)",t.style.opacity="0"},unsetStyle(t){t.style.transform="translateY(0)",t.style.opacity="1"}}}),r=(n(233),n(1)),s=Object(r.a)(a,(function(){var t=this._self._c;this._self._setupProxy;return t("transition",{attrs:{name:"drop",appear:""},on:{appear:this.setStyle,"after-appear":this.unsetStyle,enter:this.setStyle,"after-enter":this.unsetStyle,"before-leave":this.setStyle}},[this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},233:function(t,e,n){"use strict";n(198)},237:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(206),r=n(229);const s=(t,e)=>t&&"object"==typeof t.config?Object.keys(t.config).filter(t=>e.startsWith(t)).sort((t,e)=>e.length-t.length):[],o=r.a.extend({data:()=>({encryptPasswordConfig:{}}),computed:{pathEncryptMatchKeys(){return s(this.encryptOptions,this.$route.path)},isPathEncrypted(){if(0===this.pathEncryptMatchKeys.length)return!1;const{config:t}=this.encryptOptions;return this.pathEncryptMatchKeys.every(e=>{const n=t[e],r="string"==typeof n?[n]:n;return!this.encryptPasswordConfig[e]||r.every(t=>!Object(a.a)(this.encryptPasswordConfig[e],t))})}},mounted(){const t=localStorage.getItem("encryptConfig");t&&(this.encryptPasswordConfig=JSON.parse(t))},methods:{checkPathPassword(t){const{config:e}=this.$themeConfig.encrypt;for(const n of this.pathEncryptMatchKeys){const r=e[n];if(("string"==typeof r?[r]:r).filter(e=>Object(a.a)(t,e))){this.$set(this.encryptPasswordConfig,n,t),localStorage.setItem("encryptConfig",JSON.stringify(this.encryptPasswordConfig));break}}}}})},299:function(t,e,n){},300:function(t,e,n){},301:function(t,e,n){},302:function(t,e,n){},303:function(t,e,n){},304:function(t,e,n){},305:function(t,e,n){},306:function(t,e,n){},402:function(t,e,n){"use strict";n(299)},403:function(t,e,n){"use strict";n(300)},404:function(t,e,n){"use strict";n(301)},405:function(t,e,n){"use strict";n(302)},406:function(t,e,n){"use strict";n(303)},407:function(t,e,n){"use strict";n(304)},408:function(t,e,n){"use strict";n(305)},409:function(t,e,n){"use strict";n(306)},447:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(2),s=n(234),o=n(205),i=n(188);var l=a.a.extend({name:"Home",components:{MyTransition:o.a,NavLink:i.a},computed:{actionLinks(){const{action:t}=this.$frontmatter;return Array.isArray(t)?t:[t]}},methods:{navigate(t){((t,e,n)=>{if(t)if(t.startsWith("/"))n.path!==t&&e.push(t);else if(t.startsWith("http://")||t.startsWith("https://")||t.startsWith("mailto:"))window&&window.open(t);else{const a=n.path.slice(0,n.path.lastIndexOf("/"));e.push(`${a}/${encodeURI(t)}`)}})(t,this.$router,this.$route)}}}),c=(n(402),n(1)),u=Object(c.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.$frontmatter.heroText?"main-title":null}},[e("header",{staticClass:"hero"},[e("MyTransition",[t.$frontmatter.heroImage?e("img",{key:"light",class:{light:Boolean(t.$frontmatter.darkHeroImage)},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:t.$frontmatter.heroAlt||"HomeLogo"}}):t._e()]),t._v(" "),e("MyTransition",[t.$frontmatter.darkHeroImage?e("img",{key:"dark",staticClass:"dark",attrs:{src:t.$withBase(t.$frontmatter.darkHeroImage),alt:t.$frontmatter.heroAlt||"HomeLogo"}}):t._e()]),t._v(" "),e("div",{staticClass:"hero-info"},[e("MyTransition",{attrs:{delay:.04}},[!1!==t.$frontmatter.heroText?e("h1",{attrs:{id:"main-title"},domProps:{textContent:t._s(t.$frontmatter.heroText||t.$title||"Hello")}}):t._e()]),t._v(" "),e("MyTransition",{attrs:{delay:.08}},[e("p",{staticClass:"description",domProps:{textContent:t._s(t.$frontmatter.tagline||t.$description||"Welcome to your VuePress site")}})]),t._v(" "),e("MyTransition",{attrs:{delay:.12}},[t.$frontmatter.action?e("p",{staticClass:"action"},t._l(t.actionLinks,(function(t){return e("NavLink",{key:t.text,staticClass:"action-button",class:t.type||"",attrs:{item:t}})})),1):t._e()])],1)],1),t._v(" "),e("MyTransition",{attrs:{delay:.16}},[t.$frontmatter.features&&t.$frontmatter.features.length?e("div",{staticClass:"features"},[t._l(t.$frontmatter.features,(function(n,a){return[n.link?e("div",{key:a,staticClass:"feature link",class:"feature"+a%9,attrs:{tabindex:"0",role:"navigation"},on:{click:function(e){return t.navigate(n.link)}}},[e("h2",[t._v(t._s(n.title))]),t._v(" "),e("p",[t._v(t._s(n.details))])]):e("div",{key:a,staticClass:"feature",class:"feature"+a%9},[e("h2",[t._v(t._s(n.title))]),t._v(" "),e("p",[t._v(t._s(n.details))])])]}))],2):t._e()]),t._v(" "),e("MyTransition",{attrs:{delay:.24}},[e("Content",{staticClass:"theme-default-content custom"})],1)],1)}),[],!1,null,null,null).exports,p=n(183);const h=(t,{text:e,link:n,level:a})=>t("RouterLink",{props:{to:n,activeClass:"",exactActiveClass:""},class:{"anchor-link":!0,[a?"heading"+a:""]:a}},[t("div",{},[e])]),f=(t,{children:e,route:n})=>t("ul",{class:"anchor-list"},e.map(e=>{const a=Object(p.e)(n,`${n.path}#${e.slug}`);return t("li",{class:{anchor:!0,active:a}},[h(t,{text:e.title,link:`${n.path}#${e.slug}`,level:e.level})])}));var d=a.a.extend({name:"Anchor",functional:!0,props:{items:{type:Array,default:()=>[]}},render:(t,{props:e,parent:{$page:n,$route:a}})=>t("div",{attrs:{class:"anchor-place-holder"}},[t("aside",{attrs:{id:"anchor"}},[t("div",{class:"anchor-wrapper"},[e.items.length?f(t,{children:e.items,route:a}):n.headers?f(t,{children:n.headers,route:a}):null])])])}),m=(n(403),Object(c.a)(d,void 0,void 0,!1,null,null,null).exports),g=Object(c.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"icon author-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,v=n(26),y=a.a.extend({name:"AuthorInfo",components:{AuthorIcon:g},props:{defaultAuthor:{type:String,default:""}},computed:{author(){const{author:t}=this.$frontmatter;return t||(!1===t?"":this.defaultAuthor)},hint(){return v.b[this.$localePath||"/"].author}}}),_=Object(c.a)(y,(function(){var t=this._self._c;this._self._setupProxy;return this.author?t("span",{attrs:{"aria-label":this.hint,"data-balloon-pos":"down"}},[t("AuthorIcon"),this._v(" "),t("span",{attrs:{property:"author"},domProps:{textContent:this._s(this.author)}})],1):this._e()}),[],!1,null,null,null).exports;const b=t=>`${t.charAt(0).toUpperCase()}${t.slice(1)}`,$={"en-US":"/en/","zh-CN":"/zh/","zh-TW":"/zh-tw/","de-AT":"/de/","vi-VN":"/vi/","ru-RU":"/ru/","uk-UA":"/uk/","pt-BR":"/br/"},C=Object.keys($);Object.fromEntries(C.map(t=>[$[t],t]));var x=Object(c.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"icon category-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zm-.854 446.486H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zm446.371-446.486h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zm136.293 813.51H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,w=a.a.extend({name:"CategoryInfo",components:{CategoryIcon:x},props:{category:{type:String,default:""},categoryPath:{type:String,default:""}},computed:{name(){if(this.category)return b(this.category);const{category:t}=this.$frontmatter;return t?b(t):""},path(){return this.categoryPath.replace(/\$category/g,decodeURI(this.name))},hint(){return v.b[this.$localePath||"/"].category}},methods:{navigate(){this.$route.path!==this.path&&this.$router.push(this.path)}}}),P=(n(404),Object(c.a)(w,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.name?e("span",{staticClass:"category-info",class:{enable:t.path},attrs:{role:t.path?"navigation":"","aria-label":t.hint,"data-balloon-pos":"down"},on:{click:t.navigate}},[e("CategoryIcon"),t._v(" "),e("span",{attrs:{property:"articleSection"},domProps:{textContent:t._s(t.name)}})],1):t._e()}),[],!1,null,null,null).exports),k=Object(c.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"icon timer-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,I=a.a.extend({name:"ReadingTimeInfo",components:{TimerIcon:k},computed:{readingTime(){return`PT${Math.max(Math.round(this.$page.readingTime.minutes),1)}M`},text(){const{less1Minute:t,time:e}=v.c[this.$localePath||"/"];return this.$page.readingTime.minutes<1?t:e.replace("$time",Math.round(this.$page.readingTime.minutes).toString())},hint(){return v.b[this.$localePath||"/"].readingTime}}}),T=Object(c.a)(I,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.text?e("span",{staticClass:"reading-time-info",attrs:{"aria-label":t.hint,"data-balloon-pos":"down"}},[e("TimerIcon"),t._v(" "),e("span",{domProps:{textContent:t._s(t.text)}}),t._v(" "),e("meta",{attrs:{property:"timeRequired",content:t.readingTime}})],1):t._e()}),[],!1,null,null,null).exports,M=Object(c.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"icon tag-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M939.902 458.563 910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 0 0 0 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,O=a.a.extend({name:"TagInfo",components:{TagIcon:M},props:{tags:{type:Array,default:()=>[]},tagPath:{type:String,default:""}},computed:{items(){if(0!==this.tags.length)return this.tags;const{tags:t,tag:e=t}=this.$frontmatter;return"string"==typeof e?[b(e)]:Array.isArray(e)?e.map(t=>b(t)):[]},clickable(){return Boolean(this.tagPath)},hint(){return v.b[this.$localePath||"/"].tag}},methods:{navigate(t){const e=this.tagPath.replace(/\$tag/g,decodeURI(t));this.$route.path!==e&&this.$router.push(e)}}}),j=(n(405),Object(c.a)(O,(function(){var t=this,e=t._self._c;t._self._setupProxy;return 0!==t.items.length?e("span",{attrs:{"aria-label":t.hint,"data-balloon-pos":"down"}},[e("TagIcon"),t._v(" "),e("ul",{staticClass:"tags-wrapper"},t._l(t.items,(function(n,a){return e("li",{key:n,staticClass:"tag",class:{clickable:t.clickable,["tag"+a%9]:!0},on:{click:function(e){return t.navigate(n)}}},[e("span",{attrs:{role:t.clickable?"navigation":""},domProps:{textContent:t._s(n)}})])})),0),t._v(" "),e("meta",{attrs:{property:"keywords",content:t.items.join(",")}})],1):t._e()}),[],!1,null,null,null).exports),S=Object(c.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"icon calendar-icon",attrs:{viewBox:"0 0 1030 1024",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 0 1-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 0 1-33.473-33.473V143.657H180.6A134.314 134.314 0 0 0 46.66 277.595v535.756A134.314 134.314 0 0 0 180.6 947.289h669.74a134.36 134.36 0 0 0 133.94-133.938V277.595a134.314 134.314 0 0 0-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 0 1-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 0 1-33.472 33.473z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,A=a.a.extend({name:"TimeInfo",components:{CalendarIcon:S},computed:{time(){const{date:t,time:e=t}=this.$frontmatter;if("string"==typeof e){if(-1!==e.indexOf("T")){const[t,n]=e.split("T"),[a]=n.split(".");return`${t} ${"00:00:00"===a?"":a}`}return e}const{createTimeStamp:n}=this.$page;if(n){const t=new Date(n);return`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`}return""},hint(){return v.b[this.$localePath||"/"].date}}}),L=Object(c.a)(A,(function(){var t=this._self._c;this._self._setupProxy;return this.time?t("span",{staticClass:"time-info",attrs:{"aria-label":this.hint,"data-balloon-pos":"down"}},[t("CalendarIcon"),this._v(" "),t("span",{attrs:{property:"datePublished"},domProps:{textContent:this._s(this.time)}})],1):this._e()}),[],!1,null,null,null).exports,B=Object(c.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"icon eye-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 0 0-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,z=Object(c.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"icon eye-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,N=a.a.extend({name:"VisitorInfo",components:{EyeIcon:B,FireIcon:z},props:{visitor:{type:Boolean,default:!1}},data:()=>({count:0}),computed:{visitorID(){const{base:t}=this.$site;return t?`${t.slice(0,t.length-1)}${this.$page.path}`:this.$page.path},hint(){return v.b[this.$localePath||"/"].views}},watch:{$route(t,e){t.path!==e.path&&setTimeout(()=>{this.getCount()},500)}},mounted(){setTimeout(()=>{this.getCount()},1500)},methods:{getCount(){const t=document.querySelector(".leancloud_visitors .leancloud-visitors-count");if(t){const e=t.textContent;e&&!isNaN(Number(e))?this.count=Number(e):setTimeout(()=>{this.getCount()},500)}}}}),H=Object(c.a)(N,(function(){var t=this._self._c;this._self._setupProxy;return t("span",{staticClass:"visitor-info",attrs:{"aria-label":this.hint,"data-balloon-pos":"down"}},[this.count<1e3?t("EyeIcon"):t("FireIcon"),this._v(" "),t("span",{staticClass:"leancloud_visitors waline-visitor-count",attrs:{id:this.visitorID,"data-flag-title":this.$page.title}},[t("span",{staticClass:"leancloud-visitors-count"},[this._v("...")])])],1)}),[],!1,null,null,null).exports,E=Object(c.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"icon word-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M518.217 432.64V73.143A73.143 73.143 0 0 1 603.43 1.097a512 512 0 0 1 419.474 419.474 73.143 73.143 0 0 1-72.046 85.212H591.36a73.143 73.143 0 0 1-73.143-73.143z",fill:"currentColor"}}),this._v(" "),t("path",{attrs:{d:"M493.714 566.857h340.297a73.143 73.143 0 0 1 73.143 85.577A457.143 457.143 0 1 1 371.566 117.76a73.143 73.143 0 0 1 85.577 73.143v339.383a36.571 36.571 0 0 0 36.571 36.571z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,V=a.a.extend({name:"ReadTimeInfo",components:{WordIcon:E},computed:{words(){return v.c[this.$localePath||"/"].word.replace("$word",this.$page.readingTime.words.toString())},hint(){return v.b[this.$localePath||"/"].words}}}),R=Object(c.a)(V,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.words?e("span",{staticClass:"words-info",attrs:{"aria-label":t.hint,"data-balloon-pos":"down"}},[e("WordIcon"),t._v(" "),e("span",{domProps:{textContent:t._s(t.words)}}),t._v(" "),e("meta",{attrs:{property:"wordCount",content:t.$page.readingTime.words}})],1):t._e()}),[],!1,null,null,null).exports,D=(n(62),a.a.extend({name:"PageInfo",components:{AuthorInfo:_,CategoryInfo:P,ReadingTimeInfo:T,TagInfo:j,TimeInfo:L,VisitorInfo:H,WordInfo:R},props:{titleIcon:{type:Boolean,default:!0},titleIconPrefix:{type:String,default:""},items:{type:Array,default:()=>["author","visitor","time","category","tag","reading-time"]},defaultAuthor:{type:String,default:""},categoryPath:{type:String,default:""},tagPath:{type:String,default:""},visitor:{type:Boolean,default:!1}},computed:{config(){const t=this.$page.frontmatter.pageInfo;return!1!==t&&(Array.isArray(t)?t:this.items)},isOriginal(){return!0===this.$frontmatter.original},originText(){return v.b[this.$localePath||"/"].origin}}})),W=(n(406),Object(c.a)(D,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"page-title",attrs:{vocab:"https://schema.org/",typeof:"Article"}},[e("h1",[t.titleIcon&&t.$frontmatter.icon?e("i",{class:`iconfont ${t.titleIconPrefix||""}${t.$frontmatter.icon}`}):t._e(),t._v(" "),e("span",{attrs:{property:"headline"}},[t._v(t._s(t.$page.title))])]),t._v(" "),t.config?e("div",{staticClass:"page-info"},[t.isOriginal?e("span",{staticClass:"origin",domProps:{textContent:t._s(t.originText)}}):t._e(),t._v(" "),t._l(t.config,(function(n){return e(n+"-info",t._b({key:t.$route.path+n,tag:"component"},"component",{defaultAuthor:t.defaultAuthor,categoryPath:t.categoryPath,tagPath:t.tagPath,visitor:t.visitor},!1))}))],2):t._e(),t._v(" "),t.$frontmatter.image?e("meta",{attrs:{property:"image",content:t.$withBase(t.$frontmatter.image)}}):t._e(),t._v(" "),e("hr")])}),[],!1,null,null,null).exports),U=Object(c.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"icon edit-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M117.953 696.992 64.306 959.696l265.931-49.336 450.204-452.505-212.284-213.376-450.204 452.513zm496.384-296.326L219.039 797.993l-46.108-46.34L568.233 354.33l46.104 46.335zm345.357-122.99-114.45 115.04-212.288-213.377 114.45-115.035 212.288 213.371zm0 0",fill:"currentColor"}})])}),[],!1,null,null,null).exports,J=a.a.extend({name:"PageMeta",components:{EditIcon:U},computed:{locales(){return this.$themeLocaleConfig.meta||{contributor:"Contributors",editLink:"Edit this page",updateTime:"Last Updated"}},contributors(){return!1===this.$page.frontmatter.contributor||!1===this.$themeConfig.contributor&&!this.$page.frontmatter.contributor?[]:this.$page.contributors||[]},contributorsText(){return this.locales.contributor},updateTime(){return!1===this.$page.frontmatter.updateTime||!1===this.$themeConfig.updateTime&&!this.$page.frontmatter.updateTime?"":this.$page.updateTime||""},updateTimeText(){return this.locales.updateTime},editLink(){const t=this.$page.frontmatter.editLink||!1!==this.$themeConfig.editLinks&&!1!==this.$page.frontmatter.editLink,{repo:e,docsRepo:n}=this.$themeConfig;return!(!t||!e&&!n||!this.$page.relativePath)&&this.createEditLink()},editLinkText(){return this.locales.editLink}},methods:{createEditLink(){const{repo:t="",docsRepo:e=t,docsDir:n="",docsBranch:a="main"}=this.$themeConfig;if(/bitbucket.org/u.test(e))return`${e.replace(p.a,"")}/src/${a}/${n?n.replace(p.a,"")+"/":""}${this.$page.relativePath}?mode=edit&spa=0&at=${a}&fileviewer=file-view-default`;if(/gitlab.com/u.test(e))return`${e.replace(p.a,"")}/-/edit/${a}/${n?n.replace(p.a,"")+"/":""}${this.$page.relativePath}`;return`${(p.j.test(e)?e:"https://github.com/"+e).replace(p.a,"")}/edit/${a}/${n?n.replace(p.a,"")+"/":""}${this.$page.relativePath}`}}}),K=(n(407),Object(c.a)(J,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("footer",{staticClass:"page-meta"},[t.editLink?e("div",{staticClass:"edit-link"},[e("EditIcon"),t._v(" "),e("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))])],1):t._e(),t._v(" "),t.updateTime?e("div",{staticClass:"meta-item update-time"},[e("span",{staticClass:"label"},[t._v(t._s(t.updateTimeText)+":")]),t._v(" "),e("span",{staticClass:"info"},[t._v(t._s(t.updateTime))])]):t._e(),t._v(" "),t.contributors&&t.contributors.length?e("div",{staticClass:"meta-item contributors"},[e("span",{staticClass:"label"},[t._v(t._s(t.contributorsText)+": ")]),t._v(" "),e("span",{staticClass:"info"},[t._l(t.contributors,(function(n,a){return[e("span",{key:a,staticClass:"contributor",attrs:{title:"email: "+n.email}},[t._v("\n          "+t._s(n.name)+"\n        ")]),t._v(" "),a!==t.contributors.length-1?[t._v(", ")]:t._e()]}))],2)]):t._e()])}),[],!1,null,null,null).exports),F=Object(c.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"icon next-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M906.772 512c0 4.772-2.211 9.267-5.99 12.175L524.257 813.66a15.37 15.37 0 0 1-18.616.092 15.368 15.368 0 0 1-5.038-17.91l75.714-191.672h-443.73c-8.488 0-15.36-6.881-15.36-15.36v-153.6c0-8.489 6.872-15.36 15.36-15.36h443.73l-75.714-191.682a15.358 15.358 0 0 1 5.048-17.91c5.51-4.158 13.128-4.137 18.606.092l376.525 289.485a15.323 15.323 0 0 1 5.99 12.165z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,Y=Object(c.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"icon prev-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M906.783 588.79c-.02 8.499-6.882 15.36-15.38 15.37l-443.7-.01 75.704 191.682c2.52 6.42.482 13.763-5.038 17.91-5.52 4.168-13.138 4.147-18.616-.092L123.228 524.175a15.362 15.362 0 0 1-6-12.165c0-4.782 2.222-9.277 6-12.185L499.753 210.35a15.388 15.388 0 0 1 9.38-3.195c3.236 0 6.502 1.034 9.236 3.103 5.52 4.147 7.578 11.49 5.038 17.91L447.683 419.84l443.72-.01c8.498.01 15.36 6.881 15.36 15.36l.02 153.6z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,q=n(238);const G=(t,e)=>{for(const n of t)"group"===n.type?G(n.children||[],e):e.push(n)},Q=(t,{themeConfig:e,page:n,route:a,site:r,sidebarItems:s})=>{const o=e[t+"Links"],i=n.frontmatter[t];return!1!==o&&!1!==i&&("string"==typeof i?Object(q.c)(r.pages,Object(p.k)(i,a.path)):((t,e,n)=>{const a=[];G(e,a);for(let e=0;e<a.length;e++){const r=a[e];if("page"===r.type&&r.path===decodeURIComponent(t.path))return a[e+n]}return!1})(n,s,"prev"===t?-1:1))};var X=a.a.extend({name:"PageNav",components:{NextIcon:F,PrevIcon:Y},props:{sidebarItems:{type:Array,default:()=>[]}},computed:{prev(){return Q("prev",{sidebarItems:this.sidebarItems,themeConfig:this.$themeConfig,page:this.$page,route:this.$route,site:this.$site})},next(){return Q("next",{sidebarItems:this.sidebarItems,themeConfig:this.$themeConfig,page:this.$page,route:this.$route,site:this.$site})}}}),Z=(n(408),Object(c.a)(X,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.prev||t.next?e("div",{staticClass:"page-nav"},[e("p",{staticClass:"inner"},[t.prev?e("span",{staticClass:"prev"},["external"===t.prev.type?e("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[e("PrevIcon"),t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n        "),e("OutboundLink")],1):e("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[e("PrevIcon"),t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")],1)],1):t._e(),t._v(" "),t.next?e("span",{staticClass:"next"},["external"===t.next.type?e("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n        "),e("OutboundLink"),t._v(" "),e("NextIcon")],1):e("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n        "),e("NextIcon")],1)],1):t._e()])]):t._e()}),[],!1,null,null,null).exports),tt=n(236),et=n(237).a.extend({name:"Page",components:{Anchor:m,MyTransition:o.a,PageInfo:W,PageMeta:K,PageNav:Z,Password:tt.a},props:{sidebarItems:{type:Array,default:()=>[]},headers:{type:Array,default:()=>[]}},data:()=>({password:""}),computed:{pagePassword(){const{password:t}=this.$frontmatter;return"number"==typeof t?t.toString():"string"==typeof t?t:""},pageDescrypted(){return this.password===this.pagePassword},pageInfoProps(){return{titleIcon:!0,titleIconPrefix:this.$themeConfig.iconPrefix,...this.$themeConfig.pageInfo?{items:this.$themeConfig.pageInfo}:{},categoryPath:"/category/$category/",tagPath:"/tag/$tag/",defaultAuthor:this.$themeConfig.author||""}}}}),nt=(n(409),Object(c.a)(et,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("main",{staticClass:"page"},[e("MyTransition",[e("BreadCrumb",{key:t.$route.path,attrs:{show:!1!==t.$themeConfig.breadcrumb,icon:!1!==t.$themeConfig.breadcrumbIcon,"icon-prefix":t.$themeConfig.iconPrefix}})],1),t._v(" "),t._t("top"),t._v(" "),e("MyTransition",{attrs:{delay:.04}},[e("PageInfo",t._b({key:t.$route.path},"PageInfo",t.pageInfoProps,!1))],1),t._v(" "),t.pagePassword&&!t.pageDescrypted?e("MyTransition",{attrs:{delay:.08}},[e("Password",{key:t.$route.path,attrs:{page:!0},on:{"password-verify":function(e){t.password=e}}})],1):t.isPathEncrypted?e("MyTransition",{attrs:{delay:.08}},[e("Password",{key:t.$route.path,attrs:{page:!0},on:{"password-verify":t.checkPathPassword}})],1):[e("MyTransition",{attrs:{delay:.12}},[e("Anchor",{key:t.$route.path})],1),t._v(" "),!t.pagePassword||t.pageDescrypted?t._t("content-top"):t._e(),t._v(" "),e("MyTransition",{directives:[{name:"show",rawName:"v-show",value:!t.pagePassword||t.pageDescrypted,expression:"!pagePassword || pageDescrypted"}],attrs:{delay:.08}},[e("Content",{key:t.$route.path,staticClass:"theme-default-content"})],1),t._v(" "),!t.pagePassword||t.pageDescrypted?t._t("content-bottom"):t._e(),t._v(" "),e("MyTransition",{attrs:{delay:.12}},[e("PageMeta",{key:t.$route.path})],1),t._v(" "),e("MyTransition",{attrs:{delay:.14}},[e("PageNav",t._b({key:t.$route.path},"PageNav",{sidebarItems:t.sidebarItems},!1))],1),t._v(" "),e("MyTransition",{attrs:{delay:.16}},[t.$themeConfig.comment?e("CommentService",{key:t.$route.path}):t._e()],1)],t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),at=a.a.extend({name:"Layout",components:{BlogInfo:r.a,BlogHome:r.a,Common:s.a,ContentBottom:r.a,ContentTop:r.a,Home:u,NavbarCenter:r.a,NavbarEnd:r.a,NavbarStart:r.a,Page:nt,PageBottom:r.a,PageTop:r.a,SidebarBottom:r.a,SidebarCenter:r.a,SidebarTop:r.a}}),rt=Object(c.a)(at,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("Common",{attrs:{sidebar:!0!==t.$frontmatter.blog},scopedSlots:t._u([{key:"navbar-start",fn:function(){return[t._t("navbar-start",(function(){return[e("NavbarStart"),t._v(" "),e("Content",{attrs:{"slot-key":"navbar-start"}})]}))]},proxy:!0},{key:"navbar-center",fn:function(){return[t._t("navbar-center",(function(){return[e("NavbarCenter"),t._v(" "),e("Content",{attrs:{"slot-key":"navbar-center"}})]}))]},proxy:!0},{key:"navbar-end",fn:function(){return[t._t("navbar-end",(function(){return[e("NavbarEnd"),t._v(" "),e("Content",{attrs:{"slot-key":"navbar-end"}})]}))]},proxy:!0},{key:"sidebar-top",fn:function(){return[t._t("sidebar-top",(function(){return[e("SidebarTop"),t._v(" "),e("Content",{attrs:{"slot-key":"sidebar-top"}})]}))]},proxy:!0},{key:"sidebar-center",fn:function(){return[t._t("sidebar-center",(function(){return[e("SidebarCenter"),t._v(" "),e("Content",{attrs:{"slot-key":"sidebar-center"}})]}))]},proxy:!0},{key:"sidebar-bottom",fn:function(){return[t._t("sidebar-bottom",(function(){return[e("SidebarBottom"),t._v(" "),e("Content",{attrs:{"slot-key":"sidebar-bottom"}})]}))]},proxy:!0},{key:"default",fn:function(n){return[t.$frontmatter.blog&&!1!==t.$themeConfig.blog?e("BlogHome"):t.$frontmatter.home?e("Home"):e("Page",{attrs:{headers:n.headers,"sidebar-items":n.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top",(function(){return[e("PageTop"),t._v(" "),e("Content",{attrs:{"slot-key":"page-top"}})]}))]},proxy:!0},{key:"content-top",fn:function(){return[t._t("content-top",(function(){return[e("ContentTop"),t._v(" "),e("Content",{attrs:{"slot-key":"content-top"}})]}))]},proxy:!0},{key:"content-bottom",fn:function(){return[t._t("content-bottom",(function(){return[e("ContentBottom"),t._v(" "),e("Content",{attrs:{"slot-key":"content-bottom"}})]}))]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom",(function(){return[e("PageBottom"),t._v(" "),e("Content",{attrs:{"slot-key":"page-bottom"}})]}))]},proxy:!0}],null,!0)})]}}],null,!0)})}),[],!1,null,null,null);e.default=rt.exports}}]);