(this.webpackJsonpspesa=this.webpackJsonpspesa||[]).push([[0],{154:function(e,t,a){e.exports=a(342)},159:function(e,t,a){},160:function(e,t,a){},342:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(11),r=a.n(i),l=(a(159),a(83)),c=a(84),s=a(86),u=a(87),m=a(48),d=a(131),p=a(148),h=(a(160),a(5)),g=(a(91),a(133)),b=a.n(g),v=(a(343),a(169),a(135)),f=a(85),E=a(149),y=a(139),C=a(140),w=a(376),I=a(387),k=a(7),x=a(382),A=a(384),G=a(385),S=a(381),O=a(388),D=a(378),j=a(383),U=a(386),P=a(374),z=a(144),B=a.n(z),L=a(147),R=a.n(L),N=a(379),W=a(142),H=a.n(W),M=a(143),J=a.n(M),K=a(146),q=a.n(K),F=a(145),T=a.n(F);h.initializeApp({apiKey:"AIzaSyADxgU6pKy-sqxGhPHkqAoW_VqG85VsQB8",authDomain:"spesa-2de52.firebaseapp.com",databaseURL:"https://spesa-2de52.firebaseio.com",projectId:"spesa-2de52",storageBucket:"spesa-2de52.appspot.com",messagingSenderId:"232880545893",appId:"1:232880545893:web:57cbf0ac1e002b3625a68c",measurementId:"G-K5TC2JJMH8"}),h.analytics();var V=Object(P.a)((function(e){return{text:{padding:e.spacing(2,2,0)},paper:{paddingBottom:50},list:{marginBottom:e.spacing(2),width:250},subheader:{backgroundColor:e.palette.background.paper},appBar:{top:"auto",bottom:0},grow:{flexGrow:1},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"},fullList:{width:"auto"},root:{display:"flex","& > *":{margin:e.spacing(1)}}}}));function _(){var e=o.a.useState({left:!1}),t=Object(p.a)(e,2),a=t[0],n=t[1],i=function(e,t){return function(o){(!o||"keydown"!==o.type||"Tab"!==o.key&&"Shift"!==o.key)&&n(Object(d.a)({},a,Object(m.a)({},e,t)))}};return o.a.createElement(w.a,{position:"fixed",color:"primary",className:V().appBar},o.a.createElement(Q,{state:a,setState:n,toggleDrawer:i}),o.a.createElement(D.a,null,o.a.createElement(N.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:i("left",!0)},o.a.createElement(H.a,null)),o.a.createElement("div",{className:V().grow}),o.a.createElement(I.a,{alt:h.auth().currentUser.displayName,src:h.auth().currentUser.photoURL}),o.a.createElement(N.a,{color:"inherit","aria-label":"logout",onClick:function(){h.auth().signOut()}},o.a.createElement(J.a,null))))}function Q(e){var t=V(),a=e.state,n=e.toggleDrawer;return o.a.createElement("div",null,["left"].map((function(e){return o.a.createElement(o.a.Fragment,{key:e},o.a.createElement(U.a,{anchor:e,open:a[e],onClose:n(e,!1),onOpen:n(e,!0)},function(e){return o.a.createElement("div",{className:Object(k.a)(t.list,Object(m.a)({},t.fullList,"top"===e||"bottom"===e)),role:"presentation",onClick:n(e,!1),onKeyDown:n(e,!1)},o.a.createElement(S.a,null,o.a.createElement(O.a,null,o.a.createElement("div",{className:t.root},o.a.createElement(I.a,{alt:h.auth().currentUser.displayName,src:h.auth().currentUser.photoURL})))),o.a.createElement(x.a,null))}(e)))})))}function $(e){if(console.log(h.auth().currentUser.email),console.log(e.isGeolocationAvailable),console.log(e.isGeolocationEnabled),!e.isGeolocationAvailable)return o.a.createElement(j.a,{color:"textPrimary"},"La posizione non \xe8 disponibile :(");if(!e.isGeolocationEnabled)return o.a.createElement(j.a,{color:"textPrimary"},"Per favore abilita il GPS per salvare.");e.isGeolocationAvailable&&e.isGeolocationEnabled&&(localStorage.setItem("arteInsiemeSalvataggio",e.saveableCanvas.getSaveData()),h.firestore().collection("disegni").doc(h.auth().currentUser.email).set({disegno:e.saveableCanvas.getSaveData(),base64:e.saveableCanvas.canvasContainer.children[1].toDataURL(),lat:e.coords.latitude,lon:e.coords.longitude}));return o.a.createElement(j.a,{color:"textPrimary"},"Salvataggio completato.")}var X=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={color:"#444",datiDisegno:null,giaFatto:!1},e.handleChangeComplete=function(t,a){e.setState({color:t.hex})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("arteInsiemeSalvataggio");h.firestore().collection("disegni").doc(h.auth().currentUser.email).get().then((function(t){if(t.exists){var a=t.data().disegno;void 0!==a&&e.setState({datiDisegno:a}).catch((function(e){}))}})).catch((function(a){null!=t&&e.setState({datiDisegno:t})}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(A.a,{color:"secondary","aria-label":"colore",style:{margin:0,zIndex:1,top:"auto",right:20,bottom:260,left:"auto",position:"fixed"}},o.a.createElement(f.a,{trigger:o.a.createElement(B.a,null),position:"left center"},o.a.createElement(y.SketchPicker,{color:this.state.color,onChangeComplete:this.handleChangeComplete,disableAlpha:!0}))),o.a.createElement(A.a,{color:"secondary","aria-label":"save",style:{margin:0,zIndex:1,top:"auto",right:20,bottom:200,left:"auto",position:"fixed"}},o.a.createElement(f.a,{trigger:o.a.createElement(T.a,null),position:"left center"},o.a.createElement($,{isGeolocationAvailable:this.props.isGeolocationAvailable,isGeolocationEnabled:this.props.isGeolocationEnabled,coords:this.props.coords,saveableCanvas:this.saveableCanvas}))),o.a.createElement(A.a,{color:"secondary","aria-label":"undo",style:{margin:0,zIndex:1,right:20,bottom:140,left:"auto",position:"fixed"}},o.a.createElement(q.a,{onClick:function(){e.saveableCanvas.undo()}})),o.a.createElement(A.a,{color:"secondary","aria-label":"clear",style:{margin:0,zIndex:1,top:"auto",right:20,bottom:80,left:"auto",position:"fixed"}},o.a.createElement(R.a,{onClick:function(){e.saveableCanvas.clear()}})),o.a.createElement(E.a,{hideInterface:!!C.isMobile,ref:function(t){e.saveableCanvas=t},saveData:this.state.datiDisegno,brushColor:this.state.color,style:{width:window.innerWidth,height:window.innerHeight-65,zIndex:-1,position:"absolute"}}))}}]),a}(o.a.Component),Y=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={isSignedIn:!1},e.uiConfig={signInFlow:"popup",signInOptions:[h.auth.GoogleAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(){return!1}}},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.unregisterAuthObserver=h.auth().onAuthStateChanged((function(t){return e.setState({isSignedIn:!!t})}))}},{key:"componentWillUnmount",value:function(){this.unregisterAuthObserver()}},{key:"render",value:function(){return this.state.isSignedIn?o.a.createElement("div",null,o.a.createElement(_,null),o.a.createElement(X,{isGeolocationAvailable:this.props.isGeolocationAvailable,isGeolocationEnabled:this.props.isGeolocationEnabled,coords:this.props.coords})):o.a.createElement("div",null,o.a.createElement(G.a,{container:!0,spacing:5,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh"}},o.a.createElement(G.a,{item:!0,xs:12},o.a.createElement(j.a,{variant:"h1",component:"h2"},"Arte tutti insieme")),o.a.createElement(G.a,{item:!0,xs:12},o.a.createElement(b.a,{uiConfig:this.uiConfig,firebaseAuth:h.auth()}))))}}]),a}(o.a.Component);var Z=Object(v.geolocated)({positionOptions:{enableHighAccuracy:!1},watchPosition:!0,userDecisionTimeout:5e3})((function(e){return o.a.createElement("div",null,o.a.createElement(Y,{isGeolocationAvailable:e.isGeolocationAvailable,isGeolocationEnabled:e.isGeolocationEnabled,coords:e.coords}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[154,1,2]]]);
//# sourceMappingURL=main.1341a90c.chunk.js.map