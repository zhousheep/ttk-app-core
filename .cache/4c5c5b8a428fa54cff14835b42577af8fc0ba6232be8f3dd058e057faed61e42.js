{"source":"webpackJsonp([1],{387:function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0}),e.default=void 0;var r,i=p(n(1)),a=p(n(9)),u=p(n(6)),o=p(n(8)),c=p(n(10)),d=p(n(11)),f=n(0),s=(p(f),n(48)),l=p(n(138));function p(t){return t&&t.__esModule?t:{default:t}}var h=(0,s.wrapper)(l.default)(r=function(t){function e(){return(0,u.default)(this,e),(0,c.default)(this,(e.__proto__||(0,a.default)(e)).apply(this,arguments))}return(0,d.default)(e,t),(0,o.default)(e,[{key:\"render\",value:function(){return this.props.monkeyKing((0,i.default)({},this.props,{path:\"root\"}))}}]),e}(f.Component))||r;e.default=h,t.exports=e.default},388:function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var i=d(n(1)),r=d(n(6));e.default=function(t){var e=new a.action(t),n=new f((0,i.default)({},t,{metaAction:e})),r=(0,i.default)({},e,n);return e.config({metaHandlers:r}),r};d(n(0));var a=n(48),u=d(n(84)),o=n(14),c=n(136);function d(t){return t&&t.__esModule?t:{default:t}}var f=function t(e){var a=this;(0,r.default)(this,t),this.onInit=function(t){var e=t.component,n=t.injections;a.component=e,a.injections=n;var r=(0,c.getInitState)(),i=r.data.currentAppName;n.reduce(\"init\",{initState:r}),o.history.listen(\"ttk-edf-app-root\",a.listen),a.onRedirect({appName:o.history.getChildApp(\"ttk-edf-app-root\")||i})},this.listen=function(t,e,n){var r=(0,c.getInitState)().data.currentAppName,i=t||r;i!=(a.metaAction.gf(\"data.currentAppName\")||r)&&a.injections.reduce(\"redirect\",i)},this.onRedirect=function(t){var e=t.appName;o.history.pushChildApp(\"ttk-edf-app-root\",e)},this.componentWillUnmount=function(){o.history.unlisten(\"ttk-edf-app-root\",a.listen)},this.metaAction=e.metaAction,this.config=u.default.current};t.exports=e.default},389:function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var r,i,a=d(n(1)),u=d(n(6));e.default=function(t){var e=new o.reducer(t),n=new f((0,a.default)({},t,{metaReducer:e}));return(0,a.default)({},e,n)};n(13);var o=n(48),c=d(n(84));n(136),n(14);function d(t){return t&&t.__esModule?t:{default:t}}var f=(r=function t(e){(0,u.default)(this,t),i.call(this),this.metaReducer=e.metaReducer,this.config=c.default.current},i=function(){var n=this;this.init=function(t,e){return n.metaReducer.init(t,e.initState)},this.redirect=function(t,e){return n.metaReducer.sf(t,\"data.currentAppName\",e)}},r);t.exports=e.default}});"}