(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/logo.2e5601ef.svg"},34:function(e,t,a){e.exports=a.p+"static/media/logo-small.babf93f8.svg"},38:function(e,t,a){e.exports=a(66)},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(30),s=a.n(o),c=a(3),u=a(4),i=a(5),l=a(36),p=a(1),d=a(2),m=a.n(d),f=a(8),v=a(10),h=a.n(v),b=function e(t){var a=this;Object(c.a)(this,e),this.getSessionInfo=Object(f.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(a.props.DBlink);case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)}))),this.login=function(){var e=Object(f.a)(m.a.mark((function e(t,n){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post(a.props.DBlink+"/login",{ticket:t});case 2:return"real"===(r=e.sent.data).token&&("real"===r.secondUser?n&&n():setInterval(Object(f.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getSessionInfo();case 2:"real"===e.sent.secondUser&&n&&n();case 4:case"end":return e.stop()}}),e)}))),2e3)),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),this.audioURL=function(){return a.props.DBlink+"/stream"},this.logout=Object(f.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(a.props.DBlink+"/logout");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.props=t,h.a.defaults.headers.post.Accept="*/*",h.a.defaults.headers.post["Content-Type"]="json",h.a.defaults.withCredentials=!0},k=r.a.createContext("new store()"),_=function(){var e=window.navigator.standalone,t=window.navigator.userAgent.toLowerCase(),a=/safari/.test(t);return/iphone|ipod|ipad/.test(t)?!e&&a?"browser":e&&!a?"standalone":e||a?void 0:"uiwebview":"not iOS"},g=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={},e.render=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement("b",null,"Not to scale")))},e}return a}(r.a.Component),E=a(37),y=a(12),w=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).focus=function(){return n.inputFieldRef.current&&n.inputFieldRef.current.focus()},n.blur=function(){return n.inputFieldRef.current&&n.inputFieldRef.current.blur()},n.onKeyDown=function(e){var t=""+n.props.value;n.props.number&&n.props.value&&t.match(/[^0-9]/g)&&n.props.onChange(t.replace(/[^0-9]/g,"")),n.props.onKeyDown&&n.props.onKeyDown(e)},n.onFocus=function(e){n.props.onFocus&&n.props.onFocus(e)},n.onBlur=function(e){n.props.onBlur&&n.props.onBlur(e)},n.render=function(){return r.a.createElement("div",{className:"form-group "+n.props.className+" "+(n.props.errorMessage&&"form-group--error")},r.a.createElement("input",{ref:n.inputFieldRef,type:n.props.password?"password":"text",className:"form-group__input ".concat(n.props.className),placeholder:n.props.placeholder,required:n.props.required,value:n.props.value,onChange:function(e){return n.props.onChange(e.target.value)},onFocus:n.onFocus,onBlur:n.onBlur,onKeyDown:n.onKeyDown,disabled:n.props.disabled}),n.props.label&&r.a.createElement("label",{className:"form-group__label"},n.props.label))},n.inputFieldRef=e.inputFieldRef||r.a.createRef(),n}return a}(n.Component),x=function(e){return e>9?e:"0".concat(e)},N=function(e){return"".concat(x(Math.floor(e/60)),":").concat(x(Math.floor(e%60)))},j=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){return n.getSessionInfo()},n.getSessionInfo=Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.context.store.getSessionInfo();case 2:t=e.sent,n.setState({authorised:t.token,secondUser:t.secondUser,ticket:t.ticket||""}),"real"===t.token&&setTimeout((function(){return n.login()}),500);case 5:case"end":return e.stop()}}),e)}))),n.login=Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({authorised:"pending",secondUser:"real"}),e.next=3,n.context.store.login(n.state.ticket,(function(){return n.setState({secondUser:"real"})}));case 3:"real"===(t=e.sent).token?(n.setState({authorised:"real",ticket:t.ticket,texts:t.texts,left:t.left}),n.props.history.push({pathname:n.props.location.path,search:"?"+new URLSearchParams({q:t.userId}).toString()})):n.setState({authorised:t.token});case 5:case"end":return e.stop()}}),e)}))),n.pressButton=function(){switch(n.state.buttonStatus){case"never-pressed":return n.audio=new Audio(n.context.store.audioURL()),n.audio.addEventListener("canplaythrough",(function(){return"can-restart"!==n.state.buttonStatus&&setTimeout((function(){n.setState({buttonStatus:"countdown",message:"00:00/".concat(N(n.audio.duration)),comment:n.state.texts[0]}),n.state.texts.slice(1).forEach((function(e,t){return setTimeout((function(){return n.setState({comment:e})}),1e3*(t+1))})),setTimeout((function(){return n.setState({buttonStatus:"can-play",buttonDisabled:!1})}),1e3*(n.state.texts.length-1))}),1e3)})),n.audio.addEventListener("ended",(function(){return setTimeout((function(){n.playInterval&&clearInterval(n.playInterval),n.setState({buttonStatus:"buy-another-ticket",comment:"\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440! \u0425\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0435\u0449\u0451, \u043a\u0443\u043f\u0438\u0442\u0435 \u0431\u0438\u043b\u0435\u0442"}),n.context.store.logout()}),5e3)})),void n.setState({buttonStatus:"buffering",message:"\u0411\u0443\u0444\u0435\u0440\u0438\u0437\u0430\u0446\u0438\u044f...",buttonDisabled:!0});case"can-play":n.play()}},n.restart=function(){n.audio.pause(),n.audio.currentTime=0,n.playInterval&&(clearInterval(n.playInterval),n.playInterval=null),n.play()},n.play=function(){n.playInterval||(n.setState({buttonStatus:"can-restart",buttonDisabled:!0,message:"".concat(N(n.audio.currentTime),"/").concat(N(n.audio.duration)),comment:r.a.createElement(r.a.Fragment,null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0441\u043f\u0435\u043a\u0442\u0430\u043a\u043b\u044c ",r.a.createElement("br",null),"\u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0438 \u043f\u0435\u0440\u0432\u044b\u0445 60 \u0441\u0435\u043a\u0443\u043d\u0434")}),n.playInterval=setInterval((function(){n.audio.currentTime>60&&"can-restart"===n.state.buttonStatus&&n.setState({buttonStatus:"in-process",comment:""}),n.setState({message:"".concat(N(n.audio.currentTime),"/").concat(N(n.audio.duration))})}),1e3),n.audio.play())},n.buyAnotherTicket=function(){window.open("https://tochkadostupa.spb.ru/events/not_to_scale","_blank").focus()},n.renderLogin=function(){var e,t=n.state.authorised&&n.state.authorised.match(/outdated|many-devices|fake/gm);switch(n.state.authorised){case"outdated":e="\u0411\u0438\u043b\u0435\u0442 \u0441 \u0442\u0430\u043a\u0438\u043c \u043d\u043e\u043c\u0435\u0440\u043e\u043c \u0443\u0436\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d";break;case"many-devices":e="\u0411\u0438\u043b\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043d\u0430 \u0431\u043e\u043b\u0435\u0435 \u0447\u0435\u043c 3\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445";break;case"fake":e="\u0411\u0438\u043b\u0435\u0442\u0430 \u0441 \u0442\u0430\u043a\u0438\u043c \u043d\u043e\u043c\u0435\u0440\u043e\u043c \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442";break;default:e="\u041d\u0430\u0447\u0430\u0442\u044c"}return r.a.createElement("div",{className:"spekt__login"},r.a.createElement("div",{className:"spekt__login__desc"},r.a.createElement("b",null,"Not to scale")," \u2014 \u044d\u0442\u043e \u0441\u043f\u0435\u043a\u0442\u0430\u043a\u043b\u044c \u042d\u043d\u0442\u0430 \u0425\u044d\u043c\u043f\u0442\u043e\u043d\u0430 \u0438 \u0422\u0438\u043c\u0430 \u042d\u0442\u0447\u0435\u043b\u0441\u0430. \u0412\u0430\u043c \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u044f\u0442\u0441\u044f \u043d\u0430\u0443\u0448\u043d\u0438\u043a\u0438, \u043a\u0430\u0440\u0430\u043d\u0434\u0430\u0448, \u043b\u0430\u0441\u0442\u0438\u043a, \u0438 \u043b\u0438\u0441\u0442 \u0431\u0443\u043c\u0430\u0433\u0438. \u0418 \u0432\u0442\u043e\u0440\u043e\u0439 \u0447\u0435\u043b\u043e\u0432\u0435\u043a. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0432\u0430\u0448\u0435\u0433\u043e \u0431\u0438\u043b\u0435\u0442\u0430, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \xab\u043d\u0430\u0447\u0430\u0442\u044c\xbb \u0438 \u0441\u043b\u0435\u0434\u0443\u0439\u0442\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f\u043c."),r.a.createElement(w,{className:t&&"form-group__input--danger",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0432\u0430\u0448\u0435\u0433\u043e \u0431\u0438\u043b\u0435\u0442\u0430",value:n.state.ticket,onChange:function(e){return n.setState({ticket:e,authorised:""})}}),r.a.createElement("button",{className:"button button--main ".concat(t&&"button--main--danger"),onClick:function(){return n.login()},disabled:!n.state.ticket||n.state.ticket.length<5},e))},n.renderSpekt=function(){return r.a.createElement("div",{className:"spekt__spekt"},r.a.createElement("div",{className:"spekt__spekt__instructions"},"1. \u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \xab\u043d\u0430\u0447\u0430\u0442\u044c\xbb \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0441\u043e \u0432\u0442\u043e\u0440\u044b\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c.",r.a.createElement("br",null),"2. \u041f\u043e\u0441\u043b\u0435 \u043d\u0430\u0436\u0430\u0442\u0438\u044f \u043d\u0430\u0447\u043d\u0451\u0442\u0441\u044f \u043e\u0431\u0440\u0430\u0442\u043d\u044b\u0439 \u043e\u0442\u0441\u0447\u0451\u0442, \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043d\u0430\u0436\u0430\u0442\u044c \u0432\u0442\u043e\u0440\u043e\u0439 \u0440\u0430\u0437 \u043d\u0430 play \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e",r.a.createElement("br",null),"3. \u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441\u043f\u0435\u043a\u0442\u0430\u043a\u043b\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u043f\u043e \u043e\u0434\u043d\u043e\u043c\u0443 \u0431\u0438\u043b\u0435\u0442\u0443 \u0443 \u0432\u0430\u0441 \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0441\u044f","undefined"!==typeof n.state.left&&n.state.left?r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0441\u044f\u0434\u044c\u0442\u0435 \u0441\u043b\u0435\u0432\u0430")):r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0441\u044f\u0434\u044c\u0442\u0435 \u0441\u043f\u0440\u0430\u0432\u0430"))),r.a.createElement("div",{className:"spekt__spekt__player"},r.a.createElement("div",{className:"spekt__spekt__player__button-area"},r.a.createElement("button",{className:"spekt__spekt__player__button",onClick:function(){return n.pressButton()},disabled:n.state.buttonDisabled})),r.a.createElement("div",{className:"spekt__spekt__player__text"},n.state.message),r.a.createElement("div",{className:"spekt__spekt__player__comment"},"can-restart"===n.state.buttonStatus&&r.a.createElement("button",{className:"spekt__spekt__player__comment__restart",onClick:function(){return n.restart()}},"\u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c"),"buy-another-ticket"===n.state.buttonStatus&&r.a.createElement("button",{className:"spekt__spekt__player__comment__restart",onClick:function(){return n.buyAnotherTicket()}},"\u043a\u0443\u043f\u0438\u0442\u044c \u0435\u0449\u0451 \u043e\u0434\u0438\u043d \u0431\u0438\u043b\u0435\u0442"),r.a.createElement("div",{className:"spekt__spekt__player__comment__text"},n.state.comment))))},n.render=function(){return r.a.createElement(r.a.Fragment,null,n.state.authorised&&!n.state.authorised.match(/none|outdated|many-devices|fake/gm)&&r.a.createElement(g,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"spekt"},"real"===n.state.authorised?"pending"===n.state.secondUser?r.a.createElement("div",{className:"spekt__login__pending"},"\u041d\u0430\u0440\u0438\u0441\u0443\u0439\u0442\u0435 \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c,",r.a.createElement("br",null),"\u043f\u043e\u043a\u0430 \u043c\u044b \u0436\u0434\u0435\u043c \u0432\u0442\u043e\u0440\u043e\u0433\u043e",r.a.createElement("br",null),"\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"):n.renderSpekt():n.renderLogin())))},n.state={ticket:"",authorised:"pending",userId:"",secondUser:"pending",buttonStatus:"never-pressed",message:"00:00",comment:r.a.createElement(r.a.Fragment,null,"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 ",r.a.createElement("div",{className:"play-symbol"})," \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c",r.a.createElement("br",null),"\u0431\u0443\u0444\u0435\u0440\u0438\u0437\u0430\u0446\u0438\u044e")},n}return a}(n.Component);j.contextType=k;var O=function(e){var t=function(t){Object(i.a)(n,t);var a=Object(u.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){var t=this.props,a=t.forwardRef,n=Object(E.a)(t,["forwardRef"]);return r.a.createElement(e,Object.assign({},n,{ref:a}))}}]),n}(n.Component),a=Object(p.f)(t,{withRef:!0});return r.a.forwardRef((function(e,t){return r.a.createElement(a,Object.assign({},e,{forwardRef:t}))}))}(j),S=a(68),T=a(32),C=a.n(T),R=a(13),D=a.n(R),I=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).loadData=Object(f.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=n,e.next=3,D()("https://schedule.tochkadostupa.spb.ru/api/nottoscaleticket?limit=5000");case 3:return e.next=5,e.sent.json();case 5:e.t1=e.sent,e.t2={data:e.t1},e.t0.setState.call(e.t0,e.t2);case 8:case"end":return e.stop()}}),e)}))),n.deleteData=Object(f.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.loadData();case 2:t=n.state.data,e.t0=m.a.keys(t);case 4:if((e.t1=e.t0()).done){e.next=19;break}return a=e.t1.value,e.t2=console,e.t3="destroyed ",e.t4=JSON,e.next=11,D()("https://schedule.tochkadostupa.spb.ru/api/nottoscaleticket/destroy/"+t[a].id);case 11:return e.next=13,e.sent.json();case 13:e.t5=e.sent,e.t6=e.t4.stringify.call(e.t4,e.t5),e.t7=e.t3.concat.call(e.t3,e.t6),e.t2.log.call(e.t2,e.t7),e.next=4;break;case 19:case"end":return e.stop()}}),e)}))),n.addData=function(){var e=Object(f.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.deleteData();case 2:e.t0=m.a.keys(t);case 3:if((e.t1=e.t0()).done){e.next=14;break}return a=e.t1.value,e.t2=console,e.next=8,D()("https://schedule.tochkadostupa.spb.ru/api/nottoscaleticket/create?"+(r={number:t[a][0]},Object.entries(r).map((function(e){return e.map(encodeURIComponent).join("=")})).join("&")));case 8:return e.next=10,e.sent.json();case 10:e.t3=e.sent,e.t2.log.call(e.t2,e.t3),e.next=3;break;case 14:return e.next=16,n.loadData();case 16:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}(),n.componentDidMount=function(){return n.loadData()},n.state={data:[],password:"",loggedIn:!0,file:void 0},n}return Object(y.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.password,n=t.loggedIn,o=t.data;return n?r.a.createElement("div",{className:"ZoomTicket"},r.a.createElement("div",{className:"container"},"\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 .CSV \u0444\u0430\u0439\u043b\u0430 (\u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0438\u0441\u0430\u043d\u044b)",r.a.createElement(C.a,{onFileLoaded:function(t,a){return e.addData(t)}})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"ZoomTicket__tickets"},r.a.createElement("h4",{className:"h4"},"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u0431\u0438\u043b\u0435\u0442\u044b:"),o.map((function(e,t){return r.a.createElement("div",{key:e.id,className:"ZoomTicket__tickets__item"},r.a.createElement("div",{className:"ZoomTicket__tickets__item__index"},t+1,"."),r.a.createElement("div",{className:"ZoomTicket__tickets__item__ticketNumber"},e.number),r.a.createElement("div",{className:"ZoomTicket__tickets__item__zoomURL"},e.used?Object(S.a)(new Date(1e3*e.used),"dd/mm/yyyy"):"\u043d\u0435 \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d"))}))))):r.a.createElement("div",{className:"ZoomTicket"},r.a.createElement("div",{className:"container"},r.a.createElement(w,{value:a,onChange:function(t){return e.setState({password:t,loggedIn:"aNg2R4V5"===t})},placeholder:"\u043f\u0430\u0440\u043e\u043b\u044c"})))}}]),a}(r.a.Component);I.contextType=k;var F=I,L=function(e){return r.a.createElement("a",{className:e.className,href:e.to,target:e.newTab?"_blank":"",rel:"noopener noreferrer"},e.children)},B=a(33),U=a.n(B),P=a(34),A=a.n(P),M=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={},e.render=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"footer__logo"},r.a.createElement(L,{newTab:!0,to:"https://tochkadostupa.spb.ru"},r.a.createElement("img",{className:"desktop-only",src:U.a}),r.a.createElement("img",{className:"mobile-only",src:A.a}))),r.a.createElement("div",{className:"footer__links"},r.a.createElement(L,{newTab:!0,to:"https://tochkadostupa.spb.ru/events/not_to_scale"},"\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"))))},e}return a}(n.Component),Z=a(35),z=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.resizeObserver=new Z.a((function(){return n.resize()})).observe(n.canvasRef.current),n.resize()},n.resize=function(){var e=n.getCtx();e&&(e.canvas.width=n.canvasRef.current.clientWidth,e.canvas.height=n.canvasRef.current.clientHeight)},n.getCtx=function(){return n.canvasRef.current&&n.canvasRef.current.getContext("2d")},n.setPos=function(e){return n.pos={x:e.clientX,y:e.clientY}},n.setPosTouch=function(e){var t=e.changedTouches&&e.changedTouches[0];t&&(n.pos={x:t.pageX,y:t.pageY})},n.draw=function(e){var t=n.getCtx();t&&"undefined"!==typeof n.pos.x&&1===e.buttons&&(t.beginPath(),t.lineWidth=2.5,t.lineCap="round",t.strokeStyle="#ee0200",t.moveTo(n.pos.x,n.pos.y),n.setPos(e),t.lineTo(n.pos.x,n.pos.y),t.stroke())},n.drawTouch=function(e){var t=n.getCtx();t&&"undefined"!==typeof n.pos.x&&n.pressed&&(t.beginPath(),t.lineWidth=2.5,t.lineCap="round",t.strokeStyle="#ee0200",t.moveTo(n.pos.x,n.pos.y),n.setPosTouch(e),t.lineTo(n.pos.x,n.pos.y),t.stroke())},n.render=function(){return r.a.createElement("div",{className:"canvas"},r.a.createElement("canvas",{ref:n.canvasRef}))},n.pos={x:void 0,y:void 0},n.pressed=!1,n.canvasRef=r.a.createRef(),!function(){try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}}()?(document.addEventListener("mousemove",(function(e){return n.draw(e)})),document.addEventListener("mousedown",(function(e){return n.setPos(e)})),document.addEventListener("mouseenter",(function(e){return n.setPos(e)}))):(document.addEventListener("touchmove",(function(e){return n.drawTouch(e)})),document.addEventListener("touchstart",(function(e){n.pressed=!0,n.setPosTouch(e)})),document.addEventListener("touchend",(function(e){n.pressed=!1,n.setPosTouch(e)}))),n}return a}(n.Component),K=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={},e.render=function(){var e=[r.a.createElement("a",{href:"safari://the-sociophobic.github.io/not-to-scale",target:"_blank"},"Safari"),r.a.createElement("a",{href:"googlechrome://the-sociophobic.github.io/not-to-scale",target:"_blank"},"Chrome")],t="not iOS"===_()?e[1]:e[0],a="not iOS"===_()?e[0]:e[1];return r.a.createElement("div",{className:"open-browser"},r.a.createElement("div",{className:"open-browser__text"},"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0441\u0430\u0439\u0442",r.a.createElement("br",null),"\u0432 ",t," \u0438\u043b\u0438 ",a))},e}return a}(r.a.Component),W=(a(65),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n,o;return Object(c.a)(this,a),(n=t.call(this,e)).render=function(){return r.a.createElement(l.a,null,r.a.createElement(k.Provider,{value:n.state},r.a.createElement(z,null),r.a.createElement("div",{className:"App"},"uiwebview"===_()?r.a.createElement(K,null):r.a.createElement("div",{className:"content"},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/not-to-scale/"},r.a.createElement(O,null)),r.a.createElement(p.a,{path:"/not-to-scale/admin"},r.a.createElement(F,null)))),r.a.createElement(M,null))))},n.state=(o={state:n.state,setState:n.setState},{store:new b({stateRefs:o,DBlink:"http://localhost:3000/not-to-scale/api"})}),n}return a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.6fa03cc9.chunk.js.map