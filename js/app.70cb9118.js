(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{0:function(e,n,t){e.exports=t("2f39")},"2f39":function(e,n,t){"use strict";t.r(n);var r=t("967e"),a=t.n(r),o=(t("a481"),t("96cf"),t("fa84")),u=t.n(o),c=(t("5c7d"),t("7d6e"),t("e54f"),t("985d"),t("4e2f"),t("31cd"),t("2b0e")),i=t("1f91"),s=t("42d2"),l=t("b05d"),p=t("4d5a"),f=t("e359"),d=t("9404"),b=t("09e3"),h=t("9989"),Q=t("65c6"),w=t("6ac5"),v=t("9c40"),m=t("0016"),x=t("1c1c"),k=t("66e5"),g=t("4074"),y=t("0170"),C=t("880c"),I=t("32a7"),S=t("62cd"),A=t("6ac0"),L=t("27f9"),P=t("f09f"),V=t("a370"),T=t("4b7e"),$=t("4983"),q=t("068f"),B=t("cb32"),J=t("0378"),R=t("0e51"),_=t("eb85"),j=t("714f");c["a"].use(l["a"],{config:{},lang:i["a"],iconSet:s["a"],components:{QLayout:p["a"],QHeader:f["a"],QDrawer:d["a"],QPageContainer:b["a"],QPage:h["a"],QToolbar:Q["a"],QToolbarTitle:w["a"],QBtn:v["a"],QIcon:m["a"],QList:x["a"],QItem:k["a"],QItemSection:g["a"],QItemLabel:y["a"],QCarousel:C["a"],QCarouselControl:I["a"],QCarouselSlide:S["a"],QVideo:A["a"],QInput:L["a"],QCard:P["a"],QCardSection:V["a"],QCardActions:T["a"],QScrollArea:$["a"],QImg:q["a"],QAvatar:B["a"],QForm:J["a"],QResponsive:R["a"],QSeparator:_["a"]},directives:{Ripple:j["a"]}});var D=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},E=[],F={name:"App"},H=F,O=t("2877"),z=Object(O["a"])(H,D,E,!1,null,null,null),G=z.exports,K=t("2f62");c["a"].use(K["a"]);var M=function(){var e=new K["a"].Store({modules:{},strict:!1});return e},N=t("8c4f"),U=[{path:"/",component:function(){return t.e(9).then(t.bind(null,"a9c3"))},children:[{path:"",component:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"8b24"))}},{path:"/settings",component:function(){return t.e(10).then(t.bind(null,"311b"))}},{path:"/login",component:function(){return t.e(6).then(t.bind(null,"013f"))}},{path:"/register",component:function(){return t.e(7).then(t.bind(null,"56b4"))}},{path:"/profile",component:function(){return t.e(11).then(t.bind(null,"7853"))}},{path:"/video/:id",component:function(){return t.e(5).then(t.bind(null,"121e"))},children:[{path:"/:videoId",component:function(){return t.e(4).then(t.bind(null,"e03e"))}}]}]}];U.push({path:"*",component:function(){return t.e(8).then(t.bind(null,"e51e"))}});var W=U;c["a"].use(N["a"]);var X=function(){var e=new N["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:W,mode:"history",base:"/"});return e},Y=function(){return Z.apply(this,arguments)};function Z(){return Z=u()(a.a.mark((function e(){var n,t,r;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof M){e.next=6;break}return e.next=3,M({Vue:c["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=M;case 7:if(n=e.t0,"function"!==typeof X){e.next=14;break}return e.next=11,X({Vue:c["a"],store:n});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=X;case 15:return t=e.t1,n.$router=t,r={el:"#q-app",router:t,store:n,render:function(e){return e(G)}},e.abrupt("return",{app:r,store:n,router:t});case 19:case"end":return e.stop()}}),e)}))),Z.apply(this,arguments)}var ee=t("a925"),ne={failed:"Action failed",success:"Action was successful"},te={"en-us":ne};c["a"].use(ee["a"]);var re=new ee["a"]({locale:"en-us",fallbackLocale:"en-us",messages:te}),ae=function(e){var n=e.app;n.i18n=re},oe=t("bc3a"),ue=t.n(oe);function ce(){return ie.apply(this,arguments)}function ie(){return ie=u()(a.a.mark((function e(){var n,t,r,o,u,i,s,l,p;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Y();case 2:n=e.sent,t=n.app,r=n.store,o=n.router,u=!0,i=function(e){u=!1,window.location.href=e},s=window.location.href.replace(window.location.origin,""),l=[ae,void 0],p=0;case 11:if(!(!0===u&&p<l.length)){e.next=29;break}if("function"===typeof l[p]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,l[p]({app:t,router:o,store:r,Vue:c["a"],ssrContext:null,redirect:i,urlPath:s});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:p++,e.next=11;break;case 29:if(!1!==u){e.next=31;break}return e.abrupt("return");case 31:new c["a"](t);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),ie.apply(this,arguments)}c["a"].prototype.$axios=ue.a,ce()},"31cd":function(e,n,t){}},[[0,2,0]]]);