(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"2Fcx":function(e,a,t){e.exports={container:"container___1Rq3A"}},bsDN:function(e,a,t){e.exports={menu:"menu___3fMWW",right:"right___2CMz5",action:"action___3ut1O",search:"search___3FPts",account:"account___1r_Ku",avatar:"avatar___1Rx79",dark:"dark___1zu9O",name:"name___2eduw"}},bx7e:function(e,a,t){"use strict";t.r(a),function(e){var n=t("0Owb"),r=t("CiB2"),c=t("tJVT"),o=(t("k1fw"),t("sgkG")),u=t("xKgJ"),l=t("eTk0"),i=t("c+yx"),s=t("oN5p"),m=t("QMUJ"),p=t("+GxG"),h=t("RVw9"),d=t("cJ7L"),f=t("Hx5s"),v=t("LvDl"),y=t("q1tI"),b=t.n(y),g=t("9kvl"),E=t("55Ip"),_=t("WHYC"),k=b.a.createElement(f["a"],{copyright:"2020 Halo Enterprise",links:[{key:"link",title:"Halo Cloud",href:"Halo Cloud",blankTarget:!0},{key:"github",title:b.a.createElement(s["a"],null),href:"",blankTarget:!0},{key:"Halo Cloud",title:"Halo Cloud",href:"https://halo.cloud",blankTarget:!0}]}),O=function(e){var a=e.dispatch,t=e.currentApp,s=e.children,O=e.settings,C=e.location,j=void 0===C?{pathname:"/"}:C,N=Object(y["useState"])(Object(v["isEmpty"])(Object(u["e"])())),T=Object(c["a"])(N,2),w=T[0],R=T[1],U=[{path:"/",redirect:"/dash",authority:["admin","user"]},{path:"/dash",name:"\u63a7\u5236\u53f0",authority:["admin","user"],icon:b.a.createElement(m["a"],null)},{name:"\u5e94\u7528\u4e2d\u5fc3",icon:b.a.createElement(p["a"],null),path:"/app",authority:["admin","user","user_assign"],hideInMenu:w,routes:[{path:"/app/central",name:"\u63a7\u5236\u9762\u677f",authority:["admin","user","user_assign"]},{path:"/app/indices",name:"\u7d22\u5f15\u5217\u8868",authority:["admin","user","user_assign"]},{path:"/app/dict",name:"\u8bcd\u5e93\u7ba1\u7406",authority:["admin","user","user_assign"]},{path:"/app/tier",name:"\u5b58\u50a8\u7ba1\u7406",authority:["admin","user","user_assign"]},{path:"/app/metric",name:"\u76d1\u63a7\u5927\u76d8",authority:["admin","user"]}]},{path:"/task",name:"\u4efb\u52a1",icon:b.a.createElement(h["a"],null),authority:["admin","user"]},{name:"\u8d26\u6237",path:"/account",authority:["admin","user"],icon:b.a.createElement(d["a"],null),routes:[{path:"/account/balance",name:"\u8d44\u91d1\u8d26\u6237",authority:["admin","user"]},{path:"/account/card",name:"\u5361\u5377\u7ba1\u7406",authority:["admin","user"]},{path:"/account/payment",name:"\u6d88\u8d39\u660e\u7ec6",authority:["admin","user"]},{path:"/account/billing",name:"\u8d26\u5355\u7ba1\u7406",authority:["admin","user"]},{path:"/account/settings",name:"\u8d26\u53f7\u4fe1\u606f",authority:["admin","user"]}]}];Object(y["useEffect"])((function(){t.selected&&R(!1),a&&a({type:"user/fetchCurrent"})}),[t]);var x=Object(i["a"])(e.route.routes,j.pathname||"/")||{authority:void 0},I=Object(g["f"])();return Object(r["a"])(I),b.a.createElement(f["e"],Object(n["a"])({logo:"http://halo-image-base.oss-cn-shanghai.aliyuncs.com/d7a468c49d7f4a1eb6a74124e5bbf246.svg",menuProps:{onSelect:function(e){"/dash"==e.key&&R(!0)}},menuHeaderRender:function(e,a){return b.a.createElement(E["a"],{to:"/"},e,a)},menuItemRender:function(e,a){return e.isUrl||e.children||!e.path?a:b.a.createElement(E["a"],{to:e.path},a)},footerRender:function(){return k},menuDataRender:function(){return U},rightContentRender:function(){return b.a.createElement(o["a"],null)}},e,O,{onCollapse:function(){return console.log("onCollapse")}}),b.a.createElement(l["a"],{authority:x.authority,noMatch:b.a.createElement(_["c"],{to:"/user/login"})},s))};a["default"]=Object(g["a"])((function(a){return{currentApp:a.global.currentApp,settings:a.settings,collapsed:e.collapsed}}))(O)}.call(this,t("IyRk"))},rFY1:function(e,a,t){e.exports={menu:"menu___25uep",dropDown:"dropDown___2mKz9"}},sgkG:function(e,a,t){"use strict";t("+BJd"),t("5Dmo");var n=t("3S7+"),r=t("q1tI"),c=t.n(r),o=t("9kvl"),u=t("trCS"),l=(t("T2oS"),t("W9HT")),i=(t("Telt"),t("Tckk")),s=(t("lUTK"),t("BvKs")),m=t("fWQN"),p=t("mtLc"),h=t("yKVA"),d=t("879j"),f=t("cJ7L"),v=t("eFNv"),y=t("aIfO"),b=(t("qVdP"),t("jsC+")),g=t("0Owb"),E=t("PpiC"),_=t("TSYQ"),k=t.n(_),O=t("2Fcx"),C=t.n(O),j=function(e){var a=e.overlayClassName,t=Object(E["a"])(e,["overlayClassName"]);return c.a.createElement(b["a"],Object(g["a"])({overlayClassName:k()(C.a.container,a)},t))},N=j,T=t("bsDN"),w=t.n(T),R=function(e){Object(h["a"])(t,e);var a=Object(d["a"])(t);function t(){var e;Object(m["a"])(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return e=a.call.apply(a,[this].concat(r)),e.onMenuClick=function(a){var t=a.key;if("logout"!==t)o["c"].push("/account/".concat(t));else{var n=e.props.dispatch;n&&n({type:"login/logout"})}},e}return Object(p["a"])(t,[{key:"render",value:function(){var e=this.props,a=e.currentUser,t=void 0===a?{avatar:"",name:""}:a,n=e.menu,r=c.a.createElement(s["a"],{className:w.a.menu,selectedKeys:[],onClick:this.onMenuClick},n&&c.a.createElement(s["a"].Item,{key:"center"},c.a.createElement(f["a"],null),"\u4e2a\u4eba\u4e2d\u5fc3"),n&&c.a.createElement(s["a"].Item,{key:"settings"},c.a.createElement(v["a"],null),"\u4e2a\u4eba\u8bbe\u7f6e"),n&&c.a.createElement(s["a"].Divider,null),c.a.createElement(s["a"].Item,{key:"logout"},c.a.createElement(y["a"],null),"\u9000\u51fa\u767b\u5f55"));return t&&t.name?c.a.createElement(N,{overlay:r},c.a.createElement("span",{className:"".concat(w.a.action," ").concat(w.a.account)},c.a.createElement(i["a"],{size:"small",className:w.a.avatar,src:t.avatar,alt:"avatar"}),c.a.createElement("span",{className:w.a.name},t.name))):c.a.createElement("span",{className:"".concat(w.a.action," ").concat(w.a.account)},c.a.createElement(l["a"],{size:"small",style:{marginLeft:8,marginRight:8}}))}}]),t}(c.a.Component),U=Object(o["a"])((function(e){var a=e.user;return{currentUser:a.currentUser}}))(R),x=(t("2qtc"),t("kLXV")),I=(t("miYZ"),t("tsqr")),S=t("tJVT"),z=function(e){var a=e.currentUser,t=Object(r["useState"])(!1),n=Object(S["a"])(t,2),o=n[0],u=n[1],l="name=".concat(null===a||void 0===a?void 0:a.name,"&externalId=").concat(null===a||void 0===a?void 0:a.userid);return Object(r["useEffect"])((function(){console.log("Online: currentUser.name: "+(null===a||void 0===a?void 0:a.name)),"undefined"==typeof(null===a||void 0===a?void 0:a.name)&&I["default"].warning("\u65e0\u6cd5\u83b7\u53d6\u5f53\u524d\u7528\u6237 \u8bf7\u91cd\u65b0\u767b\u5f55")}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("a",{onClick:function(){return u(!0)}},"\u5de5\u5355"),c.a.createElement(x["a"],{centered:!0,visible:o,footer:!1,onOk:function(){return u(!1)},onCancel:function(){return u(!1)},width:960},c.a.createElement("iframe",{style:{border:0,width:"100%",height:"700px"},src:"https://atom.yulubot.com/client/?provider_id=26540&uid=T14nMnmrSHSpbEc1RDB1658804147219&".concat(l)})))},H=Object(o["a"])((function(e){var a=e.user;return{currentUser:a.currentUser}}))(z),D=function(e){var a=e.theme,t=e.layout,r=w.a.right;return"dark"===a&&"topmenu"===t&&(r="".concat(w.a.right,"  ").concat(w.a.dark)),c.a.createElement("div",{className:r},c.a.createElement("div",{className:w.a.action},c.a.createElement(H,null)),c.a.createElement(n["a"],{title:"\u6587\u6863"},c.a.createElement("a",{rel:"noopener noreferrer",className:w.a.action},"\u6587\u6863")),c.a.createElement(U,null),!1,c.a.createElement(u["a"],{className:w.a.action}))};a["a"]=Object(o["a"])((function(e){var a=e.settings;return{theme:a.navTheme,layout:a.layout}}))(D)},trCS:function(e,a,t){"use strict";t("lUTK");var n=t("BvKs"),r=t("9kvl"),c=t("q1tI"),o=t.n(c),u=t("rFY1"),l=t.n(u),i=function(e){e.className;var a=Object(r["b"])(),t=function(e){var a=e.key;return Object(r["e"])(a)},c=["zh-CN","zh-TW","en-US","pt-BR"],u={"zh-CN":"\u7b80\u4f53\u4e2d\u6587","zh-TW":"\u7e41\u4f53\u4e2d\u6587","en-US":"English","pt-BR":"Portugu\xeas"},i={"zh-CN":"\ud83c\udde8\ud83c\uddf3","zh-TW":"\ud83c\udded\ud83c\uddf0","en-US":"\ud83c\uddfa\ud83c\uddf8","pt-BR":"\ud83c\udde7\ud83c\uddf7"};n["a"],l.a.menu,c.map((function(e){return o.a.createElement(n["a"].Item,{key:e},o.a.createElement("span",{role:"img","aria-label":u[e]},i[e])," ",u[e])}));return o.a.createElement("span",null)};a["a"]=i}}]);