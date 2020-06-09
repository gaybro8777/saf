(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0703a698"],{"0dd5":function(e,n,t){e.exports=t.p+"img/splunk-black-white-bg.5c8a334c.png"},"10c2":function(e,n,t){"use strict";t.r(n);var s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-content",{staticClass:"pa-0"},[t("v-container",{staticClass:"pa-0 mt-2",attrs:{fluid:""}},[t("v-row",{staticClass:"py-0 my-0",class:1==this.$vuetify.theme.dark?"grey darken-4":"grey lighten-4",attrs:{justify:"center",align:"center"}},[t("v-col",{staticClass:"py-3 my-0",attrs:{md:"12",lg:"10",xs:"12"}},[t("Header",[t("h3",{attrs:{slot:"title"},slot:"title"},[e._v("Frequently Asked Questions")]),t("p",{attrs:{slot:"subtitle"},slot:"subtitle"},[e._v("\n            Have a question you don't see covered here? Please contact\n            "),t("a",{staticStyle:{color:"#1565C0","text-decoration":"none"},attrs:{href:"mailto:"+e.communityData.communityEmail}},[e._v(e._s(e.communityData.communityEmail))])])])],1)],1)],1),t("v-container",{staticClass:"pa-0 py-2",attrs:{fluid:""}},[t("v-row",{attrs:{justify:"center",align:"center"}},[t("v-col",{staticClass:"py-0",attrs:{md:"12",lg:"10",xs:"12"}},[t("faqInfo")],1)],1)],1)],1)},a=[],o=t("262f"),i=function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("v-container",{attrs:{fluid:""}},[s("v-expansion-panels",{attrs:{focusable:"",hover:"",tile:"",multiple:""},model:{value:e.panel,callback:function(n){e.panel=n},expression:"panel"}},e._l(e.faqs,(function(n){return s("v-expansion-panel",{key:n},[s("v-expansion-panel-header",{staticClass:"google-font",staticStyle:{"font-weight":"200","font-size":"120%"}},[e._v(e._s(n.question))]),n.answer?s("v-expansion-panel-content",[s("v-html",[e._v(e._s(n.answer))])],1):e._e(),n.links?s("v-expansion-panel-content",[s("ul",e._l(n.links,(function(n){return s("li",{key:n},[s("span",[n.router_link?s("router-link",{attrs:{to:n.router_link}},[e._v(e._s(n.name))]):s("a",{attrs:{href:n.download_link?n.download_link:n.link,target:"_blank",download:n.download_link}},[e._v(e._s(n.name))]),e._v("\n              "+e._s(n.desc)+"\n            ")],1),n.bullets?s("ul",e._l(n.bullets,(function(n){return s("li",{key:n},[e._v(e._s(n))])})),0):e._e()])})),0)]):e._e(),n.code?s("v-expansion-panel-content",{staticClass:"hidden-sm-and-down"},[s("v-row",[s("v-col",{attrs:{xs:"3"}},[n.code?s("code",{staticClass:"pa-2"},[e._v(e._s(n.code))]):e._e()])],1)],1):e._e(),n.code?s("v-expansion-panel-content",{staticClass:"hidden-sm-and-down"},[s("v-row",[s("v-col",{attrs:{xs:"3"}},[n.code?s("code",{staticClass:"pa-2"},[e._v(e._s(n.code))]):e._e()])],1)],1):e._e(),n.images?s("v-expansion-panel-content",{},[s("v-container",{attrs:{fluid:""}},[s("v-row",{attrs:{justify:"center"}},e._l(n.images,(function(e){return s("v-col",{key:e.path,staticClass:"d-flex",attrs:{cols:"auto"}},[s("v-img",{staticClass:"ma-2",attrs:{src:t("508a")("./"+e.path),width:e.maxwidth?e.maxwidth:""}})],1)})),1)],1)],1):e._e()],1)})),1)],1)},r=[],l=t("3c6c"),c={data:function(){return{faqs:l.faqs}},computed:{panel:function(){var e=parseInt(this.$route.hash.slice(1))-1;return[e]}}},p=c,u=t("2877"),d=t("6544"),h=t.n(d),f=t("62ad"),v=t("a523"),m=(t("8e6e"),t("ac6a"),t("456d"),t("bd86")),b=t("4e82"),g=t("3206"),y=t("80d2"),x=t("58df");function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(t,!0).forEach((function(n){Object(m["a"])(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var k=Object(x["a"])(Object(b["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(g["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return _({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.content&&(this.content.isBooted=!0),this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(y["p"])(this))}}),O=t("0789"),C=t("9d65"),S=t("a9ad"),j=Object(x["a"])(C["a"],S["a"],Object(g["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel")),P=j.extend().extend({name:"v-expansion-panel-content",computed:{isActive:function(){return this.expansionPanel.isActive}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var n=this;return e(O["a"],this.showLazyContent((function(){return[e("div",n.setBackgroundColor(n.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:n.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(y["p"])(n))])]})))}}),I=t("9d26"),E=t("5607");function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function D(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?A(t,!0).forEach((function(n){Object(m["a"])(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var H=Object(x["a"])(S["a"],Object(g["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel")),R=H.extend().extend({name:"v-expansion-panel-header",directives:{ripple:E["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=Object(y["p"])(this,"actions")||[this.$createElement(I["a"],this.expandIcon)];return this.$createElement(O["c"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var n=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button"},directives:[{name:"ripple",value:this.ripple}],on:D({},this.$listeners,{click:this.onClick,mousedown:function(){return n.hasMousedown=!0},mouseup:function(){return n.hasMousedown=!1}})}),[Object(y["p"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),F=(t("210b"),t("604c")),$=t("d9bd");function N(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function V(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?N(t,!0).forEach((function(n){Object(m["a"])(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var B=F["a"].extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return V({},F["a"].options.computed.classes.call(this),{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object($["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object($["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,n){var t=this.getValue(e,n),s=this.getValue(e,n+1);e.isActive=this.toggleMethod(t),e.nextIsActive=this.toggleMethod(s)}}}),q=t("adda"),M=t("0fd9"),T=Object(u["a"])(p,i,r,!1,null,null,null),L=T.exports;h()(T,{VCol:f["a"],VContainer:v["a"],VExpansionPanel:k,VExpansionPanelContent:P,VExpansionPanelHeader:R,VExpansionPanels:B,VImg:q["a"],VRow:M["a"]});var z=t("d67c"),K={data:function(){return{communityData:z}},components:{Header:o["a"],faqInfo:L}},U=K,J=t("a75b"),W=Object(u["a"])(U,s,a,!1,null,null,null);n["default"]=W.exports;h()(W,{VCol:f["a"],VContainer:v["a"],VContent:J["a"],VRow:M["a"]})},"17e2":function(e,n,t){e.exports=t.p+"img/sq.271643be.png"},"210b":function(e,n,t){},"262f":function(e,n,t){"use strict";var s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-container",{attrs:{fluid:""}},[t("v-row",{attrs:{align:"center"}},[t("v-col",{attrs:{md:"12",sm:"12",cols:"12"}},[t("p",{staticClass:"google-font",staticStyle:{color:"#1a73e8","font-weight":"350","font-size":"200%"}},[e._t("title")],2),e._t("subtitle")],2)],1)],1)},a=[],o=t("2877"),i=t("6544"),r=t.n(i),l=t("62ad"),c=t("a523"),p=t("0fd9"),u={},d=Object(o["a"])(u,s,a,!1,null,null,null);n["a"]=d.exports;r()(d,{VCol:l["a"],VContainer:c["a"],VRow:p["a"]})},"3c6c":function(e){e.exports=JSON.parse('{"faqs":[{"question":"How many ARS controls are assessed under the CMS SAF?","answer":"Currently, about 121 CMS ARS 3.1 security controls are assessed under this framework. Note that assessment coverage varies based on the component type. For more information, click here:","links":[{"name":"CMS SAF ARS Assessment Range","download_link":"CMS_SAF_ARS_Assessment_Range_04232020.pdf"}]},{"question":"How are ARS (NIST SP 800-53) Security Control associations included in the assessment tests used in this framework?","answer":"NIST SP 800-53 associations are included in all InSpec profiles and output from other security tools processed through Heimdall_tools. See our presentation to learn more!","links":[{"name":"InSpec, HDF, and NIST SP 800-53 Security Controls","download_link":"CMS_InSpec_Profiles_and_HDF_include_NIST_SP-800-53_associations_04232020.pdf"}]},{"question":"What is a recommended best practice for Code Review?","answer":"Teams should follow the code review recommendations given here:","links":[{"name":"SAF Code Review Recommendations","download_link":"SAF_Code_Review_Recommendations.pdf"}]},{"question":"Which tools are supported by the CMS SAF?","answer":"","links":[{"name":"InSpec (and our InSpec profiles)","link":"https://cmsgov.github.io/saf/#/validation","desc":" for assessing configuration settings, vulnerabilities, and least functionality"},{"name":"InSpec Tools","link":"https://inspec-tools.mitre.org","desc":"to create and format InSpec data like profiles and results"},{"name":"Heimdall Server","link":"https://heimdall.mitre.org","desc":" to visualize security data using a full viewer instance to store results, coordinate across the development team, and more"},{"name":"Heimdall Lite","link":"https://heimdall-lite.mitre.org","desc":" to visualize security data easily from anywhere, using a lightweight in-browser version of Heimdall for simple use cases"},{"name":"Heimdall_tools","link":"https://heimdall-tools.mitre.org/","desc":" to convert data from these tools (to Heimdall Data Format - HDF) to be viewed in Heimdall:","bullets":["SonarQube","Fortify","OWASP ZAP","Burp Suite Pro","Nessus"]},{"name":"HDF-to-Splunk","link":"http://hdf-json-to-splunk.mitre.org/","desc":" converter to use Splunk to store HDF security data"}]},{"question":"How can I use InSpec tests in my CI/CD pipeline?","answer":"InSpec tests can be integrated as part of a test battery in your favorite CI platform. For example, you can add InSpec testing to your Travis CI file to run InSpec automatically. For further details, please see our Advanced InSpec Developer\'s Course.","code":"// travis.yml\\n\\nsudo: required\\n\\n# blocklist\\n#branches:\\n#  except:\\n#  - development\\n\\n# safelist\\n#branches:\\n#  only:\\n#  - master\\n#  - stable\\n\\nlanguage: ruby\\nrvm:\\n  - 2.6.1\\n\\ncache: bundler\\n\\naddons:\\n  apt:\\n    sources:\\n      - chef-current-xenial\\n    # packages:\\n    #   - chef-workstation\\n  #artifacts: true\\n\\n# Don\'t `bundle install` which takes about 1.5 mins\\ninstall:\\n\\nservices: docker\\n\\nenv:\\n  matrix:\\n  - INSTANCE=default-ubuntu-1604\\n\\nbefore_script:\\n  - wget https://packages.chef.io/files/stable/chef-workstation/0.5.1/ubuntu/16.04/chef-workstation_0.5.1-1_amd64.deb\\n  - sudo dpkg -i chef-workstation_*.deb\\n  - rm chef-workstation_*.deb\\n  - sudo iptables -L DOCKER || ( echo \\"DOCKER iptables chain missing\\" ; sudo iptables -N DOCKER )\\n  - eval\\\\$(chef shell-init bash)\\"\\n  - gem install bundler:2.0.1\\n  - gem install inspec_tools\\n  - inspec --version\\n  - CHEF_LICENSE=accept chef gem update inspec\\n  - CHEF_LICENSE=accept chef gem update inspec-bin\\n  - /opt/chef-workstation/embedded/bin/gem update inspec\\n  - /opt/chef-workstation/embedded/bin/gem update inspec-bin\\n  - inspec --version\\n  - bundle update --bundler\\n  - bundle install\\n  - chef --version\\n  - cookstyle --version\\n  - foodcritic --version\\n\\nscript: \\n  - CHEF_LICENSE=accept-no-persist KITCHEN_LOCAL_YAML=kitchen.dokken.yml CHEF_VERSION=\\\\${CHEF_VERSION} kitchen verify \\\\${INSTANCE} || true\\n  - export RESULTS=\\\\$(ls results/*.json)\\n  - inspec_tools compliance -j $RESULTS -f threshold.yml","links":[{"name":"InSpec Pipeline Integration Example","link":"https://mitre-inspec-advanced-developer.netlify.com/course/4.html"}]}]}')},"508a":function(e,n,t){var s={"./chef-2.svg":"e562","./logo-orange-tsp.svg":"60fa","./splunk-black-white-bg.png":"0dd5","./sq.png":"17e2"};function a(e){var n=o(e);return t(n)}function o(e){if(!t.o(s,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=o,e.exports=a,a.id="508a"},"60fa":function(e,n,t){e.exports=t.p+"img/logo-orange-tsp.97a3f78f.svg"},e562:function(e,n,t){e.exports=t.p+"img/chef-2.e2e87707.svg"}}]);