(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"662":function(e,n,c){"use strict";c.d(n,"a",(function(){return Page}));var t=c(151),a=c(2),i=c(5),d=(c(0),c(663),c(80));function Page(e){var n=e.title,c=e.children;return Object(d.jsxs)(a.l,{"className":"demo-page","children":[Object(d.jsxs)(a.l,{"className":"demo-nav","children":[Object(d.jsx)(t.B,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return i.default.navigateBack()}}),Object(d.jsxs)(a.l,{"className":"demo-nav__title","children":[n," "]})]}),c]})}},"663":function(e,n,c){},"664":function(e,n,c){"use strict";c.d(n,"a",(function(){return b}));var t=c(9),a=c.n(t),i=c(11),d=c.n(i),s=c(37),r=c.n(s),o=c(40),l=c.n(o),h=c(2),j=c(0),u=(c(665),c(80)),b=function(e){r()(Index,e);var n=l()(Index);function Index(){return a()(this,Index),n.call(this)}return d()(Index,[{"key":"render","value":function render(){var e=this.props,n=e.padding,c=e.title,t=e.card;return Object(u.jsxs)(h.l,{"className":"custom-class demo-block van-clearfix "+(n?"demo-block--padding":""),"children":[c&&Object(u.jsx)(h.l,{"className":"demo-block__title","children":c}),t?Object(u.jsx)(h.l,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(j.Component)},"665":function(e,n,c){},"694":function(e,n,c){},"747":function(e,n,c){"use strict";c.r(n),c.d(n,"default",(function(){return p}));var t=c(9),a=c.n(t),i=c(11),d=c.n(i),s=c(60),r=c.n(s),o=c(37),l=c.n(o),h=c(40),j=c.n(h),u=c(15),b=c.n(u),x=c(0),g=c(151),f=c(662),m=c(664),k=(c(694),c(80)),p=function(e){l()(Index,e);var n=j()(Index);function Index(){var e;return a()(this,Index),e=n.call(this),b()(r()(e),"state",{"checked":!0,"checked2":!0}),b()(r()(e),"onChange",(function(n){var c=n.detail;e.setState({"checked":c})})),b()(r()(e),"onChange2",(function(n){var c=n.detail;g.mb.confirm({"selector":"#switch-demo","title":"提示","message":"是否切换开关？"}).then((function(){e.setState({"checked2":c})})).catch((function(e){console.log(e)}))})),e}return d()(Index,[{"key":"render","value":function render(){var e=this.state,n=e.checked,c=e.checked2;return Object(k.jsx)(f.a,{"title":"Switch 开关","children":Object(k.jsxs)(k.Fragment,{"children":[Object(k.jsx)(m.a,{"title":"基础用法","padding":!0,"children":Object(k.jsx)(g.cb,{"checked":n,"onChange":this.onChange})}),Object(k.jsx)(m.a,{"title":"禁用状态","padding":!0,"children":Object(k.jsx)(g.cb,{"checked":n,"disabled":!0,"onChange":this.onChange})}),Object(k.jsx)(m.a,{"title":"加载状态","padding":!0,"children":Object(k.jsx)(g.cb,{"checked":n,"loading":!0,"onChange":this.onChange})}),Object(k.jsx)(m.a,{"title":"自定义大小","padding":!0,"children":Object(k.jsx)(g.cb,{"checked":n,"size":"24px","onChange":this.onChange})}),Object(k.jsx)(m.a,{"title":"自定义颜色","padding":!0,"children":Object(k.jsx)(g.cb,{"checked":n,"activeColor":"#07c160","inactiveColor":"#ee0a24","onChange":this.onChange})}),Object(k.jsx)(m.a,{"title":"异步控制","padding":!0,"children":Object(k.jsx)(g.cb,{"checked":c,"size":"36px","onChange":this.onChange2})}),Object(k.jsx)(g.q,{"id":"switch-demo"})]})})}}]),Index}(x.Component)}}]);