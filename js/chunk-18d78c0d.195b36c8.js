(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18d78c0d"],{"053e":function(e,t,s){e.exports=s.p+"img/heimdall-lite-docker-pull.89470b6a.svg"},"10d5":function(e,t,s){e.exports=s.p+"img/inspec-white-back-border.c1041c70.svg"},"262f":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{attrs:{fluid:""}},[s("v-row",{attrs:{align:"center"}},[s("v-col",{attrs:{md:"12",sm:"12",cols:"12"}},[s("p",{staticClass:"google-font",staticStyle:{color:"#1a73e8","font-weight":"350","font-size":"200%"}},[e._t("title")],2),e._t("subtitle")],2)],1)],1)},r=[],i=s("2877"),n=s("6544"),o=s.n(n),c=s("62ad"),l=s("a523"),p=s("0fd9"),g={},u=Object(i["a"])(g,a,r,!1,null,null,null);t["a"]=u.exports;o()(u,{VCol:c["a"],VContainer:l["a"],VRow:p["a"]})},"2af8":function(e,t,s){e.exports=s.p+"img/chef-2.e2e87707.svg"},"57ae":function(e,t,s){var a={"./ansible.svg":"6056","./bg.svg":"c50c","./chef-2.svg":"2af8","./contact.svg":"c797","./heimdall-lite-docker-pull.svg":"053e","./heimdall.svg":"b163","./inspec-blue-black-border.svg":"828a","./inspec-white-back-border.svg":"10d5","./inspec-white-border.svg":"9ea2","./team.svg":"aea7","./terraform.svg":"d0c2"};function r(e){var t=i(e);return s(t)}function i(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id="57ae"},6056:function(e,t,s){e.exports=s.p+"img/ansible.31da5345.svg"},"828a":function(e,t,s){e.exports=s.p+"img/inspec-blue-black-border.fee07361.svg"},"8adc":function(e,t,s){},"9ea2":function(e,t,s){e.exports=s.p+"img/inspec-white-border.d3a89030.svg"},a27e:function(e,t,s){},aea7:function(e,t,s){e.exports=s.p+"img/team.bcdbf0b8.svg"},b163:function(e,t,s){e.exports=s.p+"img/heimdall.97a3f78f.svg"},c50c:function(e,t,s){e.exports=s.p+"img/bg.7ef974da.svg"},c797:function(e,t,s){e.exports=s.p+"img/contact.c1b03809.svg"},cc20:function(e,t,s){"use strict";s("8e6e"),s("ac6a"),s("456d");var a=s("768b"),r=s("bd86"),i=(s("8adc"),s("58df")),n=s("0789"),o=s("9d26"),c=s("a9ad"),l=s("4e82"),p=s("7560"),g=s("f2e7"),u=s("1c87"),m=s("af2b"),d=s("d9bd");function v(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function h(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?v(s,!0).forEach((function(t){Object(r["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):v(s).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}t["a"]=Object(i["a"])(c["a"],m["a"],u["a"],p["a"],Object(l["a"])("chipGroup"),Object(g["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return h({"v-chip":!0},u["a"].options.computed.classes.call(this),{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses,{},this.sizeableClasses,{},this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(u["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var e=this,t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach((function(t){var s=Object(a["a"])(t,2),r=s[0],i=s[1];e.$attrs.hasOwnProperty(r)&&Object(d["a"])(r,i,e)}))},methods:{click:function(e){this.$emit("click",e),this.chipGroup&&this.toggle()},genFilter:function(){var e=[];return this.isActive&&e.push(this.$createElement(o["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(n["b"],e)},genClose:function(){var e=this;return this.$createElement(o["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.$emit("click:close"),e.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(e){var t=[this.genContent()],s=this.generateRouteLink(),a=s.tag,r=s.data;r.attrs=h({},r.attrs,{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:r.attrs.tabindex}),r.directives.push({name:"show",value:this.active}),r=this.setBackgroundColor(this.color,r);var i=this.textColor||this.outlined&&this.color;return e(a,this.setTextColor(i,r),t)}})},d0c2:function(e,t,s){e.exports=s.p+"img/terraform.02800dbd.svg"},d4f4:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-content",{staticClass:"pa-0"},[s("v-container",{staticClass:"pa-0 mt-2",attrs:{fluid:""}},[s("v-row",{staticClass:"py-0 my-0",class:1==this.$vuetify.theme.dark?"grey darken-4":"grey lighten-4",attrs:{justify:"center",align:"center"}},[s("v-col",{staticClass:"py-3 my-0",attrs:{md:"12",lg:"10",xs:"12"}},[s("Header",[s("h3",{attrs:{slot:"title"},slot:"title"},[e._v("Validation")])])],1)],1)],1),s("v-container",{attrs:{fluid:""}},[s("v-row",{staticClass:"py-0 my-0",attrs:{justify:"center",align:"center"}},[s("v-col",{staticClass:"py-3 my-0",attrs:{md:"12",lg:"10",xs:"12"}},[s("div",{staticClass:" google-font"},[s("p",[e._v("\n            These open-source community-based InSpec profiles validate the security of\n            common system components. CMS ISPG is helping to provide stewardship over\n            these profiles, hosted here and at other community vendor sites. If you\n            are interested in new profiles, please contact us at\n            "),s("a",{attrs:{href:e.mail_link}},[e._v(e._s(e.db.communityEmail))]),e._v(". If you are interested in developing and contributing your own\n            profiles, please see our links to Training material.\n          ")]),s("profileTemplateCompact",{attrs:{profiles:e.profiles.profiles}})],1)])],1)],1)],1)},r=[],i=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-content",{staticClass:"pa-0"},e._l(e.categoryOrder,(function(t){return s("v-card",{key:t,staticClass:"ma-2",attrs:{outlined:""}},[s("v-row",{class:e.$vuetify.theme.dark?"black":"white",attrs:{align:"center",dense:"","no-gutters":"",justify:"center"}},[s("v-col",{directives:[{name:"show",rawName:"v-show",value:e.$vuetify.breakpoint.mdAndUp,expression:"$vuetify.breakpoint.mdAndUp"}],attrs:{cols:"2"}},[s("h2",{staticClass:"font-weight-bold ma-2 break-word justify-center text-center google-font",class:{"subtitle-2":e.$vuetify.breakpoint.mdAndDown,black:e.$vuetify.theme.dark,white:e.$vuetify.theme.dark==e.False}},[e._v(e._s(t))])]),s("v-col",{attrs:{cols:e.$vuetify.breakpoint.xs?"12":"10"}},[s("v-container",{staticClass:"pa-0"},[s("v-row",{attrs:{dense:"","no-gutters":"",align:"center",justify:"start"}},[s("v-col",{directives:[{name:"show",rawName:"v-show",value:e.$vuetify.breakpoint.smAndDown,expression:"$vuetify.breakpoint.smAndDown"}],attrs:{cols:"auto"}},[s("h2",{staticClass:"font-weight-bold subtitle-1 ma-2 break-word justify-center text-left google-font"},[e._v(e._s(t))])])],1),e._l(e.getByCategory(e.profiles,[t]),(function(t,a){return s("v-card",{key:a,staticClass:"d-flex pr-1 pl-1 ma-2",class:e.$vuetify.theme.dark?"grey darken-4":"grey lighten-5",attrs:{outlined:""}},[e.$vuetify.breakpoint.mdAndUp?s("rowView",{attrs:{entry:t}}):s("colView",{attrs:{entry:t}})],1)}))],2)],1)],1)],1)})),1)},o=[],c=(s("7f7f"),s("55dd"),s("a481"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-row",{staticClass:"pa-1",attrs:{dense:"",align:"center"}},[s("v-col",{staticClass:"pa-0",attrs:{cols:e.getByFips(e.entry,"none")?"12":"4"}},[e.getByFips(e.entry,"none")?s("profileChip",{staticClass:"pa-0",attrs:{entry:e.getByFips(e.entry,"none")}}):s("div",{staticClass:"body-1 break-word pa-0"},[e._v(e._s(e.entry.name))])],1),e.getByFips(e.entry,"none")?e._e():s("v-col",{staticClass:"pa-0",attrs:{cols:"8"}},[e.getByFips(e.entry,"none")?e._e():s("v-container",{staticClass:"pa-0 pl-2",attrs:{fluid:""}},[s("v-row",{attrs:{align:"center"}},[s("v-col",{staticClass:"pa-0"},[s("v-row",{attrs:{justify:"center"}},[s("profileChip",{attrs:{entry:e.getByFips(e.entry,"low")}})],1)],1),s("v-col",{staticClass:"pa-0"},[s("v-row",{attrs:{justify:"center"}},[s("profileChip",{attrs:{entry:e.getByFips(e.entry,"mod")}})],1)],1),s("v-col",{staticClass:"pa-0"},[s("v-row",{attrs:{justify:"center"}},[s("profileChip",{attrs:{entry:e.getByFips(e.entry,"high")}})],1)],1)],1)],1)],1)],1)}),l=[],p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.entry.link?a("v-chip",{staticClass:"google-font break-word text-none pa-2",attrs:{href:e.entry.link,target:"_blank",color:"grey darken-3",outlined:!this.$vuetify.theme.dark}},[a("v-img",{directives:[{name:"show",rawName:"v-show",value:e.entry.svg,expression:"entry.svg"}],staticClass:"mr-2",attrs:{src:s("57ae")("./"+e.entry.svg+".svg"),"svg-inline":"","max-width":"15","max-height":"15"}}),e._v("\n  "+e._s(e.entry.name)+"\n")],1):e._e()},g=[],u={props:{entry:Object}},m=u,d=s("2877"),v=s("6544"),h=s.n(v),b=s("cc20"),f=s("adda"),y=Object(d["a"])(m,p,g,!1,null,null,null),k=y.exports;h()(y,{VChip:b["a"],VImg:f["a"]});var S={components:{profileChip:k},props:{entry:Object},methods:{getByFips:function(e,t){var s,a;for(s=0;s<e.links.length;s++)for(a=0;a<e.links[s].fips.length;a++)if(e.links[s].fips[a]==t)return e.links[s]}}},C=S,w=s("62ad"),O=s("a523"),M=s("0fd9"),A=Object(d["a"])(C,c,l,!1,null,null,null),_=A.exports;h()(A,{VCol:w["a"],VContainer:O["a"],VRow:M["a"]});var j=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[s("v-row",{attrs:{justify:"center"}},[s("v-col",{staticClass:"pa-0 ma-2",attrs:{cols:"12"}},[s("v-row",{attrs:{justify:"center"}},[e.getByFips(this.entry,"none")?s("profileChip",{attrs:{entry:e.getByFips(this.entry,"none")}}):s("div",{staticClass:"ma-1 body-2 break-word"},[e._v(e._s(e.entry.name))])],1),s("v-row",{attrs:{justify:"center"}},[e.getByFips(e.entry,"low")?s("profileChip",{staticClass:"ma-1",attrs:{entry:e.getByFips(e.entry,"low")}}):e._e(),e.getByFips(this.entry,"mod")?s("profileChip",{staticClass:"ma-1",attrs:{entry:e.getByFips(e.entry,"mod")}}):e._e(),e.getByFips(this.entry,"high")?s("profileChip",{staticClass:"ma-1",attrs:{entry:e.getByFips(e.entry,"high")}}):e._e()],1)],1)],1)],1)},x=[],R={components:{profileChip:k},props:{entry:Object},methods:{getByFips:function(e,t){var s,a;for(s=0;s<e.links.length;s++)for(a=0;a<e.links[s].fips.length;a++)if(e.links[s].fips[a]==t)return e.links[s]}}},I=R,D=Object(d["a"])(I,j,x,!1,null,null,null),B=D.exports;h()(D,{VCol:w["a"],VContainer:O["a"],VRow:M["a"]});var $={props:{profiles:Array},data:function(){return{fab:!1,categoryOrder:["Cloud Service Providers","Operating Systems","Databases","Application Logic","Web Servers"]}},components:{rowView:_,colView:B},methods:{make_linkable:function(e){return e.replace(/\s+/g,"-").toLowerCase()},onScroll:function(e){if("undefined"!==typeof window){var t=window.pageYOffset||e.target.scrollTop||0;this.fab=t>200}},toTop:function(){this.$vuetify.goTo(0)},getByCategory:function(e,t){var s,a,r=[];for(s=0;s<e.length;s++)for(a=0;a<e[s].category.length;a++)e[s].category[a]==t&&r.push(e[s]);return r.sort((function(e,t){return e["name"]>t["name"]?1:e["name"]<t["name"]?-1:0}))}},computed:{moveForBottomNavStyle:function(){return this.$vuetify.breakpoint.smAndDown?"z-index: 10; bottom: 60px":""}}},V=$,E=(s("fc36"),s("b0af")),G=s("a75b"),T=Object(d["a"])(V,n,o,!1,null,"3592a482",null),P=T.exports;h()(T,{VCard:E["a"],VCol:w["a"],VContainer:O["a"],VContent:G["a"],VRow:M["a"]});var F=s("262f"),L=s("f784"),W=s("d67c"),H=s("2f62");function N(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function q(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?N(s,!0).forEach((function(t){Object(i["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):N(s).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var Q={components:{profileTemplateCompact:P,Header:F["a"]},data:function(){return{profiles:L,db:W,isCompact:!1}},computed:{mail_link:function(){return"mailto:"+W.communityEmail},showCompact:function(){return this.$store.state.isCompact}},methods:q({},Object(H["c"])(["toggleCompact"]))},J=Q,U=Object(d["a"])(J,a,r,!1,null,null,null);t["default"]=U.exports;h()(U,{VCol:w["a"],VContainer:O["a"],VContent:G["a"],VRow:M["a"]})},f784:function(e){e.exports=JSON.parse('{"profiles":[{"name":"AWS S3","category":["Cloud Service Providers"],"links":[{"name":"AWS S3","fips":["none"],"link":"https://github.com/CMSgov/aws-s3-baseline","svg":"inspec-blue-black-border"}]},{"name":"AWS RDS MSQL Server Instance 2014 STIG","category":["Databases"],"links":[{"name":"ARS 3.1 High","fips":["high"],"link":"https://github.com/CMSgov/cms-ars-3.1-high-aws-rds-microsoft-sql-server-2014-instance-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"AWS RDS Oracle Database 12c STIG","category":["Databases"],"links":[{"name":"ARS 3.1 Low","fips":["low"],"link":"https://github.com/CMSgov/cms-ars-3.1-low-aws-rds-oracle-database-12c-stig-overlay","svg":"inspec-blue-black-border"},{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-aws-rds-oracle-database-12c-stig-overlay","svg":"inspec-blue-black-border"},{"name":"ARS 3.1 High","fips":["high"],"link":"https://github.com/CMSgov/cms-ars-3.1-high-aws-rds-oracle-database-12c-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"Ubuntu 16.04 STIG","category":["Operating Systems"],"links":[{"name":"ARS 3.1 Low","fips":["low"],"link":"https://github.com/CMSgov/cms-ars-3.1-low-canonical-ubuntu-16.04-lts-stig-overlay","svg":"inspec-blue-black-border"},{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-canonical-ubuntu-16.04-lts-stig-overlay","svg":"inspec-blue-black-border"},{"name":"ARS 3.1 High","fips":["high"],"link":"https://github.com/CMSgov/cms-ars-3.1-high-canonical-ubuntu-16.04-lts-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"IIS 8.5 Server STIG","category":["Web Servers"],"links":[{"name":"ARS 3.1 High","fips":["high"],"link":"https://github.com/CMSgov/cms-ars-3.1-high-microsoft-iis-8.5-server-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"IIS 8.5 Site STIG","category":["Web Servers"],"links":[{"name":"ARS 3.1 High","fips":["high"],"link":"https://github.com/CMSgov/cms-ars-3.1-high-microsoft-iis-8.5-site-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"MSQL Server 2014 Database STIG","category":["Databases"],"links":[{"name":"ARS 3.1 High","fips":["high"],"link":"https://github.com/CMSgov/cms-ars-3.1-high-microsoft-sql-server-2014-database-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"MSQL Server 2014 Instance STIG","category":["Databases"],"links":[{"name":"ARS 3.1 High","fips":["high"],"link":"https://github.com/CMSgov/cms-ars-3.1-high-microsoft-sql-server-2014-instance-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"Windows 2012 STIG","category":["Operating Systems"],"links":[{"name":"ARS 3.1 High","fips":["high"],"link":"https://github.com/CMSgov/cms-ars-3.1-high-microsoft-windows-2012r2-member-server-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"Windows 2016 STIG","category":["Operating Systems"],"links":[{"name":"ARS 3.1 Low","fips":["low"],"link":"https://github.com/CMSgov/cms-ars-3.1-low-microsoft-windows-server-2016-stig-overlay","svg":"inspec-blue-black-border"},{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-microsoft-windows-server-2016-stig-overlay","svg":"inspec-blue-black-border"},{"name":"ARS 3.1 High","fips":["high"],"link":"https://github.com/CMSgov/cms-ars-3.1-high-microsoft-windows-server-2016-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"RSA Archer 6 SCG","category":["Application Logic"],"links":[{"name":"ARS 3.1 High","fips":["high"],"link":"https://github.com/CMSgov/cms-ars-3.1-high-rsa-archer-6-security-configuration-guide-overlay","svg":"inspec-blue-black-border"}]},{"name":"AWS Foundations CIS","category":["Cloud Service Providers"],"links":[{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-aws-foundations-cis-overlay","svg":"inspec-blue-black-border"}]},{"name":"AWS RDS PostgreSQL 9.x STIG","category":["Databases"],"links":[{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-aws-rds-crunchy-data-postgresql-9-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"AWS RDS Infrastructure CIS","category":["Cloud Service Providers"],"links":[{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-aws-rds-infrastructure-cis-overlay","svg":"inspec-blue-black-border"}]},{"name":"AWS RDS Oracle MySQL EE 5.7 CIS","category":["Databases"],"links":[{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-aws-rds-oracle-mysql-ee-5.7-cis-overlay","svg":"inspec-blue-black-border"}]},{"name":"PostgreSQL 9.x STIG","category":["Databases"],"links":[{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-crunchy-data-postgresql-9-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"Docker CE CIS","category":["Operating Systems"],"links":[{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-docker-ce-cis-overlay","svg":"inspec-blue-black-border"}]},{"name":"MongoDB STIG","category":["Databases"],"links":[{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-mongodb-enterprise-advanced-3-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"NGINX","category":["Web Servers"],"links":[{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-nginx-overlay","svg":"inspec-blue-black-border"}]},{"name":"Oracle Database 12c STIG","category":["Databases"],"links":[{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-oracle-database-12c-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"Java Runtime Environment 7 STIG","category":["Application Logic"],"links":[{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-oracle-java-runtime-environment-7-unix-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"Java Runtime Environment 8 STIG","category":["Application Logic"],"links":[{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-oracle-java-runtime-environment-8-unix-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"Oracle MySQL EE 5.7 CIS","category":["Databases"],"links":[{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-oracle-mysql-ee-5.7-cis-overlay","svg":"inspec-blue-black-border"}]},{"name":"Red Hat 6 STIG","category":["Operating Systems"],"links":[{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-red-hat-enterprise-linux-6-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"Red Hat 7 STIG","category":["Operating Systems"],"links":[{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-red-hat-enterprise-linux-7-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"Red Hat Jboss 6.3 STIG","category":["Application Logic"],"links":[{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-red-hat-jboss-eap-6.3-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"AWS Linux 2 CIS","category":["Operating Systems"],"links":[{"name":"AWS Linux 2 CIS","fips":["none"],"link":"https://github.com/CMSgov/CMS-AWS-West-AWS-Linux2-CIS-Benchmark","svg":"inspec-blue-black-border"}]},{"name":"Red Hat CVE Vulnerability Scan","category":["Operating Systems"],"links":[{"name":"Red Hat CVE Vulnerability Scan","fips":["none"],"link":"https://github.com/CMSgov/rhel_cve_vulnerability_scan_baseline","svg":"inspec-blue-black-border"}]}]}')},fc36:function(e,t,s){"use strict";var a=s("a27e"),r=s.n(a);r.a}}]);