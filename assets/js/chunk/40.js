(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"662":function(e,n,t){"use strict";t.d(n,"a",(function(){return Page}));var a=t(151),c=t(2),s=t(5),r=(t(0),t(663),t(80));function Page(e){var n=e.title,t=e.children;return Object(r.jsxs)(c.l,{"className":"demo-page","children":[Object(r.jsxs)(c.l,{"className":"demo-nav","children":[Object(r.jsx)(a.B,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return s.default.navigateBack()}}),Object(r.jsxs)(c.l,{"className":"demo-nav__title","children":[n," "]})]}),t]})}},"663":function(e,n,t){},"664":function(e,n,t){"use strict";t.d(n,"a",(function(){return x}));var a=t(9),c=t.n(a),s=t(11),r=t.n(s),l=t(37),i=t.n(l),o=t(40),d=t.n(o),u=t(2),j=t(0),h=(t(665),t(80)),x=function(e){i()(Index,e);var n=d()(Index);function Index(){return c()(this,Index),n.call(this)}return r()(Index,[{"key":"render","value":function render(){var e=this.props,n=e.padding,t=e.title,a=e.card;return Object(h.jsxs)(u.l,{"className":"custom-class demo-block van-clearfix "+(n?"demo-block--padding":""),"children":[t&&Object(h.jsx)(u.l,{"className":"demo-block__title","children":t}),a?Object(h.jsx)(u.l,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(j.Component)},"665":function(e,n,t){},"695":function(e,n,t){},"749":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return C}));var a=t(9),c=t.n(a),s=t(11),r=t.n(s),l=t(60),i=t.n(l),o=t(37),d=t.n(o),u=t(40),j=t.n(u),h=t(15),x=t.n(h),b=t(0),m=t(5),O=t(2),v=t(151),f=t(662),g=t(664),p=(t(695),t(80)),C=function(e){d()(Index,e);var n=j()(Index);function Index(){var e;return c()(this,Index),e=n.call(this),x()(i()(e),"state",{"currentValue":50}),x()(i()(e),"onChange",(function(e){Object(m.showToast)({"icon":"none","title":"当前值：".concat(e.detail)})})),x()(i()(e),"onDrag",(function(n){e.setState({"currentValue":n.detail.value})})),e}return r()(Index,[{"key":"render","value":function render(){var e=this.state.currentValue;return Object(p.jsx)(f.a,{"title":"Slider 滑块","children":Object(p.jsxs)(p.Fragment,{"children":[Object(p.jsx)(g.a,{"title":"基础用法","children":Object(p.jsx)(v.W,{"value":"50","className":"slider","onChange":this.onChange})}),Object(p.jsx)(g.a,{"title":"双滑块","children":Object(p.jsx)(v.W,{"range":!0,"value":[20,60],"className":"slider","onChange":this.onChange})}),Object(p.jsx)(g.a,{"title":"指定选择范围","children":Object(p.jsx)(v.W,{"className":"slider","min":-50,"max":50,"onChange":this.onChange})}),Object(p.jsx)(g.a,{"title":"禁用","children":Object(p.jsx)(v.W,{"className":"slider","value":"50","disabled":!0})}),Object(p.jsx)(g.a,{"title":"指定步长","children":Object(p.jsx)(v.W,{"className":"slider","value":"50","step":"10","onChange":this.onChange})}),Object(p.jsx)(g.a,{"title":"自定义样式","children":Object(p.jsx)(v.W,{"value":"50","className":"slider","barHeight":"4px","activeColor":"#ee0a24"})}),Object(p.jsx)(g.a,{"title":"自定义按钮","children":Object(p.jsx)(v.W,{"value":e,"className":"slider","activeColor":"#ee0a24","onDrag":this.onDrag,"renderButton":function renderButton(){return Object(p.jsx)(p.Fragment,{"children":Object(p.jsx)(O.l,{"className":"custom-button","children":e})})}})})]})})}}]),Index}(b.Component)}}]);