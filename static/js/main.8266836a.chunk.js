(this.webpackJsonpspesa=this.webpackJsonpspesa||[]).push([[0],{152:function(e,t,a){e.exports=a(339)},157:function(e,t,a){},158:function(e,t,a){},339:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),i=a.n(o),l=(a(157),a(83)),c=a(84),s=a(85),u=a(86),m=a(48),p=a(130),h=a(146),d=(a(158),a(5)),g=(a(90),a(132)),f=a.n(g),b=(a(340),a(167),a(134)),v=a(147),E=a(138),y=a(373),w=a(384),C=a(7),k=a(379),I=a(380),x=a(381),O=a(378),S=a(385),j=a(375),A=a(382),D=a(383),U=a(371),B=a(142),z=a.n(B),N=a(145),R=a.n(N),W=a(376),G=a(140),L=a.n(G),H=a(141),J=a.n(H),K=a(144),P=a.n(K),q=a(143),M=a.n(q);d.initializeApp({apiKey:"AIzaSyADxgU6pKy-sqxGhPHkqAoW_VqG85VsQB8",authDomain:"spesa-2de52.firebaseapp.com",databaseURL:"https://spesa-2de52.firebaseio.com",projectId:"spesa-2de52",storageBucket:"spesa-2de52.appspot.com",messagingSenderId:"232880545893",appId:"1:232880545893:web:57cbf0ac1e002b3625a68c",measurementId:"G-K5TC2JJMH8"}),d.analytics();var V=Object(U.a)((function(e){return{text:{padding:e.spacing(2,2,0)},paper:{paddingBottom:50},list:{marginBottom:e.spacing(2),width:250},subheader:{backgroundColor:e.palette.background.paper},appBar:{top:"auto",bottom:0},grow:{flexGrow:1},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"},fullList:{width:"auto"},root:{display:"flex","& > *":{margin:e.spacing(1)}}}}));function F(){var e=r.a.useState({left:!1}),t=Object(h.a)(e,2),a=t[0],n=t[1],o=function(e,t){return function(r){(!r||"keydown"!==r.type||"Tab"!==r.key&&"Shift"!==r.key)&&n(Object(p.a)({},a,Object(m.a)({},e,t)))}};return r.a.createElement(y.a,{position:"fixed",color:"primary",className:V().appBar},r.a.createElement(T,{state:a,setState:n,toggleDrawer:o}),r.a.createElement(j.a,null,r.a.createElement(W.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:o("left",!0)},r.a.createElement(L.a,null)),r.a.createElement("div",{className:V().grow}),r.a.createElement(w.a,{alt:d.auth().currentUser.displayName,src:d.auth().currentUser.photoURL}),r.a.createElement(W.a,{color:"inherit","aria-label":"logout",onClick:function(){d.auth().signOut()}},r.a.createElement(J.a,null))))}function T(e){var t=V(),a=e.state,n=e.toggleDrawer;return r.a.createElement("div",null,["left"].map((function(e){return r.a.createElement(r.a.Fragment,{key:e},r.a.createElement(D.a,{anchor:e,open:a[e],onClose:n(e,!1),onOpen:n(e,!0)},function(e){return r.a.createElement("div",{className:Object(C.a)(t.list,Object(m.a)({},t.fullList,"top"===e||"bottom"===e)),role:"presentation",onClick:n(e,!1),onKeyDown:n(e,!1)},r.a.createElement(O.a,null,r.a.createElement(S.a,null,r.a.createElement("div",{className:t.root},r.a.createElement(w.a,{alt:d.auth().currentUser.displayName,src:d.auth().currentUser.photoURL})))),r.a.createElement(k.a,null))}(e)))})))}var _=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={color:"#444"},e.handleChangeComplete=function(t,a){e.setState({color:t.hex})},e.getDisegno=function(){var e=localStorage.getItem("arteInsiemeSalvataggio");if(console.log(e),e)return e;d.firestore().collection("disegni").doc(d.auth().currentUser.email).get().then((function(t){return t.exists?t.data():e})).catch((function(t){return e}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(I.a,{color:"secondary","aria-label":"colore",style:{margin:0,zIndex:1,top:"auto",right:20,bottom:260,left:"auto",position:"fixed"}},r.a.createElement(b.a,{trigger:r.a.createElement(z.a,null),position:"left center"},r.a.createElement(E.SketchPicker,{color:this.state.color,onChangeComplete:this.handleChangeComplete,disableAlpha:!0}))),r.a.createElement(I.a,{color:"secondary","aria-label":"save",style:{margin:0,zIndex:1,top:"auto",right:20,bottom:200,left:"auto",position:"fixed"}},r.a.createElement(M.a,{onClick:function(){localStorage.setItem("arteInsiemeSalvataggio",e.saveableCanvas.getSaveData()),d.firestore().collection("disegni").doc(d.auth().currentUser.email).set({})}})),r.a.createElement(I.a,{color:"secondary","aria-label":"undo",style:{margin:0,zIndex:1,right:20,bottom:140,left:"auto",position:"fixed"}},r.a.createElement(P.a,{onClick:function(){e.saveableCanvas.undo()}})),r.a.createElement(I.a,{color:"secondary","aria-label":"clear",style:{margin:0,zIndex:1,top:"auto",right:20,bottom:80,left:"auto",position:"fixed"}},r.a.createElement(R.a,{onClick:function(){e.saveableCanvas.clear()}})),r.a.createElement(v.a,{ref:function(t){return e.saveableCanvas=t},saveData:this.getDisegno(),brushColor:this.state.color,style:{width:window.innerWidth,height:window.innerHeight-65,zIndex:-1,position:"absolute"}}))}}]),a}(r.a.Component),Q=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isSignedIn:!1},e.uiConfig={signInFlow:"popup",signInOptions:[d.auth.GoogleAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(){return!1}}},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.unregisterAuthObserver=d.auth().onAuthStateChanged((function(t){return e.setState({isSignedIn:!!t})}))}},{key:"componentWillUnmount",value:function(){this.unregisterAuthObserver()}},{key:"render",value:function(){return this.state.isSignedIn?r.a.createElement("div",null,r.a.createElement(F,null),r.a.createElement(_,null)):r.a.createElement("div",null,r.a.createElement(x.a,{container:!0,spacing:5,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh"}},r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(A.a,{variant:"h1",component:"h2"},"Arte tutti insieme")),r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(f.a,{uiConfig:this.uiConfig,firebaseAuth:d.auth()}))))}}]),a}(r.a.Component);var $=function(){return r.a.createElement("div",null,r.a.createElement(Q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[152,1,2]]]);
//# sourceMappingURL=main.8266836a.chunk.js.map