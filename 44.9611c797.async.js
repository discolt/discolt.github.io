(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[44],{"+BJd":function(e,t,a){"use strict";a("EFp3"),a("6MrE")},"23dE":function(e,t,a){"use strict";a.d(t,"g",(function(){return n})),a.d(t,"i",(function(){return r})),a.d(t,"f",(function(){return o})),a.d(t,"a",(function(){return c})),a.d(t,"c",(function(){return i})),a.d(t,"e",(function(){return u})),a.d(t,"b",(function(){return s})),a.d(t,"d",(function(){return d})),a.d(t,"h",(function(){return m}));var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if("undefined"==typeof e)return"";if(0===e)return"\u7a7a";var a=1024,n=t<0?0:t,r=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],l=Math.floor(Math.log(e)/Math.log(a));return parseFloat((e/Math.pow(a,l)).toFixed(n))+" "+r[l]},r=function(e,t){return 0==t?100:Math.round(e/t*1e4)/100},l=function(e){return e<0?"\u7981\u6b62":n(e)},o=function(e){return"DEV"==e?"\u6d4b\u8bd5\u73af\u5883":"\u6b63\u5f0f\u73af\u5883"},c=function(e){return"cert_root"==e?"\u4e3b\u7528\u6237":"\u5b50\u7528\u6237"},i=function(e){return"*"==e?"\u65e0\u9650\u5236":e},u=function(e,t){return e?t>1e9?"\u65e0\u9650\u5236":t+"\u6b21/\u79d2":"\u7981\u7528"},s=function(e,t){return e?t>1e9?"\u65e0\u9650\u5236":l(t)+"/\u79d2":"\u7981\u7528"},d=function(e){return"undefined"==typeof e||null==e||e<1e4?"\u5c0f\u4e8e1\u4e07\u6b21":e/1e4+"\u4e07\u6b21"},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if("undefined"==typeof e)return"";if(0===e)return"\u7a7a";var a=1e3,n=t<0?0:t,r=["nCU","\u03bcCU","mCU","CU","KCU","MCU","GCU"],l=Math.floor(Math.log(e)/Math.log(a));return parseFloat((e/Math.pow(a,l)).toFixed(n))+" "+r[l]}},"6MrE":function(e,t,a){},"9xuE":function(e,t,a){"use strict";a.r(t);a("14J3");var n=a("BMrR"),r=(a("DYRE"),a("zeV3")),l=(a("+BJd"),a("mr32")),o=(a("jCWc"),a("kPKH")),c=(a("5Dmo"),a("3S7+")),i=a("PRG9"),u=a("23dE"),s=a("+YFz"),d=a("q1tI"),m=a.n(d),f=function(){return m.a.createElement("span",null,"\u8ba1\u7b97\u5355\u5143 ",m.a.createElement("br",null),"1Core4GB \u6bcf\u79d2\u7b97\u529b\u7d2f\u8ba1 = 1 CU",m.a.createElement("br",null),"1 \u03bcCU = 1000 nCU ",m.a.createElement("br",null),"1 mCU = 1000 \u03bcCU ",m.a.createElement("br",null),"1 CU  = 1000 mCU ",m.a.createElement("br",null),"1 KCU = 1000 CU ",m.a.createElement("br",null),"1 MCU = 1000 KCU ",m.a.createElement("br",null))},b=function(e){var t,a,d,b,v,E,p,g=e.loading,y=e.analysisData;return m.a.createElement(n["a"],{gutter:24},m.a.createElement(o["a"],{span:8},m.a.createElement(i["a"],{loading:g,bordered:!1,title:"\u5b58\u50a8\u6d88\u8017",action:m.a.createElement(c["a"],{title:"\u5b58\u50a8\u7a7a\u95f4\u5e73\u5747\u503c"},m.a.createElement(s["a"],null)),total:y.summaryData&&Object(u["g"])(y.summaryData.storeUsage)||0,footer:m.a.createElement(i["b"],{label:"\u8fd124\u5c0f\u65f6\u589e\u957f",value:y.summaryData&&Object(u["g"])(y.summaryData.storeDerivative)}),contentHeight:46},m.a.createElement(i["d"],{color:"#d3c6a6",data:y.storeData}))),m.a.createElement(o["a"],{span:8},m.a.createElement(i["a"],{loading:g,bordered:!1,title:"\u6d41\u91cf\u6d88\u8017",action:m.a.createElement(c["a"],{title:"\u603b\u6d41\u91cf\u503c \u5305\u542b\u7f51\u7edc\u6d41\u5165\u6d41\u51fa\u91cf\u603b\u548c"},m.a.createElement(s["a"],null)),total:y.summaryData&&Object(u["g"])(y.summaryData.trafficUsage)||0,footer:m.a.createElement(i["b"],{label:"\u8fd124\u5c0f\u65f6\u6d41\u91cf",value:""}),contentHeight:46},m.a.createElement(i["c"],{color:"#999d9c",data:y.trafficData}))),m.a.createElement(o["a"],{span:8},m.a.createElement(i["a"],{loading:g,bordered:!1,title:"\u8ba1\u7b97\u6d88\u8017",action:m.a.createElement(c["a"],{title:f()},m.a.createElement(s["a"],null)),total:y.summaryData&&Object(u["h"])(y.summaryData.calcUsage)||0,footer:m.a.createElement(i["b"],{label:"\u8fd124\u5c0f\u65f6\u8ba1\u7b97",value:""}),contentHeight:46},m.a.createElement(i["c"],{color:"#d9d6c3",data:y.calcData}))),m.a.createElement(o["a"],{span:8,style:{marginTop:24}},m.a.createElement(i["a"],{loading:g,bordered:!1,title:"\u5b58\u50a8\u5206\u5e03",footer:m.a.createElement(i["b"],{label:"\u603b\u5b58\u50a8\u7a7a\u95f4".concat(Object(u["g"])(null===y||void 0===y||null===(t=y.store)||void 0===t?void 0:t.total)),value:""}),contentHeight:68},m.a.createElement(r["b"],{direction:"vertical"},m.a.createElement(l["a"],{color:"#508a88",style:{width:Math.max(120,(null===y||void 0===y||null===(a=y.store)||void 0===a?void 0:a.hot)/(null===y||void 0===y||null===(d=y.store)||void 0===d?void 0:d.total)*260)}},"\u70ed\u5b58\u50a8 ",Object(u["g"])(null===y||void 0===y||null===(b=y.store)||void 0===b?void 0:b.hot)),m.a.createElement(l["a"],{color:"#70a19f",style:{width:Math.max(120,(null===y||void 0===y||null===(v=y.store)||void 0===v?void 0:v.warm)/(null===y||void 0===y||null===(E=y.store)||void 0===E?void 0:E.total)*260)}},"\u51b7\u5b58\u50a8 ",Object(u["g"])(null===y||void 0===y||null===(p=y.store)||void 0===p?void 0:p.warm))))),m.a.createElement(o["a"],{span:16,style:{marginTop:24}},m.a.createElement(i["a"],{loading:g,bordered:!1,title:"\u8bbf\u95ee\u91cf",total:y.summaryData&&y.summaryData.visit,footer:m.a.createElement(i["b"],{label:"\u8fd124\u5c0f\u65f6\u8bbf\u95ee\u91cf",value:""}),contentHeight:68},m.a.createElement(i["c"],{color:"#5e7c85",data:y.visitData}))))};t["default"]=b},mr32:function(e,t,a){"use strict";var n=a("rePB"),r=a("wx14"),l=a("ODXe"),o=a("q1tI"),c=a("TSYQ"),i=a.n(c),u=a("bT9E"),s=a("4i/N"),d=a("H84U"),m=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},f=function(e){var t,a=e.prefixCls,l=e.className,c=e.checked,u=e.onChange,s=e.onClick,f=m(e,["prefixCls","className","checked","onChange","onClick"]),b=o["useContext"](d["b"]),v=b.getPrefixCls,E=function(e){null===u||void 0===u||u(!c),null===s||void 0===s||s(e)},p=v("tag",a),g=i()(p,(t={},Object(n["a"])(t,"".concat(p,"-checkable"),!0),Object(n["a"])(t,"".concat(p,"-checkable-checked"),c),t),l);return o["createElement"]("span",Object(r["a"])({},f,{className:g,onClick:E}))},b=f,v=a("09Wf"),E=a("g0mS"),p=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},g=new RegExp("^(".concat(v["a"].join("|"),")(-inverse)?$")),y=new RegExp("^(".concat(v["b"].join("|"),")$")),h=function(e,t){var a,c=e.prefixCls,m=e.className,f=e.style,b=e.children,v=e.icon,h=e.color,C=e.onClose,O=e.closeIcon,j=e.closable,w=void 0!==j&&j,U=p(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),x=o["useContext"](d["b"]),D=x.getPrefixCls,M=x.direction,k=o["useState"](!0),B=Object(l["a"])(k,2),P=B[0],N=B[1];o["useEffect"]((function(){"visible"in U&&N(U.visible)}),[U.visible]);var S=function(){return!!h&&(g.test(h)||y.test(h))},F=Object(r["a"])({backgroundColor:h&&!S()?h:void 0},f),H=S(),T=D("tag",c),I=i()(T,(a={},Object(n["a"])(a,"".concat(T,"-").concat(h),H),Object(n["a"])(a,"".concat(T,"-has-color"),h&&!H),Object(n["a"])(a,"".concat(T,"-hidden"),!P),Object(n["a"])(a,"".concat(T,"-rtl"),"rtl"===M),a),m),R=function(e){e.stopPropagation(),null===C||void 0===C||C(e),e.defaultPrevented||"visible"in U||N(!1)},J=function(){return w?O?o["createElement"]("span",{className:"".concat(T,"-close-icon"),onClick:R},O):o["createElement"](s["a"],{className:"".concat(T,"-close-icon"),onClick:R}):null},K="onClick"in U||b&&"a"===b.type,G=Object(u["a"])(U,["visible"]),Y=v||null,q=Y?o["createElement"](o["Fragment"],null,Y,o["createElement"]("span",null,b)):b,z=o["createElement"]("span",Object(r["a"])({},G,{ref:t,className:I,style:F}),q,J());return K?o["createElement"](E["a"],null,z):z},C=o["forwardRef"](h);C.displayName="Tag",C.CheckableTag=b;t["a"]=C}}]);