(this.webpackJsonpspesa=this.webpackJsonpspesa||[]).push([[0],{144:function(e,t,a){e.exports=a(332)},149:function(e,t,a){},150:function(e,t,a){},332:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),i=a(30),r=a.n(i),l=(a(149),a(75)),s=a(76),c=a(78),u=a(79),d=(a(150),a(3)),m=(a(84),a(125)),p=a.n(m),h=(a(333),a(159),a(127)),g=a(128),v=a(77),b=a(142),f=a(132),E=a(133),y=a(369),w=a(367),C=a(364),I=a(363),k=a(365),x=a(360),A=a(362),G=a(141),D=a(368),S=a(359),O=a(366),j=a(137),B=a.n(j),z=a(140),P=a.n(z),U=a(361),H=a(136),R=a.n(H),M=a(139),N=a.n(M),W=a(138),F=a.n(W),J=a(135),K=a.n(J),q=[45.4642,9.19];d.initializeApp({apiKey:"AIzaSyADxgU6pKy-sqxGhPHkqAoW_VqG85VsQB8",authDomain:"spesa-2de52.firebaseapp.com",databaseURL:"https://spesa-2de52.firebaseio.com",projectId:"spesa-2de52",storageBucket:"spesa-2de52.appspot.com",messagingSenderId:"232880545893",appId:"1:232880545893:web:57cbf0ac1e002b3625a68c",measurementId:"G-K5TC2JJMH8"}),d.analytics();var L=Object(G.a)({palette:{background:{default:"#315190"},primary:{main:"#315190"},secondary:{main:"#40bd47"}},status:{danger:"orange"},typography:{h2:{color:"#fed111"},h1:{color:"#fed111"},fontFamily:"'Baloo Da 2', cursive"}});L=Object(D.a)(L);var T=Object(S.a)((function(e){return{text:{padding:e.spacing(2,2,0)},paper:{paddingBottom:50},list:{marginBottom:e.spacing(2),width:250},subheader:{backgroundColor:e.palette.background.paper},appBar:{top:"auto",bottom:0},grow:{flexGrow:1},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"},fullList:{width:"auto"},footer:{top:"auto",bottom:0,shadows:["none"]},root:{display:"flex","& > *":{margin:e.spacing(1)}}}}));function V(e){return n.a.createElement(y.a,{position:"fixed",color:"primary",className:T().appBar},n.a.createElement(x.a,null,n.a.createElement(U.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){e.handleChange()}},n.a.createElement(K.a,null)),n.a.createElement("div",{className:T().grow}),n.a.createElement(w.a,{alt:d.auth().currentUser.displayName,src:d.auth().currentUser.photoURL}),n.a.createElement(U.a,{color:"inherit","aria-label":"logout",onClick:function(){d.auth().signOut()}},n.a.createElement(R.a,null))))}function Z(e){var t,a,o="Salvataggio completato.";e.isGeolocationAvailable&&e.isGeolocationEnabled||(o="Salvataggio completato, abilita il gps per salvare il disegno nella tua posizione sul murales."),null==e.coords?(t=q[0],a=q[1]):(t=e.coords.latitude,a=e.coords.longitude),localStorage.setItem("arteInsiemeSalvataggio",e.saveableCanvas.getSaveData());var i=d.firestore();return new h.GeoFirestore(i).collection("disegni").doc(d.auth().currentUser.email).set({disegno:e.saveableCanvas.getSaveData(),base64:e.saveableCanvas.canvasContainer.children[1].toDataURL(),coordinates:new d.firestore.GeoPoint(t,a),timestamp:+new Date}),n.a.createElement(A.a,{color:"textPrimary",style:{textTransform:"lowercase"}},o)}function _(e){return d.firestore().collection("disegni").orderBy("timestamp").limit(20).get().then((function(e){return console.log(e)})),n.a.createElement("p",null,"CIAONE")}var Q=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={color:"#444",datiDisegno:null,giaFatto:!1},e.handleChangeComplete=function(t,a){e.setState({color:t.hex})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("arteInsiemeSalvataggio");d.firestore().collection("disegni").doc(d.auth().currentUser.email).get().then((function(t){if(t.exists){var a=t.data().d.disegno;void 0!==a&&e.setState({datiDisegno:a}).catch((function(e){}))}})).catch((function(a){null!=t&&e.setState({datiDisegno:t})}))}},{key:"render",value:function(){var e=this;return this.props.vistaDisegni?n.a.createElement(_,{isGeolocationAvailable:this.props.isGeolocationAvailable,isGeolocationEnabled:this.props.isGeolocationEnabled,coords:this.props.coords}):n.a.createElement("div",null,n.a.createElement(I.a,{color:"secondary","aria-label":"colore",style:{margin:0,zIndex:1,top:"auto",right:20,bottom:260,left:"auto",position:"fixed"}},n.a.createElement(v.a,{trigger:n.a.createElement(B.a,{style:{color:"white"}}),position:"left center"},n.a.createElement(f.SketchPicker,{color:this.state.color,onChangeComplete:this.handleChangeComplete,disableAlpha:!0}))),n.a.createElement(I.a,{color:"secondary","aria-label":"save",style:{margin:0,zIndex:1,top:"auto",right:20,bottom:200,left:"auto",position:"fixed"}},n.a.createElement(v.a,{trigger:n.a.createElement(F.a,{style:{color:"white"}}),position:"left center"},n.a.createElement(Z,{isGeolocationAvailable:this.props.isGeolocationAvailable,isGeolocationEnabled:this.props.isGeolocationEnabled,coords:this.props.coords,saveableCanvas:this.saveableCanvas}))),n.a.createElement(I.a,{color:"secondary","aria-label":"undo",style:{margin:0,zIndex:1,right:20,bottom:140,left:"auto",position:"fixed"}},n.a.createElement(N.a,{onClick:function(){e.saveableCanvas.undo()},style:{color:"white"}})),n.a.createElement(I.a,{color:"secondary","aria-label":"clear",style:{margin:0,zIndex:1,top:"auto",right:20,bottom:80,left:"auto",position:"fixed"}},n.a.createElement(P.a,{onClick:function(){e.saveableCanvas.clear()},style:{color:"white"}})),n.a.createElement(b.a,{hideInterface:!!E.isMobile,ref:function(t){e.saveableCanvas=t},saveData:this.state.datiDisegno,brushColor:this.state.color,style:{width:window.innerWidth,height:window.innerHeight-65,zIndex:-1,position:"absolute"}}))}}]),a}(n.a.Component);function Y(){return n.a.createElement(y.a,{position:"fixed",color:"primary",className:T().footer,elevation:0},n.a.createElement(x.a,null,n.a.createElement(U.a,null,n.a.createElement(C.a,{color:"inherit",onClick:function(){return window.open("https://www.privacypolicygenerator.info/live.php?token=bOaq2FxZvBZ3mJY3PESMHOe27PREKKjp")}},"Privacy policy")),n.a.createElement("div",{className:T().grow}),n.a.createElement(A.a,null,"Sponsorizzato da:"),n.a.createElement(U.a,null,n.a.createElement(C.a,{color:"secondary",onClick:function(){return window.open("https://www.morocolor.it/")}},"Primo"))))}var $=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isSignedIn:!1},e.uiConfig={signInFlow:"popup",signInOptions:[d.auth.GoogleAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(){return!1}}},e.handleChange=function(){e.setState({vistaDisegni:!e.state.vistaDisegni})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.unregisterAuthObserver=d.auth().onAuthStateChanged((function(t){return e.setState({isSignedIn:!!t})}))}},{key:"componentWillUnmount",value:function(){this.unregisterAuthObserver()}},{key:"render",value:function(){return this.state.isSignedIn?n.a.createElement("div",null,n.a.createElement(V,{vistaDisegni:this.state.vistaDisegni,handleChange:this.handleChange}),n.a.createElement(Q,{isGeolocationAvailable:this.props.isGeolocationAvailable,isGeolocationEnabled:this.props.isGeolocationEnabled,coords:this.props.coords,vistaDisegni:this.state.vistaDisegni})):n.a.createElement("div",null,n.a.createElement("div",{style:{backgroundColor:"#315190"}},n.a.createElement(k.a,{container:!0,spacing:5,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh"}},n.a.createElement(k.a,{item:!0,xs:12},n.a.createElement(A.a,{variant:"h1",component:"h2"},"Art@Hack")),n.a.createElement(k.a,{item:!0,xs:12},n.a.createElement(p.a,{uiConfig:this.uiConfig,firebaseAuth:d.auth()})))),n.a.createElement(Y,null))}}]),a}(n.a.Component);var X=Object(g.geolocated)({positionOptions:{enableHighAccuracy:!1},watchPosition:!0,userDecisionTimeout:5e3})((function(e){return n.a.createElement("div",null,n.a.createElement(O.a,{theme:L},n.a.createElement($,{isGeolocationAvailable:e.isGeolocationAvailable,isGeolocationEnabled:e.isGeolocationEnabled,coords:e.coords})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[144,1,2]]]);
//# sourceMappingURL=main.4f23293b.chunk.js.map