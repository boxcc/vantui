(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"662":function(e,n,t){"use strict";t.d(n,"a",(function(){return Page}));var c=t(151),i=t(2),r=t(5),s=(t(0),t(663),t(80));function Page(e){var n=e.title,t=e.children;return Object(s.jsxs)(i.l,{"className":"demo-page","children":[Object(s.jsxs)(i.l,{"className":"demo-nav","children":[Object(s.jsx)(c.B,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return r.default.navigateBack()}}),Object(s.jsxs)(i.l,{"className":"demo-nav__title","children":[n," "]})]}),t]})}},"663":function(e,n,t){},"664":function(e,n,t){"use strict";t.d(n,"a",(function(){return x}));var c=t(9),i=t.n(c),r=t(11),s=t.n(r),l=t(37),a=t.n(l),o=t(40),d=t.n(o),u=t(2),h=t(0),j=(t(665),t(80)),x=function(e){a()(Index,e);var n=d()(Index);function Index(){return i()(this,Index),n.call(this)}return s()(Index,[{"key":"render","value":function render(){var e=this.props,n=e.padding,t=e.title,c=e.card;return Object(j.jsxs)(u.l,{"className":"custom-class demo-block van-clearfix "+(n?"demo-block--padding":""),"children":[t&&Object(j.jsx)(u.l,{"className":"demo-block__title","children":t}),c?Object(j.jsx)(u.l,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(h.Component)},"665":function(e,n,t){},"687":function(e,n,t){},"739":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return v}));var c=t(9),i=t.n(c),r=t(11),s=t.n(r),l=t(60),a=t.n(l),o=t(37),d=t.n(o),u=t(40),h=t.n(u),j=t(15),x=t.n(j),f=t(0),b=t(5),m=t(151),k=t(662),O=t(664),p=(t(687),t(80)),v=function(e){d()(Index,e);var n=h()(Index);function Index(){var e;return i()(this,Index),e=n.call(this),x()(a()(e),"onClickLeft",(function(){Object(b.showToast)({"title":"点击返回","icon":"none"})})),x()(a()(e),"onClickRight",(function(){Object(b.showToast)({"title":"点击按钮","icon":"none"})})),e}return s()(Index,[{"key":"render","value":function render(){return Object(p.jsx)(k.a,{"title":"NavBar 导航栏","children":Object(p.jsxs)(p.Fragment,{"children":[Object(p.jsx)(O.a,{"title":"基础用法","children":Object(p.jsx)(m.G,{"title":"标题","rightText":"按钮","leftArrow":!0,"onClickLeft":this.onClickLeft,"onClickRight":this.onClickRight})}),Object(p.jsx)(O.a,{"title":"高级用法","children":Object(p.jsx)(m.G,{"title":"标题","leftText":"返回","leftArrow":!0,"renderRight":Object(p.jsx)(p.Fragment,{"children":Object(p.jsx)(m.B,{"name":"search","className":"icon","size":"36"})})})})]})})}}]),Index}(f.Component)}}]);