(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(e,t,n){e.exports=n.p+"static/media/logo.2e5601ef.svg"},35:function(e,t,n){e.exports=n.p+"static/media/logo-small.babf93f8.svg"},39:function(e,t,n){e.exports=n(72)},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(30),s=n.n(o),c=n(3),u=n(4),l=n(5),i=n(37),p=n(1),d=n(31),m=n.n(d),f=n(2),v=n.n(f),h=n(9),b=n(10),E=n.n(b),k=function e(t){var n=this;Object(c.a)(this,e),this.getSessionInfo=function(){var e=Object(h.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post(n.props.DBlink,{userId:t});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.login=function(){var e=Object(h.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post(n.props.DBlink+"/login",t);case 2:return a=e.sent.data,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.audioURL=function(e){return n.props.DBlink+"/stream"+(e?"/left":"/right")},this.logout=function(){var e=Object(h.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post(n.props.DBlink+"/logout",{userId:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.props=t,E.a.defaults.headers.post.Accept="*/*",E.a.defaults.headers.post["Content-Type"]="json",E.a.defaults.withCredentials=!0},_=r.a.createContext("new store()"),g=function(){var e=window.navigator.standalone,t=window.navigator.userAgent.toLowerCase(),n=/safari/.test(t);return/iphone|ipod|ipad/.test(t)?!e&&n?"browser":e&&!n?"standalone":e||n?void 0:"uiwebview":"not iOS"},y=function(e){return e.preventDefault()},w=function(e,t){console.log(e),e.addEventListener("wheel",y,{passive:!1}),!t&&e.addEventListener("touchmove",y,{passive:!1})},x=function(e,t){e.removeEventListener("wheel",y,{passive:!1}),!t&&e.removeEventListener("touchmove",y,{passive:!1})},N=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={},e.render=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement("b",null,"Not to scale")))},e}return n}(r.a.Component),j=n(38),O=n(12),S=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).focus=function(){return a.inputFieldRef.current&&a.inputFieldRef.current.focus()},a.blur=function(){return a.inputFieldRef.current&&a.inputFieldRef.current.blur()},a.onKeyDown=function(e){var t=""+a.props.value;a.props.number&&a.props.value&&t.match(/[^0-9]/g)&&a.props.onChange(t.replace(/[^0-9]/g,"")),a.props.onKeyDown&&a.props.onKeyDown(e)},a.onFocus=function(e){a.props.onFocus&&a.props.onFocus(e)},a.onBlur=function(e){a.props.onBlur&&a.props.onBlur(e)},a.render=function(){return r.a.createElement("div",{className:"form-group "+a.props.className+" "+(a.props.errorMessage&&"form-group--error")},r.a.createElement("input",{ref:a.inputFieldRef,type:a.props.password?"password":"text",className:"form-group__input ".concat(a.props.className),placeholder:a.props.placeholder,required:a.props.required,value:a.props.value,onChange:function(e){return a.props.onChange(e.target.value)},onFocus:a.onFocus,onBlur:a.onBlur,onKeyDown:a.onKeyDown,disabled:a.props.disabled}),a.props.label&&r.a.createElement("label",{className:"form-group__label"},a.props.label))},a.inputFieldRef=e.inputFieldRef||r.a.createRef(),a}return n}(a.Component),R=function(e){return e>9?e:"0".concat(e)},T=function(e){return"".concat(R(Math.floor(e/60)),":").concat(R(Math.floor(e%60)))},C=function(){return r.a.createElement("div",{className:"play-symbol"})},I=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;Object(c.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){return a.getSessionInfo()},a.getSessionInfo=Object(h.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.context.store.getSessionInfo(a.state.userId);case 2:t=e.sent,console.log(t),a.setState({authorised:t.token,secondUser:t.secondUser,ticket:t.ticket||""}),"real"===t.token&&setTimeout((function(){return a.login()}),500);case 6:case"end":return e.stop()}}),e)}))),a.login=Object(h.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({authorised:"pending",secondUser:"real"}),e.next=3,a.context.store.login({ticket:a.state.ticket||"a",userId:a.state.userId});case 3:"real"===(t=e.sent).token?(a.setState({userId:t.userId,authorised:"real",ticket:t.ticket,texts:t.texts,left:t.left}),console.log(t),a.props.history.push({pathname:a.props.location.path,search:"?"+new URLSearchParams({q:t.userId}).toString()})):a.setState({authorised:t.token});case 5:case"end":return e.stop()}}),e)}))),a.initializeAudio=function(){a.audio=new Audio,a.audio.addEventListener("canplay",(function(){return"can-restart"!==a.state.buttonStatus&&setTimeout((function(){a.setState({buttonStatus:"countdown",message:"00:00/".concat(T(a.audio.duration)),comment:a.state.texts[0]}),a.state.texts.slice(1).forEach((function(e,t){return setTimeout((function(){return a.setState({comment:e.split("PLAY").reduce((function(e,t){return r.a.createElement(r.a.Fragment,null,e,r.a.createElement(C,null),t)}))})}),1e3*(t+1))})),setTimeout((function(){return a.setState({buttonStatus:"can-play",buttonDisabled:!1})}),1e3*(a.state.texts.length-1))}),1e3)})),a.audio.addEventListener("ended",(function(){return setTimeout((function(){a.playInterval&&clearInterval(a.playInterval),a.setState({buttonStatus:"buy-another-ticket",comment:"\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440! \u0425\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0435\u0449\u0451, \u043a\u0443\u043f\u0438\u0442\u0435 \u0431\u0438\u043b\u0435\u0442"}),a.context.store.logout(a.state.userId)}),5e3)})),a.audio.preload="auto",a.audio.src=a.context.store.audioURL(a.state.left),a.audio.load()},a.pressButton=function(){switch(a.state.buttonStatus){case"never-pressed":return a.initializeAudio(),void a.setState({buttonStatus:"buffering",message:"\u0411\u0443\u0444\u0435\u0440\u0438\u0437\u0430\u0446\u0438\u044f...",comment:"",buttonDisabled:!0});case"can-play":a.play()}},a.restart=function(){a.audio.pause(),a.audio.currentTime=0,a.playInterval&&(clearInterval(a.playInterval),a.playInterval=null),a.play()},a.play=function(){a.playInterval||(a.setState({buttonStatus:"can-restart",buttonDisabled:!0,message:"".concat(T(a.audio.currentTime),"/").concat(T(a.audio.duration)),comment:r.a.createElement(r.a.Fragment,null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0441\u043f\u0435\u043a\u0442\u0430\u043a\u043b\u044c ",r.a.createElement("br",{className:"desktop-only"}),"\u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0438 \u043f\u0435\u0440\u0432\u044b\u0445 60\xa0\u0441\u0435\u043a\u0443\u043d\u0434")}),a.playInterval=setInterval((function(){a.audio.currentTime>60&&"can-restart"===a.state.buttonStatus&&a.setState({buttonStatus:"in-process",comment:""}),a.setState({message:"".concat(T(a.audio.currentTime),"/").concat(T(a.audio.duration))})}),1e3),a.audio.play())},a.buyAnotherTicket=function(){window.open("https://tochkadostupa.spb.ru/events/not_to_scale","_blank").focus()},a.renderLogin=function(){var e,t=a.state.authorised&&a.state.authorised.match(/outdated|many-devices|fake/gm);switch(a.state.authorised){case"outdated":e="\u0411\u0438\u043b\u0435\u0442 \u0441 \u0442\u0430\u043a\u0438\u043c \u043d\u043e\u043c\u0435\u0440\u043e\u043c \u0443\u0436\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d";break;case"many-devices":e="\u0411\u0438\u043b\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043d\u0430 \u0431\u043e\u043b\u0435\u0435 \u0447\u0435\u043c 3\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445";break;case"fake":e="\u0411\u0438\u043b\u0435\u0442\u0430 \u0441 \u0442\u0430\u043a\u0438\u043c \u043d\u043e\u043c\u0435\u0440\u043e\u043c \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442";break;default:e="\u041d\u0430\u0447\u0430\u0442\u044c"}return r.a.createElement("div",{className:"spekt__login"},r.a.createElement("div",{className:"spekt__login__desc"},r.a.createElement("b",null,"Not to scale")," \u2014 \u044d\u0442\u043e \u0441\u043f\u0435\u043a\u0442\u0430\u043a\u043b\u044c \u042d\u043d\u0442\u0430 \u0425\u044d\u043c\u043f\u0442\u043e\u043d\u0430 \u0438 \u0422\u0438\u043c\u0430 \u042d\u0442\u0447\u0435\u043b\u0441\u0430. \u0412\u0430\u043c \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u044f\u0442\u0441\u044f \u043d\u0430\u0443\u0448\u043d\u0438\u043a\u0438, \u043a\u0430\u0440\u0430\u043d\u0434\u0430\u0448, \u043b\u0430\u0441\u0442\u0438\u043a, \u0438 \u043b\u0438\u0441\u0442 \u0431\u0443\u043c\u0430\u0433\u0438. \u0418 \u0432\u0442\u043e\u0440\u043e\u0439 \u0447\u0435\u043b\u043e\u0432\u0435\u043a. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0432\u0430\u0448\u0435\u0433\u043e \u0431\u0438\u043b\u0435\u0442\u0430, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \xab\u043d\u0430\u0447\u0430\u0442\u044c\xbb \u0438 \u0441\u043b\u0435\u0434\u0443\u0439\u0442\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f\u043c."),r.a.createElement(S,{className:t&&"form-group__input--danger",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0432\u0430\u0448\u0435\u0433\u043e \u0431\u0438\u043b\u0435\u0442\u0430",value:a.state.ticket,onChange:function(e){return a.setState({ticket:e,authorised:""})}}),r.a.createElement("button",{className:"button button--main ".concat(t&&"button--main--danger"),onClick:function(){return a.login()},disabled:!a.state.ticket||a.state.ticket.length<5},e))},a.renderSpekt=function(){return r.a.createElement("div",{className:"spekt__spekt"},r.a.createElement("div",{className:"spekt__spekt__instructions"},"\u0414\u043b\u044f \u0443\u0447\u0430\u0441\u0442\u0438\u044f \u0432 \u0441\u043f\u0435\u043a\u0442\u0430\u043a\u043b\u0435 \u0412\u0430\u043c ",r.a.createElement("b",null,"\u043f\u043e\u043d\u0430\u0434\u043e\u0431\u044f\u0442\u0441\u044f"),":",r.a.createElement("br",null),"1. \u0414\u0440\u0443\u0433\u043e\u0439 \u0447\u0435\u043b\u043e\u0432\u0435\u043a \u2014 \u0412\u0430\u0448 \u043f\u0430\u0440\u0442\u043d\u0435\u0440, \u043d\u0430\u0445\u043e\u0434\u044f\u0449\u0438\u0439\u0441\u044f \u0440\u044f\u0434\u043e\u043c \u0441 \u0412\u0430\u043c\u0438",r.a.createElement("br",null),"2. \u0414\u0432\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u0434\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0437\u0432\u0443\u043a\u0430 (\u043d\u043e\u0443\u0442\u0431\u0443\u043a, \u043f\u043b\u0430\u043d\u0448\u0435\u0442, \u0441\u043c\u0430\u0440\u0442\u0444\u043e\u043d)",r.a.createElement("br",null),"3. \u0414\u0432\u0435 \u043f\u0430\u0440\u044b \u043d\u0430\u0443\u0448\u043d\u0438\u043a\u043e\u0432 (\u0434\u043b\u044f \u0412\u0430\u0441 \u0438 \u0412\u0430\u0448\u0435\u0433\u043e \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u0430)",r.a.createElement("br",null),"4. \u041f\u043b\u043e\u0441\u043a\u0430\u044f \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u044c, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043c\u043e\u0436\u043d\u043e \u0440\u0438\u0441\u043e\u0432\u0430\u0442\u044c (\u0441\u0442\u043e\u043b) \u2014 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u044c \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0430\u044f, \u0447\u0442\u043e\u0431\u044b \u043d\u0430 \u043d\u0435\u0439 \u043f\u043e\u043c\u0435\u0449\u0430\u043b\u0438\u0441\u044c \u0447\u0435\u0442\u044b\u0440\u0435 \u043b\u0438\u0441\u0442\u0430 \u0444\u043e\u0440\u043c\u0430\u0442\u0430 \u04104",r.a.createElement("br",null),"5. \u0414\u0435\u0432\u044f\u0442\u044c \u043b\u0438\u0441\u0442\u043e\u0432 \u0431\u0435\u043b\u043e\u0439 \u0431\u0443\u043c\u0430\u0433\u0438 \u0444\u043e\u0440\u043c\u0430\u0442\u0430 \u04104",r.a.createElement("br",null),"6. \u0414\u0432\u0430 \u0437\u0430\u0442\u043e\u0447\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u043e\u0441\u0442\u044b\u0445 \u043a\u0430\u0440\u0430\u043d\u0434\u0430\u0448\u0430 + \u043e\u0434\u0438\u043d \u0437\u0430\u043f\u0430\u0441\u043d\u043e\u0439",r.a.createElement("br",null),"7. \u0414\u0432\u0430 \u043b\u0430\u0441\u0442\u0438\u043a\u0430",r.a.createElement("br",null),r.a.createElement("br",null),"\u0414\u0430\u043b\u044c\u0448\u0435\u2026",r.a.createElement("br",null),r.a.createElement("br",null),"\u0421\u044f\u0434\u044c\u0442\u0435 ",a.state.left?r.a.createElement("b",null,"\u0441\u043b\u0435\u0432\u0430"):r.a.createElement("b",null,"\u0441\u043f\u0440\u0430\u0432\u0430")," \u043e\u0442 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430 \u043f\u0435\u0440\u0435\u0434 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u044c\u044e, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0431\u0443\u0434\u0435\u0442\u0435 \u0440\u0438\u0441\u043e\u0432\u0430\u0442\u044c. \u0412\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u043d\u0430 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0435 \u0440\u0435\u0436\u0438\u043c \xab\u043d\u0435 \u0431\u0435\u0441\u043f\u043e\u043a\u043e\u0438\u0442\u044c\xbb. \u0423\u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u044c\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0440\u0435\u0436\u0438\u043c \u044d\u043a\u043e\u043d\u043e\u043c\u0438\u0438 \u044d\u043d\u0435\u0440\u0433\u0438\u0438 \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d \u0438 \u044d\u043a\u0440\u0430\u043d \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u043d\u0435 \u043f\u043e\u0433\u0430\u0441\u043d\u0435\u0442. \u041d\u0430\u0434\u0435\u043d\u044c\u0442\u0435 \u043d\u0430\u0443\u0448\u043d\u0438\u043a\u0438. \u041f\u043e\u043b\u043e\u0436\u0438\u0442\u0435 \u043f\u0435\u0440\u0435\u0434 \u0441\u043e\u0431\u043e\u0439 \u043f\u043e \u043b\u0438\u0441\u0442\u0443 \u0431\u0443\u043c\u0430\u0433\u0438 \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u043e, \u0432 \u043a\u043d\u0438\u0436\u043d\u043e\u0439 \u043e\u0440\u0438\u0435\u043d\u0442\u0430\u0446\u0438\u0438. \u041e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u043b\u0438\u0441\u0442\u044b \u0431\u0443\u043c\u0430\u0433\u0438 \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435 \u0432 \u0441\u0442\u043e\u043f\u043a\u0443.",r.a.createElement("br",null),r.a.createElement("br",null),"1. \u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 ",r.a.createElement(C,null)," \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0441\u043e \u0432\u0442\u043e\u0440\u044b\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c.",r.a.createElement("br",null),"2. \u041f\u043e\u0441\u043b\u0435 \u043d\u0430\u0436\u0430\u0442\u0438\u044f \u043d\u0430\u0447\u043d\u0451\u0442\u0441\u044f \u043e\u0431\u0440\u0430\u0442\u043d\u044b\u0439 \u043e\u0442\u0441\u0447\u0451\u0442, \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043d\u0430\u0436\u0430\u0442\u044c \u0432\u0442\u043e\u0440\u043e\u0439 \u0440\u0430\u0437 \u043d\u0430 ",r.a.createElement(C,null)," \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e",r.a.createElement("br",null),"3. \u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441\u043f\u0435\u043a\u0442\u0430\u043a\u043b\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u043f\u043e \u043e\u0434\u043d\u043e\u043c\u0443 \u0431\u0438\u043b\u0435\u0442\u0443 \u0443 \u0432\u0430\u0441 \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0441\u044f"),r.a.createElement("div",{className:"spekt__spekt__player"},r.a.createElement("div",{className:"spekt__spekt__player__button-area"},r.a.createElement("button",{className:"spekt__spekt__player__button",onClick:function(){return a.pressButton()},disabled:a.state.buttonDisabled})),r.a.createElement("div",{className:"spekt__spekt__player__text"},a.state.message),r.a.createElement("div",{className:"spekt__spekt__player__comment"},"can-restart"===a.state.buttonStatus&&r.a.createElement("button",{className:"spekt__spekt__player__comment__restart",onClick:function(){return a.restart()}},"\u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c"),"buy-another-ticket"===a.state.buttonStatus&&r.a.createElement("button",{className:"spekt__spekt__player__comment__restart",onClick:function(){return a.buyAnotherTicket()}},"\u043a\u0443\u043f\u0438\u0442\u044c \u0435\u0449\u0451 \u043e\u0434\u0438\u043d \u0431\u0438\u043b\u0435\u0442"),r.a.createElement("div",{className:"spekt__spekt__player__comment__text"},a.state.comment))))},a.render=function(){return r.a.createElement(r.a.Fragment,null,a.state.authorised&&!a.state.authorised.match(/none|outdated|many-devices|fake/gm)&&r.a.createElement(N,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"spekt"},"real"===a.state.authorised?"pending"===a.state.secondUser?r.a.createElement("div",{className:"spekt__login__pending"},"\u041d\u0430\u0440\u0438\u0441\u0443\u0439\u0442\u0435 \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c,",r.a.createElement("br",null),"\u043f\u043e\u043a\u0430 \u043c\u044b \u0436\u0434\u0435\u043c \u0432\u0442\u043e\u0440\u043e\u0433\u043e",r.a.createElement("br",null),"\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"):a.renderSpekt():a.renderLogin())))};var o=new URLSearchParams(window.location.search).get("q");return a.state={ticket:"",authorised:"pending",userId:o||"",secondUser:"pending",buttonStatus:"never-pressed",message:"00:00",comment:r.a.createElement(r.a.Fragment,null,"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 ",r.a.createElement(C,null)," \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c",r.a.createElement("br",null),"\u0431\u0443\u0444\u0435\u0440\u0438\u0437\u0430\u0446\u0438\u044e")},a}return n}(a.Component);I.contextType=_;var D=function(e){var t=function(t){Object(l.a)(a,t);var n=Object(u.a)(a);function a(){return Object(c.a)(this,a),n.apply(this,arguments)}return Object(O.a)(a,[{key:"render",value:function(){var t=this.props,n=t.forwardRef,a=Object(j.a)(t,["forwardRef"]);return r.a.createElement(e,Object.assign({},a,{ref:n}))}}]),a}(a.Component),n=Object(p.f)(t,{withRef:!0});return r.a.forwardRef((function(e,t){return r.a.createElement(n,Object.assign({},e,{forwardRef:t}))}))}(I),L=n(74),F=n(33),B=n.n(F),P=n(13),A=n.n(P),U=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).loadData=Object(h.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,A()("https://schedule.tochkadostupa.spb.ru/api/nottoscaleticket?limit=5000");case 3:return e.next=5,e.sent.json();case 5:e.t1=e.sent,e.t2={data:e.t1},e.t0.setState.call(e.t0,e.t2);case 8:case"end":return e.stop()}}),e)}))),a.deleteData=Object(h.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.loadData();case 2:t=a.state.data,e.t0=v.a.keys(t);case 4:if((e.t1=e.t0()).done){e.next=19;break}return n=e.t1.value,e.t2=console,e.t3="destroyed ",e.t4=JSON,e.next=11,A()("https://schedule.tochkadostupa.spb.ru/api/nottoscaleticket/destroy/"+t[n].id);case 11:return e.next=13,e.sent.json();case 13:e.t5=e.sent,e.t6=e.t4.stringify.call(e.t4,e.t5),e.t7=e.t3.concat.call(e.t3,e.t6),e.t2.log.call(e.t2,e.t7),e.next=4;break;case 19:case"end":return e.stop()}}),e)}))),a.addData=function(){var e=Object(h.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.deleteData();case 2:e.t0=v.a.keys(t);case 3:if((e.t1=e.t0()).done){e.next=14;break}return n=e.t1.value,e.t2=console,e.next=8,A()("https://schedule.tochkadostupa.spb.ru/api/nottoscaleticket/create?"+(r={number:t[n][0]},Object.entries(r).map((function(e){return e.map(encodeURIComponent).join("=")})).join("&")));case 8:return e.next=10,e.sent.json();case 10:e.t3=e.sent,e.t2.log.call(e.t2,e.t3),e.next=3;break;case 14:return e.next=16,a.loadData();case 16:case"end":return e.stop()}var r}),e)})));return function(t){return e.apply(this,arguments)}}(),a.componentDidMount=function(){return a.loadData()},a.state={data:[],password:"",loggedIn:!0,file:void 0},a}return Object(O.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.password,a=t.loggedIn,o=t.data;return a?r.a.createElement("div",{className:"ZoomTicket"},r.a.createElement("div",{className:"container"},"\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 .CSV \u0444\u0430\u0439\u043b\u0430 (\u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0438\u0441\u0430\u043d\u044b)",r.a.createElement(B.a,{onFileLoaded:function(t,n){return e.addData(t)}})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"ZoomTicket__tickets"},r.a.createElement("h4",{className:"h4"},"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u0431\u0438\u043b\u0435\u0442\u044b:"),o.map((function(e,t){return r.a.createElement("div",{key:e.id,className:"ZoomTicket__tickets__item"},r.a.createElement("div",{className:"ZoomTicket__tickets__item__index"},t+1,"."),r.a.createElement("div",{className:"ZoomTicket__tickets__item__ticketNumber"},e.number),r.a.createElement("div",{className:"ZoomTicket__tickets__item__zoomURL"},e.used?Object(L.a)(new Date(1e3*e.used),"dd/mm/yyyy"):"\u043d\u0435 \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d"))}))))):r.a.createElement("div",{className:"ZoomTicket"},r.a.createElement("div",{className:"container"},r.a.createElement(S,{value:n,onChange:function(t){return e.setState({password:t,loggedIn:"aNg2R4V5"===t})},placeholder:"\u043f\u0430\u0440\u043e\u043b\u044c"})))}}]),n}(r.a.Component);U.contextType=_;var M=U,z=function(e){return r.a.createElement("a",{className:e.className,href:e.to,target:e.newTab?"_blank":"",rel:"noopener noreferrer"},e.children)},Z=n(34),W=n.n(Z),K=n(35),q=n.n(K),J=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={},e.render=function(){return r.a.createElement("div",{className:"footer",ref:e.props.elemRef},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"footer__logo"},r.a.createElement(z,{newTab:!0,to:"https://tochkadostupa.spb.ru"},r.a.createElement("img",{className:"desktop-only",src:W.a}),r.a.createElement("img",{className:"mobile-only",src:q.a}))),r.a.createElement("div",{className:"footer__links"},r.a.createElement(z,{newTab:!0,to:"https://tochkadostupa.spb.ru/events/not_to_scale"},"\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"))))},e}return n}(a.Component),Y=n(36),V=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){a.resizeObserver=new Y.a((function(){return a.resize()})).observe(a.canvasRef.current),a.resize()},a.resize=function(){var e=a.getCtx();e&&(e.canvas.width=a.canvasRef.current.clientWidth,e.canvas.height=a.canvasRef.current.clientHeight)},a.getCtx=function(){return a.canvasRef.current&&a.canvasRef.current.getContext("2d")},a.setPos=function(e){return a.pos={x:e.clientX,y:e.clientY}},a.setPosTouch=function(e){var t=e.changedTouches&&e.changedTouches[0];t&&(a.pos={x:t.pageX,y:t.pageY})},a.draw=function(e){var t=a.getCtx();t&&"undefined"!==typeof a.pos.x&&1===e.buttons&&(t.beginPath(),t.lineWidth=2.5,t.lineCap="round",t.strokeStyle="#ee0200",t.moveTo(a.pos.x,a.pos.y),a.setPos(e),t.lineTo(a.pos.x,a.pos.y),t.stroke())},a.drawTouch=function(e){var t=a.getCtx();t&&"undefined"!==typeof a.pos.x&&a.pressed&&(t.beginPath(),t.lineWidth=2.5,t.lineCap="round",t.strokeStyle="#ee0200",t.moveTo(a.pos.x,a.pos.y),a.setPosTouch(e),t.lineTo(a.pos.x,a.pos.y),t.stroke())},a.render=function(){return r.a.createElement("div",{className:"canvas",ref:a.props.elemRef},r.a.createElement("canvas",{ref:a.canvasRef}))},a.pos={x:void 0,y:void 0},a.pressed=!1,a.canvasRef=r.a.createRef(),!function(){try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}}()?(document.addEventListener("mousemove",(function(e){return a.draw(e)})),document.addEventListener("mousedown",(function(e){return a.setPos(e)})),document.addEventListener("mouseenter",(function(e){return a.setPos(e)}))):(document.addEventListener("touchmove",(function(e){return a.drawTouch(e)})),document.addEventListener("touchstart",(function(e){a.pressed=!0,a.setPosTouch(e)})),document.addEventListener("touchend",(function(e){a.pressed=!1,a.setPosTouch(e)}))),a}return n}(a.Component),X=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={},e.render=function(){var e=[r.a.createElement("a",{href:"safari://the-sociophobic.github.io/not-to-scale",target:"_blank"},"Safari"),r.a.createElement("a",{href:"googlechrome://the-sociophobic.github.io/not-to-scale",target:"_blank"},"Chrome")],t="not iOS"===g()?e[1]:e[0],n="not iOS"===g()?e[0]:e[1];return r.a.createElement("div",{className:"open-browser"},r.a.createElement("div",{className:"open-browser__text"},"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0441\u0430\u0439\u0442",r.a.createElement("br",null),"\u0432 ",t," \u0438\u043b\u0438 ",n))},e}return n}(r.a.Component),H=(n(71),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a,o;return Object(c.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){w(a.footerRef.current),w(a.canvasRef.current)},a.componentWillUnmount=function(){x(a.footerRef.current),x(a.canvasRef.current)},a.render=function(){return r.a.createElement(i.a,null,r.a.createElement(_.Provider,{value:a.state},r.a.createElement(m.a,null,r.a.createElement(V,{elemRef:a.canvasRef}),r.a.createElement("div",{className:"App",ref:a.appRef},"uiwebview"===g()?r.a.createElement(X,null):r.a.createElement("div",{className:"content"},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/not-to-scale/"},r.a.createElement(D,null)),r.a.createElement(p.a,{path:"/not-to-scale/admin"},r.a.createElement(M,null)))),r.a.createElement(J,{elemRef:a.footerRef})))))},a.state=(o={state:a.state,setState:a.setState},{store:new k({stateRefs:o,DBlink:"https://schedule.tochkadostupa.spb.ru/not-to-scale/api"})}),a.appRef=r.a.createRef(),a.footerRef=r.a.createRef(),a.canvasRef=r.a.createRef(),a}return n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.ff33b4ed.chunk.js.map