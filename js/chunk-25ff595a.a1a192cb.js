(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25ff595a"],{"169a":function(t,e,a){"use strict";a("8e6e"),a("ac6a"),a("456d"),a("6762"),a("2fdb");var n=a("bd86"),i=(a("c5f6"),a("368e"),a("480e")),s=a("4ad4"),o=a("b848"),r=a("75eb"),c=a("e707"),l=a("e4d3"),d=a("21be"),u=a("f2e7"),m=a("a293"),v=a("58df"),h=a("d9bd"),f=a("80d2");function g(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?g(a,!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):g(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var b=Object(v["a"])(s["a"],o["a"],r["a"],c["a"],l["a"],d["a"],u["a"]);e["a"]=b.extend({name:"v-dialog",directives:{ClickOutside:m["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var t;return t={},Object(n["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(n["a"])(t,"v-dialog--active",this.isActive),Object(n["a"])(t,"v-dialog--persistent",this.persistent),Object(n["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(n["a"])(t,"v-dialog--scrollable",this.scrollable),Object(n["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(h["d"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):c["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$refs.content.focus(),t.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===f["v"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var a=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');a.length&&a[0].focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(i["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:p({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:this.onClickOutside,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=p({},t.style,{maxWidth:"none"===this.maxWidth?void 0:Object(f["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(f["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"368e":function(t,e,a){},"39c6":function(t,e,a){"use strict";var n=a("b9ac"),i=a.n(n);i.a},4805:function(t,e,a){t.exports=a.p+"img/tf.d192dc79.svg"},"480e":function(t,e,a){"use strict";a("7514");var n=a("7560");e["a"]=n["a"].extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:n["a"].options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find((function(t){return!t.isComment&&" "!==t.text}))}})},"5c35":function(t,e,a){t.exports=a.p+"img/polymer.f0624356.svg"},8350:function(t,e,a){t.exports=a.p+"img/angular.48ae79d9.svg"},"8d14":function(t,e,a){t.exports=a.p+"img/gcp.a711d8f7.svg"},"8fc8":function(t,e,a){var n={"./android.svg":"d2c1","./angular.svg":"8350","./aog.png":"0f8b","./firebase.svg":"f558","./gcp.svg":"8d14","./notFound.png":"1d36","./polymer.svg":"5c35","./tf.svg":"4805","./whatWeDo.png":"4c9a"};function i(t){var e=s(t);return a(e)}function s(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=s,t.exports=i,i.id="8fc8"},a078:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var n={}},aa9c:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",{staticClass:"pa-0 pt-5"},[a("v-container",{staticClass:"pa-0 pt-5 mt-2",attrs:{fluid:""}},[a("v-row",{staticClass:"py-0 my-0",class:1==this.$vuetify.theme.dark?"grey darken-4":"grey lighten-4",attrs:{justify:"center",align:"center"}},[a("v-col",{staticClass:"py-3 my-0",attrs:{md:"12",lg:"10",xs:"12"}},[a("eventsHeader"),a("upcomingEvents")],1)],1)],1),a("v-container",{staticClass:"pa-0 py-2",attrs:{fluid:""}},[a("v-row",{attrs:{justify:"center",align:"center"}},[a("v-col",{staticClass:"py-0",attrs:{md:"12",lg:"10",xs:"12"}},[a("pastEvents")],1)],1)],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{md:"12",sm:"12",cols:"12"}},[a("p",{staticClass:"google-font mb-0",staticStyle:{"font-weight":"350","font-size":"200%"}},[a("b",[t._v("\n          Our\n          "),a("span",{staticStyle:{color:"#1a73e8"}},[t._v("Events")])])]),a("p",{staticClass:"google-font mt-0",staticStyle:{"font-size":"120%"}},[t._v("\n        Questions? Please contact\n        "),a("a",{staticStyle:{color:"#1565C0","text-decoration":"none"},attrs:{href:"mailto:"+t.communityData.communityEmail}},[t._v(t._s(t.communityData.communityEmail))])])])],1)],1)},o=[],r=a("d67c"),c={data:function(){return{communityData:r}}},l=c,d=a("2877"),u=a("6544"),m=a.n(u),v=a("62ad"),h=a("a523"),f=a("0fd9"),g=Object(d["a"])(l,s,o,!1,null,null,null),p=g.exports;m()(g,{VCol:v["a"],VContainer:h["a"],VRow:f["a"]});var b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-snackbar",{attrs:{bottom:"",left:""},model:{value:t.errorAlert,callback:function(e){t.errorAlert=e},expression:"errorAlert"}},[t._v("\n    "+t._s(t.errorMsg)+"\n    "),a("v-btn",{attrs:{color:"pink",text:""},on:{click:function(e){t.errorAlert=!1}}},[t._v("Close")])],1),a("v-col",{attrs:{cols:"12",md:"12",lg:"12",sm:"12"}},[a("p",{staticClass:"google-font mb-0",staticStyle:{"font-size":"150%",color:"#1a73e8"}},[t._v("Upcoming Events")]),a("p",{staticClass:"google-font mt-0",staticStyle:{"font-size":"95%"}},[t._v("As events and Trainings are scheduled, they will appear below along with additional contact information for those events. ")]),t.showLoader?a("v-row",t._l(3,(function(t,e){return a("v-col",{key:e,staticClass:"pa-2",attrs:{md:"4",lg:"4",sm:"6",cols:"12"}},[a("upcomingEventLoader")],1)})),1):a("v-row",t._l(t.eventsData,(function(e,n){return a("v-col",{key:n,staticClass:"pa-2",attrs:{md:"4",lg:"4",sm:"6",cols:"12"}},[a("v-slide-y-reverse-transition",[a("upcomingEvent",{directives:[{name:"show",rawName:"v-show",value:t.showData,expression:"showData"}],attrs:{data:{data:e}}})],1)],1)})),1),t.notFoundUpcomingEventFlag?a("v-row",{staticClass:"pa-2"},[a("v-col",{staticClass:"pa-3",class:1==t.$vuetify.theme.dark?"darkModeCard":"lightModeCard",attrs:{md:"3",lg:"3",sm:"6",cols:"12"}},[a("p",{staticClass:"google-font px-2 mb-0",staticStyle:{"font-size":"140%"}},[a("v-icon",[t._v("mdi-calendar-blank")]),a("br"),t._v("No Upcoming Events!\n          ")],1)])],1):t._e()],1)],1)},y=[],C=a("a078"),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"700"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("div",t._g({staticClass:"pa-3",class:1==t.$vuetify.theme.dark?"darkModeCard":"lightModeCard",staticStyle:{cursor:"pointer"}},n),[a("p",{staticClass:"google-font mt-1 mb-0",staticStyle:{"font-size":"90%"}},[t._v(t._s(t._f("dateFilter")(t.data.data.local_date)))]),a("p",{staticClass:"google-font ma-0 mt-0",staticStyle:{"font-size":"120%"}},[t._v(t._s(t.data.data.name))]),a("p",{staticClass:"google-font mt-0 mb-0",staticStyle:{"font-size":"90%"}},[t._v(t._s(t.data.data.local_time))]),a("p",{staticClass:"google-font mt-0 mb-0",staticStyle:{"font-size":"90%"}},[t._v(t._s(t.data.data.venue.name))]),a("p",{staticClass:"mb-0 mt-2 google-font",staticStyle:{color:"#1a73e8"}},[t._v("See More")])])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.dialog?a("v-card",{attrs:{color:""}},[a("v-card-title",{staticClass:"px-5 py-5 google-font",staticStyle:{"background-position":"right bottom"}},[t._v(t._s(t.data.data.name))]),a("v-card-text",{staticClass:"pa-5"},[a("p",{staticClass:"google-font mt-3 mb-0",staticStyle:{"font-size":"110%"}},[a("b",[t._v("Venue:")]),t._v("\n        "+t._s(t.data.data.venue.name)+"\n      ")]),a("p",{staticClass:"google-font mt-1 mb-0",staticStyle:{"font-size":"110%"}},[a("b",[t._v("Date:")]),t._v("\n        "+t._s(t._f("dateFilter")(t.data.data.local_date))+"\n      ")]),a("p",{staticClass:"google-font mt-0 mb-0",staticStyle:{"font-size":"110%"}},[a("b",[t._v("Time:")]),t._v("\n        "+t._s(t.data.data.local_time)+"\n      ")]),a("p",{staticClass:"google-font mt-3 mb-0",staticStyle:{"font-size":"110%"}},[a("b",[t._v("Description:")]),a("span",{domProps:{innerHTML:t._s(t.$options.filters.summary(t.data.data.description,100))}})]),t.data.data.link.length>0?a("v-btn",{staticClass:"ma-0 elevation-0 my-2 mr-3",staticStyle:{"text-transform":"capitalize"},attrs:{color:"#1a73e8",href:t.data.data.link,target:"_blank",dark:""}},[t._v("See More at Meetup")]):t._e()],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")])],1)],1):t._e()],1)},w=[],x=(a("28a5"),{props:{data:{data:{}}},data:function(){return{dialog:!1}},methods:{getCharString:function(t){var e=t.split(" ");return e.length>1?(e[0].substring(0,1)+""+e[1].substring(0,1)).toUpperCase():e[0].substring(0,1).toUpperCase()}},filters:{summary:function(t,e){return t.length>e?t.substring(0,e)+"..":t},dateFilter:function(t){var e=new Date(t);return e.toLocaleString(["en-US"],{month:"short",day:"2-digit",year:"numeric"})}}}),k=x,S=a("8336"),V=a("b0af"),O=a("99d9"),D=a("169a"),E=a("ce7e6"),A=a("2fa4"),$=Object(d["a"])(k,_,w,!1,null,null,null),j=$.exports;m()($,{VBtn:S["a"],VCard:V["a"],VCardActions:O["a"],VCardText:O["b"],VCardTitle:O["c"],VDialog:D["a"],VDivider:E["a"],VSpacer:A["a"]});var M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"ma-1 pa-1 my-0",class:1==t.$vuetify.theme.dark?"darkModeCard":"lightModeCard",attrs:{flat:""}},[a("v-card-title",{staticClass:"mb-0"},[a("div",[a("p",{staticClass:"google-font mb-2 animate-shimmer",staticStyle:{color:"#424242",width:"120px",height:"10px"}}),a("p",{staticClass:"google-font mt-1 mb-0 animate-shimmer",staticStyle:{color:"#424242",width:"140px",height:"20px"}}),a("p",{staticClass:"google-font mt-1 mb-0 animate-shimmer",staticStyle:{color:"#424242",width:"100px",height:"20px"}}),a("p",{staticClass:"google-font mt-1 mb-0 animate-shimmer",staticStyle:{color:"#424242",width:"100px",height:"20px"}})])]),a("v-card-actions",{staticClass:"mt-0"},[a("span",{staticClass:"animate-shimmer ml-2",staticStyle:{color:"#424242",width:"60px",height:"25px"}})])],1)},z=[],F=(a("39c6"),{}),L=Object(d["a"])(F,M,z,!1,null,null,null),T=L.exports;m()(L,{VCard:V["a"],VCardActions:O["a"],VCardTitle:O["c"]});var U={name:"App",components:{upcomingEvent:j,upcomingEventLoader:T},data:function(){return{eventsData:[],showLoader:!0,showData:!1,notFoundUpcomingEventFlag:!1,errorAlert:!1,errorMsg:""}},created:function(){var t=this;fetch("https://cors-anywhere.herokuapp.com/https://api.meetup.com/"+C["a"].MeetupURLName+"/events?&sign=true").then((function(t){return t.json()})).then((function(e){e.length>0?(t.showLoader=!1,t.showData=!0,t.eventsData=e):(t.showLoader=!1,t.notFoundUpcomingEventFlag=!0)})).catch((function(e){t.showLoader=!1,t.errorMsg="Issue found with "+e,t.errorAlert=!0,t.notFoundUpcomingEventFlag=!0}))},methods:{getImgUrl:function(t){return t.length>0?a("8fc8")("./"+t):a("1d36")}}},B=U,I=a("132d"),P=a("0789"),N=a("2db4"),R=Object(d["a"])(B,b,y,!1,null,null,null),Z=R.exports;m()(R,{VBtn:S["a"],VCol:v["a"],VContainer:h["a"],VIcon:I["a"],VRow:f["a"],VSlideYReverseTransition:P["e"],VSnackbar:N["a"]});var W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-snackbar",{attrs:{bottom:"",left:""},model:{value:t.errorAlert,callback:function(e){t.errorAlert=e},expression:"errorAlert"}},[t._v("\n    "+t._s(t.errorMsg)+"\n    "),a("v-btn",{attrs:{color:"pink",text:""},on:{click:function(e){t.errorAlert=!1}}},[t._v("Close")])],1),a("v-row",{staticClass:"mb-5",attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",md:"12",lg:"12",sm:"12"}},[a("p",{staticClass:"google-font mb-0",staticStyle:{"font-size":"150%",color:"#1a73e8"}},[t._v("Directory of past events")]),a("p",{staticClass:"google-font mt-0 mb-0",staticStyle:{"font-size":"95%"}},[t._v("Events are listed in reverse chronological order by date.")]),a("p",{staticClass:"google-font mt-0",staticStyle:{"font-size":"95%"}},[t._v("\n        Here are the recent 10 meetups. To know more about the past meetups\n        "),a("a",{staticStyle:{"text-decoration":"none",color:"#0277bd"},attrs:{href:t.communityData.CommunityMeetupLink,target:"_blank"}},[t._v("Click here")])]),t.showLoader?a("v-row",t._l(6,(function(t){return a("v-col",{key:t,staticClass:"pa-0",attrs:{md:"4",lg:"4",sm:"6",cols:"12"}},[a("pastEventCardLoader")],1)})),1):a("v-row",t._l(t.eventsData,(function(e,n){return a("v-col",{key:n,staticClass:"pa-0",attrs:{md:"4",lg:"4",sm:"6",cols:"12"}},[a("v-slide-y-reverse-transition",[a("pastEventCard",{directives:[{name:"show",rawName:"v-show",value:t.showData,expression:"showData"}],attrs:{data:{data:e}}})],1)],1)})),1),t.notFoundUpcomingEventFlag?a("v-row",{staticClass:"pa-2"},[a("v-col",{staticClass:"pa-3",class:1==t.$vuetify.theme.dark?"darkModeCard":"lightModeCard",attrs:{md:"3",lg:"3",sm:"6",cols:"6"}},[a("p",{staticClass:"google-font px-2 mb-0",staticStyle:{"font-size":"140%"}},[a("v-icon",[t._v("mdi-calendar-blank")]),a("br"),t._v("No Past Events!\n          ")],1)])],1):t._e()],1)],1)],1)},H=[],q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"700"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("div",t._g({staticClass:"pa-3",class:1==t.$vuetify.theme.dark?"darkModeCard":"lightModeCard",staticStyle:{cursor:"pointer"}},n),[a("p",{staticClass:"google-font mt-1 mb-0",staticStyle:{"font-size":"90%"}},[t._v(t._s(t.item.date))]),a("p",{staticClass:"google-font ma-0 mt-0",staticStyle:{"font-size":"120%"}},[t._v(t._s(t.item.name))]),a("v-btn",t._g({},n),[t._v("See More")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"px-5 py-5 google-font",staticStyle:{"background-position":"right bottom"}},[t._v(t._s(t.item.name))]),a("v-card-text",{staticClass:"pa-5"},[a("p",{staticClass:"google-font mt-3 mb-0",staticStyle:{"font-size":"110%"}},[a("b",[t._v("Venue:")]),t._v("\n          "+t._s(t.item.venue)+"\n        ")]),a("p",{staticClass:"google-font mt-1 mb-0",staticStyle:{"font-size":"110%"}},[a("b",[t._v("Date:")]),t._v("\n          "+t._s(t.item.date)+"\n        ")]),a("p",{staticClass:"google-font mt-0 mb-0",staticStyle:{"font-size":"110%"}},[a("b",[t._v("Video Day 1:")]),t._v("\n          "+t._s(t.item.D1link)+"\n        ")]),a("p",{staticClass:"google-font mt-0 mb-0",staticStyle:{"font-size":"110%"}},[a("b",[t._v("Video Day 2:")]),t._v("\n          "+t._s(t.item.D2link)+"\n        ")]),a("p",{staticClass:"google-font mt-3 mb-0",staticStyle:{"font-size":"110%"}},[a("b",[t._v("Description:")]),t._v("\n          "+t._s(t.item.description)+"\n        ")])]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")])],1)],1)],1)},J=[],K={name:"App",components:{},data:function(){return{dialog:!1}}},Y=K,Q=Object(d["a"])(Y,q,J,!1,null,null,null),G=Q.exports;m()(Q,{VBtn:S["a"],VCard:V["a"],VCardActions:O["a"],VCardText:O["b"],VCardTitle:O["c"],VDialog:D["a"],VDivider:E["a"],VSpacer:A["a"]});var X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"ma-1 pa-1 my-0 elevation-0",staticStyle:{"border-radius":"7px",border:"1px #ddd solid"},attrs:{flat:""}},[a("v-card-title",{staticClass:"mb-0"},[a("div",[a("p",{staticClass:"google-font mb-2 animate-shimmer",staticStyle:{color:"#424242",width:"200px",height:"20px"}}),a("p",{staticClass:"google-font mt-1 mb-0 animate-shimmer",staticStyle:{color:"#424242",width:"100px",height:"20px"}}),a("p",{staticClass:"google-font mt-1 mb-0 animate-shimmer",staticStyle:{color:"#424242",width:"100px",height:"20px"}}),a("p",{staticClass:"google-font mt-1 mb-0 animate-shimmer",staticStyle:{color:"#424242",width:"100px",height:"20px"}})])]),a("v-card-actions",{staticClass:"mt-0"},[a("v-spacer"),a("span",{staticClass:"animate-shimmer",staticStyle:{color:"#424242",width:"60px",height:"25px"}})],1)],1)},tt=[],et=(a("b38d"),{}),at=Object(d["a"])(et,X,tt,!1,null,null,null),nt=at.exports;m()(at,{VCard:V["a"],VCardActions:O["a"],VCardTitle:O["c"],VSpacer:A["a"]});var it={name:"App",components:{pastEventCard:G,pastEventCardLoader:nt},data:function(){return{communityData:r,eventsData:[],showData:!1,showLoader:!0,notFoundUpcomingEventFlag:!1,errorAlert:!1,errorMsg:""}},created:function(){var t=this;fetch("https://cors-anywhere.herokuapp.com/https://api.meetup.com/"+C["a"].MeetupURLName+"/events?desc=true&photo-host=public&page=8&status=past&sign=true").then((function(t){return t.json()})).then((function(e){e.length>0?(t.showLoader=!1,t.showData=!0,t.eventsData=e):(t.showLoader=!1,t.notFoundUpcomingEventFlag=!0)})).catch((function(e){t.showLoader=!1,t.errorMsg="Issue found with "+e,t.errorAlert=!0,t.notFoundUpcomingEventFlag=!0}))},methods:{getImgUrl:function(t){return t.length>0?a("8fc8")("./"+t):a("1d36")},getCharString:function(t){var e=t.split(" ");return e.length>1?(e[0].substring(0,1)+""+e[1].substring(0,1)).toUpperCase():e[0].substring(0,1).toUpperCase()}},filters:{summery:function(t,e){return t.substring(0,e)+".."},dateFilter:function(t){var e=new Date(t);return e.toLocaleString(["en-US"],{month:"short",day:"2-digit",year:"numeric"})}}},st=it,ot=Object(d["a"])(st,W,H,!1,null,null,null),rt=ot.exports;m()(ot,{VBtn:S["a"],VCol:v["a"],VContainer:h["a"],VIcon:I["a"],VRow:f["a"],VSlideYReverseTransition:P["e"],VSnackbar:N["a"]});var ct={components:{eventsHeader:p,upcomingEvents:Z,pastEvents:rt},created:function(){var t=document.querySelector("meta[name=theme-color]");this.$vuetify.theme.dark?t.setAttribute("content","#212121"):t.setAttribute("content","#0277bd")}},lt=ct,dt=a("a75b"),ut=Object(d["a"])(lt,n,i,!1,null,null,null);e["default"]=ut.exports;m()(ut,{VCol:v["a"],VContainer:h["a"],VContent:dt["a"],VRow:f["a"]})},b38d:function(t,e,a){"use strict";var n=a("e4d5"),i=a.n(n);i.a},b9ac:function(t,e,a){},d2c1:function(t,e,a){t.exports=a.p+"img/android.14ed07e6.svg"},e4d3:function(t,e,a){"use strict";var n=a("2b0e");e["a"]=n["a"].extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save:function(t){var e=this;this.originalValue=t,setTimeout((function(){e.isActive=!1}))}}})},e4d5:function(t,e,a){},f558:function(t,e,a){t.exports=a.p+"img/firebase.1c973c35.svg"}}]);