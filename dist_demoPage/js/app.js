(function(){"use strict";var t={7861:function(t,e,n){var o=n(6369),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"p-2 ui-prototype-bg-dark"},[e("h1",[e("router-link",{staticClass:"text-white text-decoration-none",attrs:{to:"EntryView"}},[t._v("UI Prototype Demo")])],1)]),e("div",{staticClass:"d-flex"},[e("nav",{staticClass:"d-flex flex-column col-2 p-2 ui-prototype-shadow fill-height"},[e("router-link",{staticClass:"btn btn-light",class:{active:"EntryView"==t.$route.name},attrs:{to:"EntryView"}},[t._v("Entry")]),e("router-link",{staticClass:"btn btn-light",class:{active:"PrototypeButtonView"==t.$route.name},attrs:{to:"PrototypeButtonView"}},[t._v("P-Button")]),e("router-link",{staticClass:"btn btn-light",class:{active:"PrototypeSwitcherView"==t.$route.name},attrs:{to:"PrototypeSwitcherView"}},[t._v("P-Switcher")]),e("hr"),t._v(" ©ui-prototype ")],1),e("div",{staticClass:"col-10 p-2"},[e("router-view")],1)])])},i=[],u={name:"App",mounted(){}},a=u,s=n(1001),l=(0,s.Z)(a,r,i,!1,null,null,null),c=l.exports,p=n(2631),f=function(){var t=this;t._self._c;return t._m(0)},v=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"entry-view"},[e("h1",[t._v("Bootstrap"),e("span",{staticClass:"badge bg-secondary"},[t._v("Hello")])])])}],d={name:"EntryView",props:{},components:{}},h=d,y=(0,s.Z)(h,f,v,!1,null,null,null),w=y.exports,m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"prototype-button-view"},[e("h2",[t._v("PrototypeButton DEV")]),e("PrototypeButton")],1)},b=[],_=function(){var t=this,e=t._self._c;return e("div",{staticClass:"prototype-button"},[e("button",{staticClass:"btn btn-outline-primary",on:{click:function(e){t.count++}}},[t._v("Prototype Button: "+t._s(t.count))])])},P=[],g={name:"PrototypeButton",props:{},data(){return{count:0}}},C=g,V=(0,s.Z)(C,_,P,!1,null,"419716f6",null),x=V.exports,S={name:"PrototypeButtonView",props:{},components:{PrototypeButton:x}},O=S,B=(0,s.Z)(O,m,b,!1,null,null,null),k=B.exports,E=function(){var t=this,e=t._self._c;return e("div",{staticClass:"prototype-switcher-view"},[e("h2",[t._v("PrototypeSwitcher DEV")]),e("PrototypeSwitcher")],1)},Z=[],j=function(){var t=this,e=t._self._c;return e("div",{staticClass:"prototype-switcher"},[e("div",[e("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t.value?e("div",{staticClass:"spinner-border mt-3",attrs:{role:"status"}},[e("span",{staticClass:"visually-hidden"},[t._v("Loading...")])]):t._e()])},T=[],$={name:"PrototypeSwitcher",props:{switch:{type:Boolean,default:!1}},data(){return{value:!1}},watch:{switch(t){this.value=t}}},D=$,M=(0,s.Z)(D,j,T,!1,null,"077c6758",null),A=M.exports,F={name:"PrototypeSwitcherView",props:{},components:{PrototypeSwitcher:A}},H=F,I=(0,s.Z)(H,E,Z,!1,null,null,null),L=I.exports;const U=[{path:"/EntryView",name:"EntryView",component:w},{path:"/PrototypeButtonView",name:"PrototypeButtonView",component:k},{path:"/PrototypeSwitcherView",name:"PrototypeSwitcherView",component:L}],q=new p.ZP({routes:U});var z=q,G=(n(2166),n(8499)),J=n.n(G),K=n(3691);o["default"].use(p.ZP),o["default"].config.productionTip=!1,o["default"].use(J(),{locale:K.Z}),new o["default"]({render:t=>t(c),router:z}).$mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,loaded:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=t,function(){n.amdO={}}(),function(){var t=[];n.O=function(e,o,r,i){if(!o){var u=1/0;for(c=0;c<t.length;c++){o=t[c][0],r=t[c][1],i=t[c][2];for(var a=!0,s=0;s<o.length;s++)(!1&i||u>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[s])}))?o.splice(s--,1):(a=!1,i<u&&(u=i));if(a){t.splice(c--,1);var l=r();void 0!==l&&(e=l)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[o,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,u=o[0],a=o[1],s=o[2],l=0;if(u.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(s)var c=s(n)}for(e&&e(o);l<u.length;l++)i=u[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},o=self["webpackChunkui_prototype"]=self["webpackChunkui_prototype"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7861)}));o=n.O(o)})();
//# sourceMappingURL=app.js.map