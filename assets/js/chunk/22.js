(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"662":function(e,t,n){"use strict";n.d(t,"a",(function(){return Page}));var c=n(151),i=n(2),s=n(5),o=(n(0),n(663),n(80));function Page(e){var t=e.title,n=e.children;return Object(o.jsxs)(i.l,{"className":"demo-page","children":[Object(o.jsxs)(i.l,{"className":"demo-nav","children":[Object(o.jsx)(c.B,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return s.default.navigateBack()}}),Object(o.jsxs)(i.l,{"className":"demo-nav__title","children":[t," "]})]}),n]})}},"663":function(e,t,n){},"664":function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var c=n(9),i=n.n(c),s=n(11),o=n.n(s),a=n(37),r=n.n(a),l=n(40),d=n.n(l),u=n(2),j=n(0),m=(n(665),n(80)),h=function(e){r()(Index,e);var t=d()(Index);function Index(){return i()(this,Index),t.call(this)}return o()(Index,[{"key":"render","value":function render(){var e=this.props,t=e.padding,n=e.title,c=e.card;return Object(m.jsxs)(u.l,{"className":"custom-class demo-block van-clearfix "+(t?"demo-block--padding":""),"children":[n&&Object(m.jsx)(u.l,{"className":"demo-block__title","children":n}),c?Object(m.jsx)(u.l,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(j.Component)},"665":function(e,t,n){},"681":function(e,t,n){},"733":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var c=n(9),i=n.n(c),s=n(11),o=n.n(s),a=n(60),r=n.n(a),l=n(37),d=n.n(l),u=n(40),j=n.n(u),m=n(15),h=n.n(m),x=n(2),b=n(0),f=n(151),O=n(662),p=n(664),v=(n(681),n(80)),k=function(e){d()(Index,e);var t=j()(Index);function Index(){var e;return i()(this,Index),e=t.call(this),h()(r()(e),"state",{"time":108e6,"timeData":{}}),h()(r()(e),"onChange",(function(t){e.setState({"timeData":t.detail})})),h()(r()(e),"start",(function(){e.controlCountDown.start()})),h()(r()(e),"pause",(function(){e.controlCountDown.pause()})),h()(r()(e),"reset",(function(){e.controlCountDown.reset()})),h()(r()(e),"finished",(function(){Object(f.ob)("倒计时结束")})),e}return o()(Index,[{"key":"render","value":function render(){var e=this,t=this.state,n=t.time,c=t.timeData;return Object(v.jsx)(O.a,{"title":"CountDown 倒计时","children":Object(v.jsxs)(v.Fragment,{"children":[Object(v.jsx)(p.a,{"title":"基础用法","children":Object(v.jsx)(f.o,{"time":n})}),Object(v.jsx)(p.a,{"title":"自定义格式","children":Object(v.jsx)(f.o,{"time":n,"format":"DD 天 HH 时 mm 分 ss 秒"})}),Object(v.jsx)(p.a,{"title":"毫秒级渲染","children":Object(v.jsx)(f.o,{"millisecond":!0,"time":n,"format":"HH:mm:ss:SSS"})}),Object(v.jsx)(p.a,{"title":"自定义样式","children":Object(v.jsxs)(f.o,{"time":n,"onChange":this.onChange,"children":[Object(v.jsx)(x.i,{"className":"item","children":c.hours}),Object(v.jsx)(x.i,{"className":"item","children":c.minutes}),Object(v.jsx)(x.i,{"className":"item","children":c.seconds})]})}),Object(v.jsxs)(p.a,{"title":"手动控制","children":[Object(v.jsx)(f.o,{"className":"control-count-down","ref":function ref(t){e.controlCountDown=t},"millisecond":!0,"time":3e3,"autoStart":!1,"format":"ss:SSS","onFinish":this.finished}),Object(v.jsxs)(f.z,{"clickable":!0,"columnNum":"3","children":[Object(v.jsx)(f.A,{"text":"开始","icon":"play-circle-o","onClick":this.start}),Object(v.jsx)(f.A,{"text":"暂停","icon":"pause-circle-o","onClick":this.pause}),Object(v.jsx)(f.A,{"text":"重置","icon":"replay","onClick":this.reset})]})]}),Object(v.jsx)(f.ib,{"id":"van-toast"})]})})}}]),Index}(b.Component)}}]);