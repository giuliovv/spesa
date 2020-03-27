import React from 'react';
import './App.css';

import * as firebase from "firebase/app";
import 'firebaseui'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import 'firebase/analytics';
import '@firebase/firestore'
import { GeoCollectionReference, GeoFirestore, GeoQuery, GeoQuerySnapshot } from 'geofirestore';

import { geolocated } from "react-geolocated";

import Popup from "reactjs-popup";
import CanvasDraw from "react-canvas-draw";
import { SketchPicker } from 'react-color';
import { isMobile } from "react-device-detect";

import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, makeStyles, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';

import ColorizeIcon from '@material-ui/icons/Colorize';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import UndoIcon from '@material-ui/icons/Undo';
import SaveIcon from '@material-ui/icons/Save';
import ImageIcon from '@material-ui/icons/Image';

var firebaseConfig = {
  apiKey: "AIzaSyADxgU6pKy-sqxGhPHkqAoW_VqG85VsQB8",
  authDomain: "spesa-2de52.firebaseapp.com",
  databaseURL: "https://spesa-2de52.firebaseio.com",
  projectId: "spesa-2de52",
  storageBucket: "spesa-2de52.appspot.com",
  messagingSenderId: "232880545893",
  appId: "1:232880545893:web:57cbf0ac1e002b3625a68c",
  measurementId: "G-K5TC2JJMH8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let theme = createMuiTheme({
  palette: {
    background: {
      default: "#315190"
    },
    primary: { main: '#315190' },
    secondary: { main: '#40bd47' },
  },
  status: {
    danger: 'orange',
  },
  typography: {
    h2: {
      color: "#fed111"
    },
    h1: {
      color: "#fed111"
    },
    fontFamily: "'Baloo Da 2', cursive",
  }
});
theme = responsiveFontSizes(theme);

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
    width: 250,
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  fullList: {
    width: 'auto',
  },
  footer: {
    top: 'auto',
    bottom: 0,
    shadows: ["none"],
  },
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function BottomAppBar(props) {
  return (
    <AppBar position="fixed" color="primary" className={useStyles().appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={() => {props.handleChange()}}>
            <ImageIcon />
          </IconButton>
          <div className={useStyles().grow} />
          <Avatar alt={firebase.auth().currentUser.displayName} src={firebase.auth().currentUser.photoURL} />
          <IconButton color="inherit" aria-label="logout" onClick={() => {firebase.auth().signOut()}}>
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
  )
}

function LocationOk(props){
  if (! props.isGeolocationAvailable){
    return <Typography color="textPrimary" style={{"text-transform": "lowercase"}}>
      La posizione non è disponibile :(
      </Typography>
  }
  if (! props.isGeolocationEnabled){
    return <Typography color="textPrimary" style={{"text-transform": "lowercase"}}>
      Per favore abilita il GPS per salvare.
      </Typography>
  }
  if (props.isGeolocationAvailable && props.isGeolocationEnabled && props.coords != null){
    localStorage.setItem(
      "arteInsiemeSalvataggio",
      props.saveableCanvas.getSaveData()
    );
    const firestore = firebase.firestore();
    const geoFirestore = new GeoFirestore(firestore);
    const geoCollectionRef = geoFirestore.collection('disegni');
    geoCollectionRef.doc(firebase.auth().currentUser.email).set({
      disegno: props.saveableCanvas.getSaveData(),
      base64: props.saveableCanvas.canvasContainer.children[1].toDataURL(),
      coordinates: new firebase.firestore.GeoPoint(props.coords.latitude, props.coords.longitude),
    });
  } 
  return <Typography color="textPrimary">
      Salvataggio completato.
      </Typography>
}

class VistaDisegni extends React.Component {
  render() {
    return <p>CIAONE</p>
  }
}

class Disegno extends React.Component {

  state = {
    color: "#444",
    datiDisegno: null,
    giaFatto: false
  };

  handleChangeComplete = (color, event) => {
    this.setState({ color: color.hex });
  };

  componentDidMount() {
    var localDisegno = localStorage.getItem("arteInsiemeSalvataggio");
    const db = firebase.firestore();
    let cityRef = db.collection("disegni").doc(firebase.auth().currentUser.email);
    cityRef.get()
      .then(doc => {
        if (doc.exists) {
          let dis_ = doc.data().d.disegno;
          if(dis_ !== undefined){
            this.setState({ datiDisegno: dis_ }).catch(err =>{});
          }
        }
      })
      .catch(err => {
        if (localDisegno != null){
          this.setState({ 
            datiDisegno: localDisegno,
           })
        }
      });
}

  render() {
    if (this.props.vistaDisegni){
      return (<VistaDisegni />)
    }
    return (
      <div>
        <Fab 
          color="secondary" 
          aria-label="colore"
          style={{
            margin: 0,
            zIndex: 1,
            top: 'auto',
            right: 20,
            bottom: 260,
            left: 'auto',
            position: 'fixed',
          }}
          >
            <Popup trigger={<ColorizeIcon style={{ color: "white" }}/>} position="left center">
              <SketchPicker
                color={ this.state.color }
                onChangeComplete={ this.handleChangeComplete }
                disableAlpha={ true }
              />
            </Popup>
        </Fab>
        <Fab 
          color="secondary" 
          aria-label="save"
          style={{
            margin: 0,
            zIndex: 1,
            top: 'auto',
            right: 20,
            bottom: 200,
            left: 'auto',
            position: 'fixed',
          }}
          >
            <Popup trigger={
            <SaveIcon style={{ color: "white" }}/>} 
            position="left center">
            <LocationOk 
            isGeolocationAvailable={this.props.isGeolocationAvailable}
            isGeolocationEnabled={this.props.isGeolocationEnabled}
            coords={this.props.coords}
            saveableCanvas={this.saveableCanvas}
            />
          </Popup>
        </Fab>
        <Fab 
          color="secondary" 
          aria-label="undo"
          style={{
            margin: 0,
            zIndex: 1,
            // top: 'auto',
            right: 20,
            bottom: 140,
            left: 'auto',
            position: 'fixed',
          }}
          >
            <UndoIcon onClick={() => {
              this.saveableCanvas.undo();
            }}
            style={{ color: "white" }}/>
        </Fab>
        <Fab 
          color="secondary" 
          aria-label="clear"
          style={{
            margin: 0,
            zIndex: 1,
            top: 'auto',
            right: 20,
            bottom: 80,
            left: 'auto',
            position: 'fixed',
          }}
          >
            <DeleteIcon onClick={() => {
              this.saveableCanvas.clear();
            }} style={{ color: "white" }}/>
        </Fab>
          <CanvasDraw
          hideInterface={(isMobile) ? true : false}
          ref={canvasDraw => {
            this.saveableCanvas = canvasDraw;
          }}
          saveData={this.state.datiDisegno}
          brushColor={this.state.color}
          style={{
            width: window.innerWidth,
            height: window.innerHeight - 65,
            zIndex: -1,
            position: "absolute",
            // height: "40%"
            // boxShadow:
            //   "0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)"
          }}
          />
      </div>
    );
  }
}

function Footer(){
  return (
    <AppBar position="fixed" color="primary" className={useStyles().footer} elevation={0}>
      <Toolbar>
        <div className={useStyles().grow} />
        <IconButton>
          <Button color="inherit" onClick={() => window.open("https://www.privacypolicygenerator.info/live.php?token=bOaq2FxZvBZ3mJY3PESMHOe27PREKKjp")}>Privacy policy</Button>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

class SignInScreen extends React.Component {

  // The component's Local state.
  state = {
    isSignedIn: false, // Local signed-in state.
  };

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }
  
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  handleChange = () => {
    this.setState({vistaDisegni: !this.state.vistaDisegni});
  };

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <div 
          style={{
            backgroundColor: "#315190",
            }}>
            <Grid
              container
              spacing={5}
              direction="column"
              alignItems="center"
              justify="center"
              style={{ minHeight: '100vh' }}
            >

              <Grid item xs={12}>
                <Typography variant="h1" component="h2">
                Art@Hack
                </Typography>
              </Grid>  
              <Grid item xs={12}>
              <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
              </Grid>   
            </Grid>
          </div>
          <Footer/>
      </div>
      );
    }
    return (
      <div>
        <BottomAppBar 
        vistaDisegni={this.state.vistaDisegni}
        handleChange={this.handleChange}
        />
        <Disegno 
        isGeolocationAvailable={this.props.isGeolocationAvailable} 
        isGeolocationEnabled={this.props.isGeolocationEnabled}
        coords={this.props.coords}
        vistaDisegni={this.state.vistaDisegni}
        />
      </div>
    );
  }
}

function App(props) {
  return (
      <div>
          <ThemeProvider theme={theme}>
            <SignInScreen 
            isGeolocationAvailable={props.isGeolocationAvailable} 
            isGeolocationEnabled={props.isGeolocationEnabled}
            coords={props.coords}
            />
          </ThemeProvider>
      </div>
    );
}

export default geolocated({
  positionOptions: {
      enableHighAccuracy: false,
  },
  watchPosition: true,
  userDecisionTimeout: 5000,
})(App);
