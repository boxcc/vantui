(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"292":function(e,t,n){var r=n(358),o=n(363),a=n(351),i=n(377);e.exports=function _slicedToArray(e,t){return r(e)||o(e,t)||a(e,t)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},"300":function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(3),o=n.n(r),a=n(6),i=n.n(a),c=n(16),s=n.n(c),l=n(17),u=n.n(l),d=n(279),f=n(27),v=(n(303),n(44)),h=function(e){s()(Index,e);var t=u()(Index);function Index(){return o()(this,Index),t.call(this)}return i()(Index,[{"key":"render","value":function render(){var e=this.props,t=e.padding,n=e.title,r=e.card;return Object(v.jsxs)(d.m,{"className":"custom-class demo-block van-clearfix "+(t?"demo-block--padding":""),"children":[n&&Object(v.jsx)(d.m,{"className":"demo-block__title","children":n}),r?Object(v.jsx)(d.m,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(f.Component)},"301":function(e,t,n){var r=n(394),o=n(342),a=n(326),i=n(294)("iterator");e.exports=function(e){if(null!=e)return o(e,i)||o(e,"@@iterator")||a[r(e)]}},"303":function(e,t,n){},"311":function(e,t,n){var r=n(373);e.exports=r},"315":function(e,t,n){},"319":function(e,t,n){var r=n(369);e.exports=r},"322":function(e,t,n){e.exports=n(311)},"329":function(e,t,n){"use strict";n.d(t,"a",(function(){return Loading}));var r=n(285),o=n.n(r),a=n(292),i=n.n(a),c=n(284),s=n.n(c),l=n(322),u=n.n(l),d=n(314),f=n.n(d),v=n(281),h=n.n(v),p=n(286),b=n.n(p),j=n(283),x=n.n(j),m=n(287),y=n.n(m),g=n(282),O=n.n(g),w=n(288),_=n.n(w),S=n(279),N=n(27),k=n(280),A=n(309);function textStyle(e){return Object(k.c)({"font-size":Object(A.a)(e.textSize)})}var C=n(44),z=["vertical","type","color","size","textSize","className","children","style"];function ownKeys(e,t){var n=h()(e);if(b.a){var r=b()(e);t&&(r=x()(r).call(r,(function(t){return y()(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n,r=null!=arguments[t]?arguments[t]:{};if(t%2)O()(n=ownKeys(Object(r),!0)).call(n,(function(t){o()(e,t,r[t])}));else if(_.a)Object.defineProperties(e,_()(r));else{var a;O()(a=ownKeys(Object(r))).call(a,(function(t){Object.defineProperty(e,t,y()(r,t))}))}}return e}function Loading(e){var t,n=e.vertical,r=e.type,o=void 0===r?"circular":r,a=e.color,c=e.size,l=e.textSize,d=e.className,v=e.children,h=e.style,p=s()(e,z),b=Object(N.useState)(u()({"length":12})),j=i()(b,1)[0];return Object(C.jsxs)(S.m,_objectSpread(_objectSpread({"className":" "+k.b("loading",{"vertical":n})+" "+d,"style":k.c([h])},p),{},{"children":[Object(C.jsx)(S.m,{"className":"van-loading__spinner van-loading__spinner--"+o,"style":(t={"color":a,"size":c},Object(k.c)({"color":t.color,"width":Object(A.a)(t.size),"height":Object(A.a)(t.size)})),"children":"spinner"===o&&Object(C.jsx)(S.a,{"children":f()(j).call(j,(function(e,t){return Object(C.jsx)(S.m,{"className":"van-loading__dot"},"van-loading__dot_".concat(t))}))})}),Object(C.jsx)(S.m,{"className":"van-loading__text","style":textStyle({"textSize":l}),"children":v})]}))}t.b=Loading},"349":function(e,t,n){e.exports=n(359)},"350":function(e,t,n){e.exports=n(364)},"351":function(e,t,n){var r=n(367),o=n(352),a=n(357);e.exports=function _unsupportedIterableToArray(e,t){var n;if(e){if("string"==typeof e)return a(e,t);var i=r(n=Object.prototype.toString.call(e)).call(n,8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?o(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},"352":function(e,t,n){e.exports=n(372)},"353":function(e,t,n){var r=n(299),o=n(308),a=n(342);e.exports=function(e,t,n){var i,c;o(e);try{if(!(i=a(e,"return"))){if("throw"===t)throw n;return n}i=r(i,e)}catch(e){c=!0,i=e}if("throw"===t)throw n;if(c)throw i;return o(i),n}},"354":function(e,t,n){var r=n(294),o=n(326),a=r("iterator"),i=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||i[a]===e)}},"355":function(e,t,n){var r=n(290),o=n(299),a=n(317),i=n(308),c=n(414),s=n(301),l=r.TypeError;e.exports=function(e,t){var n=arguments.length<2?s(e):t;if(a(n))return i(o(n,e));throw l(c(e)+" is not iterable")}},"356":function(e,t,n){var r=n(294)("iterator"),o=!1;try{var a=0,i={"next":function(){return{"done":!!a++}},"return":function(){o=!0}};i[r]=function(){return this},Array.from(i,(function(){throw 2}))}catch(e){}e.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var a={};a[r]=function(){return{"next":function(){return{"done":n=!0}}}},e(a)}catch(e){}return n}},"357":function(e,t){e.exports=function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},"358":function(e,t,n){var r=n(349);e.exports=function _arrayWithHoles(e){if(r(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},"359":function(e,t,n){var r=n(360);e.exports=r},"360":function(e,t,n){var r=n(361);e.exports=r},"361":function(e,t,n){n(362);var r=n(296);e.exports=r.Array.isArray},"362":function(e,t,n){n(289)({"target":"Array","stat":!0},{"isArray":n(320)})},"363":function(e,t,n){var r=n(416),o=n(350);e.exports=function _iterableToArrayLimit(e,t){var n=null==e?null:void 0!==r&&o(e)||e["@@iterator"];if(null!=n){var a,i,c=[],s=!0,l=!1;try{for(n=n.call(e);!(s=(a=n.next()).done)&&(c.push(a.value),!t||c.length!==t);s=!0);}catch(e){l=!0,i=e}finally{try{s||null==n.return||n.return()}finally{if(l)throw i}}return c}},e.exports.default=e.exports,e.exports.__esModule=!0},"364":function(e,t,n){var r=n(365);e.exports=r},"365":function(e,t,n){var r=n(366);n(401),e.exports=r},"366":function(e,t,n){n(407),n(340);var r=n(301);e.exports=r},"367":function(e,t,n){e.exports=n(368)},"368":function(e,t,n){var r=n(319);e.exports=r},"369":function(e,t,n){var r=n(295),o=n(370),a=Array.prototype;e.exports=function(e){var t=e.slice;return e===a||r(a,e)&&t===a.slice?o:t}},"370":function(e,t,n){n(371);var r=n(298);e.exports=r("Array").slice},"371":function(e,t,n){"use strict";var r=n(289),o=n(290),a=n(320),i=n(339),c=n(388),s=n(410),l=n(305),u=n(392),d=n(324),f=n(294),v=n(406),h=n(400),p=v("slice"),b=f("species"),j=o.Array,x=Math.max;r({"target":"Array","proto":!0,"forced":!p},{"slice":function slice(e,t){var n,r,o,f=u(this),v=l(f),p=s(e,v),m=s(void 0===t?v:t,v);if(a(f)&&(n=f.constructor,(i(n)&&(n===j||a(n.prototype))||c(n)&&null===(n=n[b]))&&(n=void 0),n===j||void 0===n))return h(f,p,m);for(r=new(void 0===n?j:n)(x(m-p,0)),o=0;p<m;p++,o++)p in f&&d(r,o,f[p]);return r.length=o,r}})},"372":function(e,t,n){var r=n(311);e.exports=r},"373":function(e,t,n){n(340),n(374);var r=n(296);e.exports=r.Array.from},"374":function(e,t,n){var r=n(289),o=n(375);r({"target":"Array","stat":!0,"forced":!n(356)((function(e){Array.from(e)}))},{"from":o})},"375":function(e,t,n){"use strict";var r=n(290),o=n(409),a=n(299),i=n(307),c=n(376),s=n(354),l=n(339),u=n(305),d=n(324),f=n(355),v=n(301),h=r.Array;e.exports=function from(e){var t=i(e),n=l(this),r=arguments.length,p=r>1?arguments[1]:void 0,b=void 0!==p;b&&(p=o(p,r>2?arguments[2]:void 0));var j,x,m,y,g,O,w=v(t),_=0;if(!w||this==h&&s(w))for(j=u(t),x=n?new this(j):h(j);j>_;_++)O=b?p(t[_],_):t[_],d(x,_,O);else for(g=(y=f(t,w)).next,x=n?new this:[];!(m=a(g,y)).done;_++)O=b?c(y,p,[m.value,_],!0):m.value,d(x,_,O);return x.length=_,x}},"376":function(e,t,n){var r=n(308),o=n(353);e.exports=function(e,t,n,a){try{return a?t(r(n)[0],n[1]):t(n)}catch(t){o(e,"throw",t)}}},"377":function(e,t){e.exports=function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},"436":function(e,t,n){"use strict";n(291),n(302),n(304),n(437)},"437":function(e,t,n){},"439":function(e,t,n){"use strict";var r=n(281),o=n.n(r),a=n(286),i=n.n(a),c=n(283),s=n.n(c),l=n(287),u=n.n(l),d=n(282),f=n.n(d),v=n(288),h=n.n(v),p=n(285),b=n.n(p),j=n(292),x=n.n(j),m=n(284),y=n.n(m),g=n(27),O=n(279),w=n(280),_=n(306),S=n(309);var N={"none":"scaleToFill","fill":"scaleToFill","cover":"aspectFill","contain":"aspectFit","widthFix":"widthFix","heightFix":"heightFix","scaleDown":"aspectFit"};function mode(e){return N[e]}var k=n(44),A=["src","round","width","height","radius","lazyLoad","showMenuByLongpress","fit","showError","showLoading","className","style","renderError","renderLoading"];function ownKeys(e,t){var n=o()(e);if(i.a){var r=i()(e);t&&(r=s()(r).call(r,(function(t){return u()(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n,r=null!=arguments[t]?arguments[t]:{};if(t%2)f()(n=ownKeys(Object(r),!0)).call(n,(function(t){b()(e,t,r[t])}));else if(h.a)Object.defineProperties(e,h()(r));else{var o;f()(o=ownKeys(Object(r))).call(o,(function(t){Object.defineProperty(e,t,u()(r,t))}))}}return e}t.a=function Image(e){var t=e.src,n=e.round,r=e.width,o=e.height,a=e.radius,i=e.lazyLoad,c=e.showMenuByLongpress,s=e.fit,l=e.showError,u=void 0===l||l,d=e.showLoading,f=void 0===d||d,v=e.className,h=e.style,p=e.renderError,b=e.renderLoading,j=y()(e,A),m=Object(g.useState)(),N=x()(m,2),C=N[0],z=N[1],I=Object(g.useState)(!1),L=x()(I,2),F=L[0],K=L[1];Object(g.useEffect)((function(){void 0===C&&z(!0),K(!1)}),[C]);var M,E=Object(g.useCallback)((function(){z(!1)}),[]),P=Object(g.useCallback)((function(){K(!0)}),[]),T=Object(g.useMemo)((function(){var e={};return"heightFix"!==s&&"widthFix"!==s||(e={"display":"flex","alignItems":"center","justifyContent":"center"}),e}),[s]);return Object(k.jsxs)(O.m,_objectSpread(_objectSpread({"style":w.c([(M={"width":r,"height":o,"radius":a},Object(w.c)([{"width":Object(S.a)(M.width),"height":Object(S.a)(M.height),"border-radius":Object(S.a)(M.radius)},M.radius?"overflow: hidden":null])),h]),"className":" "+w.b("image",{"round":n})+" "+v,"onClick":j.onClick},j),{},{"children":[!F&&Object(k.jsx)(O.e,{"src":t,"mode":mode(s||"none"),"lazyLoad":i,"className":"image-class van-image__img","showMenuByLongpress":c,"onLoad":E,"onError":P,"style":T}),C&&f&&Object(k.jsx)(O.m,{"className":"loading-class van-image__loading","children":b||Object(k.jsx)(_.b,{"name":"photo","className":"van-image__loading-icon"})}),F&&u&&Object(k.jsx)(O.m,{"className":"error-class van-image__error","children":p||Object(k.jsx)(_.b,{"name":"photo-fail","className":"van-image__error-icon"})})]}))}},"506":function(e,t,n){"use strict";n(291),n(315),n(507)},"507":function(e,t,n){},"539":function(e,t,n){"use strict";var r=n(281),o=n.n(r),a=n(286),i=n.n(a),c=n(283),s=n.n(c),l=n(287),u=n.n(l),d=n(282),f=n.n(d),v=n(288),h=n.n(v),p=n(285),b=n.n(p),j=n(284),x=n.n(j),m=n(27),y=n(279),g=n(280),O=n(329),w=n(312),_=n(309);function loadingColor(e){return e.checked?e.activeColor||"#1989fa":e.inactiveColor||"#969799"}var S=n(44),N=["checked","loading","disabled","activeColor","inactiveColor","size","activeValue","inactiveValue","onChange","style","className"];function ownKeys(e,t){var n=o()(e);if(i.a){var r=i()(e);t&&(r=s()(r).call(r,(function(t){return u()(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n,r=null!=arguments[t]?arguments[t]:{};if(t%2)f()(n=ownKeys(Object(r),!0)).call(n,(function(t){b()(e,t,r[t])}));else if(h.a)Object.defineProperties(e,h()(r));else{var o;f()(o=ownKeys(Object(r))).call(o,(function(t){Object.defineProperty(e,t,u()(r,t))}))}}return e}t.a=function Switch(e){var t,n,r=e.checked,o=void 0!==r&&r,a=e.loading,i=void 0!==a&&a,c=e.disabled,s=void 0!==c&&c,l=e.activeColor,u=void 0===l?"#1989fa":l,d=e.inactiveColor,f=void 0===d?"#ffffff":d,v=e.size,h=void 0===v?"60":v,p=e.activeValue,b=void 0===p||p,j=e.inactiveValue,k=void 0!==j&&j,A=e.onChange,C=e.style,z=e.className,I=x()(e,N),L=Object(m.useCallback)((function(e){if(!s&&!i){var t=o===b?k:b;Object.defineProperty(e,"detail",{"value":t}),null==A||A(e)}}),[b,o,s,k,i,A]);return Object(S.jsx)(y.m,_objectSpread(_objectSpread({"className":g.b("switch",{"on":o===b,"disabled":s})+"  ".concat(z),"style":g.c([(t={"size":h,"checked":o,"activeColor":u,"inactiveColor":f},n=t.checked?t.activeColor:t.inactiveColor,Object(w.a)({"font-size":Object(_.a)(t.size),"background-color":n})),C])},I),{},{"onClick":L,"children":Object(S.jsx)(y.m,{"className":"van-switch__node node-class","children":i&&Object(S.jsx)(O.b,{"color":loadingColor({"checked":o,"activeColor":u,"inactiveColor":f}),"className":"van-switch__loading"})})}))}},"835":function(e,t,n){},"836":function(e,t,n){},"898":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return q}));n(436);var r=n(439),o=(n(506),n(539)),a=(n(291),n(835),n(281)),i=n.n(a),c=n(286),s=n.n(c),l=n(283),u=n.n(l),d=n(287),f=n.n(d),v=n(282),h=n.n(v),p=n(288),b=n.n(p),j=n(285),x=n.n(j),m=n(284),y=n.n(m),g=n(292),O=n.n(g),w=n(322),_=n.n(w),S=n(314),N=n.n(S),k=n(31),A=n(27),C=n(279),z=n(280),I=n(44),L=["row","animate","avatar","avatarShape","avatarSize","titleWidth","title","rowWidth","loading","children","style","className"];function ownKeys(e,t){var n=i()(e);if(s.a){var r=s()(e);t&&(r=u()(r).call(r,(function(t){return f()(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n,r=null!=arguments[t]?arguments[t]:{};if(t%2)h()(n=ownKeys(Object(r),!0)).call(n,(function(t){x()(e,t,r[t])}));else if(b.a)Object.defineProperties(e,b()(r));else{var o;h()(o=ownKeys(Object(r))).call(o,(function(t){Object.defineProperty(e,t,f()(r,t))}))}}return e}var F=function Skeleton(e){var t=Object(A.useState)({"isArray":!1,"rowArray":[]}),n=O()(t,2),r=n[0],o=n[1],a=r.isArray,i=r.rowArray,c=e.row,s=void 0===c?0:c,l=e.animate,u=void 0===l||l,d=e.avatar,f=e.avatarShape,v=void 0===f?"round":f,h=e.avatarSize,p=void 0===h?k.default.pxTransform(64):h,b=e.titleWidth,j=void 0===b?"40%":b,x=e.title,m=e.rowWidth,g=void 0===m?"100%":m,w=e.loading,S=void 0===w||w,F=e.children,K=e.style,M=e.className,E=y()(e,L);return Object(A.useEffect)((function(){o((function(e){return _objectSpread(_objectSpread({},e),{},{"rowArray":_()({"length":s})})}))}),[s]),Object(A.useEffect)((function(){o((function(e){return _objectSpread(_objectSpread({},e),{},{"isArray":g instanceof Array})}))}),[g]),S?Object(I.jsxs)(C.m,_objectSpread(_objectSpread({"className":" "+z.b("skeleton",[{"animate":u}])+" ".concat(M||""),"style":K},E),{},{"children":[d&&Object(I.jsx)(C.m,{"className":"avatar-class "+z.b("skeleton__avatar",[v]),"style":"width:"+p+";height:"+p}),Object(I.jsxs)(C.m,{"className":z.b("skeleton__content"),"children":[x&&Object(I.jsx)(C.m,{"className":"title-class "+z.b("skeleton__title"),"style":"width:"+j}),N()(i).call(i,(function(e,t){return Object(I.jsx)(C.m,{"className":"row-class "+z.b("skeleton__row"),"style":"width:"+(a?g[t]:g)},t)}))]})]})):Object(I.jsx)(C.m,{"className":z.b("skeleton__content"),"children":F})},K=n(3),M=n.n(K),E=n(6),P=n.n(E),T=n(24),W=n.n(T),V=n(16),B=n.n(V),R=n(17),J=n.n(R),U=n(9),D=n.n(U),H=n(321),$=n(300),q=(n(836),function(e){B()(Index,e);var t=J()(Index);function Index(){var e;return M()(this,Index),e=t.call(this),D()(W()(e),"state",{"show":!1}),D()(W()(e),"onChange",(function(t){var n=t.detail;e.setState({"show":n})})),e}return P()(Index,[{"key":"render","value":function render(){var e=this.state.show;return Object(I.jsx)(H.a,{"title":"Skeleton 骨架屏","children":Object(I.jsxs)(I.Fragment,{"children":[Object(I.jsx)($.a,{"title":"基础用法","children":Object(I.jsx)(F,{"title":!0,"row":"3","rowWidth":["100%","100%","80%"]})}),Object(I.jsx)($.a,{"title":"显示头像","children":Object(I.jsx)(F,{"title":!0,"avatar":!0,"row":"3"})}),Object(I.jsxs)($.a,{"title":"展示子组件","children":[Object(I.jsx)(o.a,{"checked":e,"size":"24px","onChange":this.onChange}),Object(I.jsx)(F,{"title":!0,"avatar":!0,"row":"3","loading":!e,"children":Object(I.jsxs)(C.m,{"className":"demo-preview","children":[Object(I.jsx)(r.a,{"className":"demo-preview-img","src":"https://img.yzcdn.cn/vant/logo.png"}),Object(I.jsxs)(C.m,{"className":"demo-content","children":[Object(I.jsx)(C.m,{"className":"demo-content-h3","children":"关于 @antmjs/vantui"}),Object(I.jsx)(C.m,{"className":"domo-content-p","children":"一套基于 vant-weapp 开发的在 Taro-React / React 框架中使用的多端 UI 组件库，两者基于相同的视觉规范，提供一致的 API 接口，助力开发者快速搭建小程序应用。"})]})]})})]})]})})}}]),Index}(A.Component))}}]);