{"source":"webpackJsonp([0],{390:function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0}),e.default=void 0;var u,r=p(n(1)),i=p(n(9)),a=p(n(6)),o=p(n(8)),f=p(n(10)),c=p(n(11)),d=n(0),s=(p(d),n(48)),l=p(n(139));function p(t){return t&&t.__esModule?t:{default:t}}var v=(0,s.wrapper)(l.default)(u=function(t){function e(){return(0,a.default)(this,e),(0,f.default)(this,(e.__proto__||(0,i.default)(e)).apply(this,arguments))}return(0,c.default)(e,t),(0,o.default)(e,[{key:\"render\",value:function(){return this.props.monkeyKing((0,r.default)({},this.props,{path:\"root\"}))}}]),e}(d.Component))||u;e.default=v,t.exports=e.default},391:function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var r=u(n(1)),i=u(n(6));e.default=function(t){var e=new a.action(t),n=new f((0,r.default)({},t,{metaAction:e})),u=(0,r.default)({},e,n);return e.config({metaHandlers:u}),u};u(n(0));var a=n(48),o=u(n(137));function u(t){return t&&t.__esModule?t:{default:t}}var f=function t(e){var u=this;(0,i.default)(this,t),this.onInit=function(t){var e=t.component,n=t.injections;u.component=e,(u.injections=n).reduce(\"init\")},this.btnClick=function(){u.injections.reduce(\"modifyContent\")},this.metaAction=e.metaAction,this.config=o.default.current};t.exports=e.default},392:function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var u=f(n(1)),r=f(n(6));e.default=function(t){var e=new i.reducer(t),n=new c((0,u.default)({},t,{metaReducer:e}));return(0,u.default)({},e,n)};n(13);var i=n(48),a=f(n(137)),o=n(140);function f(t){return t&&t.__esModule?t:{default:t}}var c=function t(e){var u=this;(0,r.default)(this,t),this.init=function(t,e){var n=(0,o.getInitState)();return u.metaReducer.init(t,n)},this.modifyContent=function(t){var e=u.metaReducer.gf(t,\"data.content\");return u.metaReducer.sf(t,\"data.content\",e+\"!\")},this.metaReducer=e.metaReducer,this.config=a.default.current};t.exports=e.default}});"}