(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e1ca77c"],{"0717":function(t){t.exports=JSON.parse('{"Commercial Partners":[]}')},1145:function(t){t.exports=JSON.parse('{"Sponsors":[{"name":"IUSG","link":"","img":"CMS.png"},{"name":"BCDA","link":"","img":"CMS.png"},{"name":"CFACTS","link":"","img":"CMS.png"},{"name":"T-MSIS","link":"","img":"CMS.png"},{"name":"IDM","link":"","img":"CMS.png"},{"name":"MACFIN","link":"","img":"CMS.png"},{"name":"Lewin Group","link":"","img":"CMS.png"},{"name":"ACT","link":"","img":"CMS.png"}]}')},"1a8c":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",{staticClass:"pa-0 pt-5"},[n("v-container",{staticClass:"px-0 pt-5 mt-5",attrs:{fluid:""}},[n("v-row",{staticClass:"py-3",class:1==this.$vuetify.theme.dark?"black":"grey lighten-4",attrs:{justify:"center",align:"center"}},[n("v-col",{staticClass:"pt-3 bottom-space",attrs:{md:"12",lg:"10",xs:"12"}},[n("partners")],1)],1)],1)],1)},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",{staticClass:"mb-0",attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"mb-0",attrs:{cols:"12",md:"12",lg:"12",sm:"12"}},[n("p",{staticClass:"google-font mb-1",staticStyle:{"font-weight":"350",color:"#1a73e8","font-size":"200%"}},[n("b",[t._v("\n          The CMS SAF Community\n        ")])])])],1),n("v-container",{attrs:{fluid:""}},t._l(t.partnerData,(function(e,r){return n("v-row",{key:r,class:t.color_mode,attrs:{justify:"center",align:"center"}},[n("v-slide-group",{staticClass:"pa-2",attrs:{"show-arrows":""}},t._l(e,(function(r,s){return n("v-col",{key:s},[n("v-card",{staticClass:"ma-4",attrs:{elevation:"4",height:"180",width:"200",href:e.length>0?r.link:null,target:"_blank","text-center":""}},[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){e.on;return[n("v-img",{staticClass:"white",attrs:{src:t.getImgUrl(r.img),"lazy-src":t.getImgUrl(r.img),height:"100",width:"200",contain:""}})]}}],null,!0)}),n("v-card-title",{staticClass:"justify-center align-center"},[t._v(t._s(r.name))])],1)],1)})),1)],1)})),1),n("br")],1)},o=[],a=n("1145"),c=n("0717"),l=n("d67c"),f={data:function(){return{partnerData:a,commercialpart:c,communityData:l,showArrows:!0}},methods:{getImgUrl:function(t){return n("78ea")("./"+t)}},computed:{color_mode:function(){return this.$vuetify.theme.dark?"darkModeContainer":"lightModeContainer"}}},h=f,u=(n("7ee6"),n("2877")),p=n("6544"),d=n.n(p),v=n("b0af"),g=n("99d9"),m=n("62ad"),w=n("a523"),O=n("adda"),C=n("0fd9"),y=n("7efd"),b=n("3a2f"),x=Object(u["a"])(h,i,o,!1,null,"115525e8",null),$=x.exports;d()(x,{VCard:v["a"],VCardTitle:g["c"],VCol:m["a"],VContainer:w["a"],VImg:O["a"],VRow:C["a"],VSlideGroup:y["b"],VTooltip:b["a"]});var k={components:{partners:$},created:function(){var t=document.querySelector("meta[name=theme-color]");this.$vuetify.theme.dark?t.setAttribute("content","#212121"):t.setAttribute("content","#0277bd")}},_=k,S=n("a75b"),M=Object(u["a"])(_,r,s,!1,null,null,null);e["default"]=M.exports;d()(M,{VCol:m["a"],VContainer:w["a"],VContent:S["a"],VRow:C["a"]})},"1d2e":function(t,e,n){},3982:function(t,e,n){t.exports=n.p+"img/CMS.9efce66e.png"},"608c":function(t,e,n){},"78ea":function(t,e,n){var r={"./CMS.png":"3982"};function s(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=i,t.exports=s,s.id="78ea"},"7ee6":function(t,e,n){"use strict";var r=n("1d2e"),s=n.n(r);s.a},"7efd":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));n("8e6e"),n("ac6a"),n("456d");var r=n("bd86"),s=(n("c5f6"),n("608c"),n("9d26")),i=n("0789"),o=n("604c"),a=n("dc22"),c=n("c3f0"),l=n("58df");function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(n,!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u=Object(l["a"])(o["a"]).extend({name:"base-slide-group",directives:{Resize:a["a"],Touch:c["a"]},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},mobileBreakPoint:{type:[Number,String],default:1264,validator:function(t){return!isNaN(parseInt(t))}},prevIcon:{type:String,default:"$prev"},showArrows:Boolean},data:function(){return{internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return h({},o["a"].options.computed.classes.call(this),{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){return(this.showArrows||!this.isMobile)&&this.isOverflowing},hasNext:function(){if(!this.hasAffixes)return!1;var t=this.widths,e=t.content,n=t.wrapper;return e>Math.abs(this.scrollOffset)+n},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset},isMobile:function(){return this.$vuetify.breakpoint.width<this.mobileBreakPoint}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(t){this.$refs.content.style.transform="translateX(".concat(-t,"px)")}},beforeUpdate:function(){this.internalItemsLength=(this.$children||[]).length},updated:function(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext:function(){var t=this;if(!this.hasAffixes)return null;var e=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return t.onAffixClick("next")}},key:"next"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(t){var e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");var n="".concat(t[0].toUpperCase()).concat(t.slice(1)),r=this["has".concat(n)];return this.showArrows||r?this.$createElement(s["a"],{props:{disabled:!r}},this["".concat(e,"Icon")]):null},genPrev:function(){var t=this,e=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return t.onAffixClick("prev")}},key:"prev"},[e])},genTransition:function(t){return this.$createElement(i["c"],[this.genIcon(t)])},genWrapper:function(){var t=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(e){return t.overflowCheck(e,t.onTouchStart)},move:function(e){return t.overflowCheck(e,t.onTouchMove)},end:function(e){return t.overflowCheck(e,t.onTouchEnd)}}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset:function(t,e,n,r){var s=n?-1:1,i=s*r+("prev"===t?-1:1)*e.wrapper;return s*Math.max(Math.min(i,e.content-e.wrapper),0)},onAffixClick:function(t){this.$emit("click:".concat(t)),this.scrollTo(t)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(t){var e=this.$refs.content;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove:function(t){this.scrollOffset=this.startX-t.touchmoveX},onTouchEnd:function(){var t=this.$refs,e=t.content,n=t.wrapper,r=e.clientWidth-n.clientWidth;e.style.setProperty("transition",null),e.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-r&&(this.scrollOffset=-r):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=r&&(this.scrollOffset=r)},overflowCheck:function(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView:function(){this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset:function(t,e,n,r){var s=t.clientWidth,i=n?e.content-t.offsetLeft-s:t.offsetLeft;n&&(r=-r);var o=e.wrapper+r,a=s+i,c=.4*s;return i<r?r=Math.max(i-c,0):o<a&&(r=Math.min(r-(o-a-c),e.content-e.wrapper)),n?-r:r},calculateCenteredOffset:function(t,e,n){var r=t.offsetLeft,s=t.clientWidth;if(n){var i=e.content-r-s/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,i))}var o=r+s/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,o))},scrollTo:function(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var t=this;window.requestAnimationFrame((function(){var e=t.$refs,n=e.content,r=e.wrapper;t.widths={content:n?n.clientWidth:0,wrapper:r?r.clientWidth:0},t.isOverflowing=t.widths.wrapper<t.widths.content,t.scrollIntoView()}))}},render:function(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});e["b"]=u.extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}})}}]);