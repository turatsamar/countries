(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{53:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(41),i=n.n(r),o=(n(53),n(42)),s=n(23),u=n.n(s),p=n(16),l=n(33),j=(n(55),n(87)),f=n(94),d=(n(56),n(2));function m(e){var t=e.id===e.active?" active":"";return Object(d.jsx)("div",{onClick:function(){return e.activate(e.id)},className:"letter"+t,children:e.value})}n(58);var v=n(89),h=n(88),b=n(92),x=n(93),O=n(91),g=n(45),w=n.n(g);function k(e){var t;return Object(d.jsx)(v.a,{sx:{maxWidth:345},onClick:function(){window.location.href=e.maps.googleMaps},children:Object(d.jsxs)(h.a,{children:[Object(d.jsx)(b.a,{component:"img",height:"140",image:e.flags.svg,alt:e.name.official}),Object(d.jsxs)(x.a,{children:[Object(d.jsx)(O.a,{gutterBottom:!0,variant:"h5",component:"div",children:e.name.official}),null===(t=e.capital)||void 0===t?void 0:t.map((function(e,t){return Object(d.jsxs)(O.a,{variant:"subtitle1",children:[" ",e]},t)})),Object(d.jsxs)(O.a,{variant:"subtitle2",color:"text.secondary",children:["Population: ",w()(e.population)]}),Object(d.jsx)(O.a,{align:"left",variant:"body1",color:"text.secondary",children:e.description})]})]})})}function y(){return C.apply(this,arguments)}function C(){return(C=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.com/v3.1/all");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=function(){var e=Object(c.useState)(0),t=Object(p.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(-1),i=Object(p.a)(r,2),s=i[0],v=i[1],h=Object(c.useState)([]),b=Object(p.a)(h,2),x=b[0],O=b[1],g=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];Object(c.useEffect)((function(){Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,O(t);case 4:case"end":return e.stop()}}),e)})))()}),[]);var w=function(e){v(-1),a(e)},C=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,c,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v(t),(n=S[t]).description){e.next=13;break}return"https://en.wikipedia.org/w/api.php",c="?origin=*&format=json&action=query&prop=extracts&explaintext&exsentences=3&titles=".concat(n.name.common),e.next=7,fetch("https://en.wikipedia.org/w/api.php"+c);case 7:return a=e.sent,e.next=10,a.json();case 10:r=e.sent,x=x.map((function(e){return e.name.common===n.name.common&&(n.description=r.query.pages[Object.keys(r.query.pages)[0]].extract),e})),O(x);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=x.filter((function(e){var t;return(null===(t=e.name.common[0])||void 0===t?void 0:t.toUpperCase())===g[n]})),F=S.map((function(e,t){return Object(d.jsx)("div",{onClick:function(){return C(t)},className:"country-name",children:e.name.common},t)}));return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)(j.a,{divider:Object(d.jsx)(f.a,{orientation:"vertical",flexItem:!0}),direction:"row",spacing:1,children:g.map((function(e,t){return Object(d.jsx)(m,{id:t,activate:w,active:n,value:e},t)}))}),Object(d.jsx)("hr",{}),-1!==s?Object(d.jsx)(k,Object(o.a)({},S[s])):F]})})},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e&&e instanceof Function&&n.e(3).then(n.bind(null,95)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root")),F()}},[[70,1,2]]]);
//# sourceMappingURL=main.43a8398f.chunk.js.map