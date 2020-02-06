import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AmbientLight,
  PointLight,
  asset,
  NativeModules,
  VrButton
} from 'react-360';
import ThreeD from './components/ThreeD';
import ScareScreen from './components/ScareScreen';
import KeyboardPanel from './components/Keyboard';
import Light from './components/Light'

const {AudioModule} = NativeModules;

import {registerKeyboard} from 'react-360-keyboard';

const surfaceModule = NativeModules.surfaceModule;


export default class Scary_VR extends React.Component {

  state={
    loggedIn: false,
    currentUser: null,
    tempUser:{
      username: null,
      password: null
    }
  }

  componentDidMount(){
    this.playMusic()
  }

  handleLogin=()=>{    
    let input = this.state.tempUser
    
    fetch('https://vr-app-api.herokuapp.com/login',{
      method: "POST",
      headers:{
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        username: input.name,
        password: input.password
      })
    }).then(resp => resp.json())
    .then( data => {
      if(data.errors){
        alert(data.errors)
      }else{
        this.setState({
          currentUser : input,
          loggedIn : true
        })
      }
    })
  }

  enterPassword = () => {
    NativeModules.Keyboard.startInput({
      placeholder: 'Enter Your Password',
    }).then(input => this.setState({
      tempUser: {
        ...this.state.tempUser,
        password: input
      }
    }))
  }

  playMusic(){
    AudioModule.playEnvironmental({
      source: asset('007.mp3'),
      volume: 0.3})
  }

  showWelcome = () =>{
    return (
      <View style={styles.panel}>
        <Text style={styles.text}>
        Welcome to the MAZE 
        </Text>
        <VrButton onClick={this.enterName}>
          <Text style={styles.text}>{!this.state.tempUser.name ? "Enter Your Name" : this.state.tempUser.name }</Text>
        </VrButton>
        <VrButton onClick={this.enterPassword}>
          <Text style={styles.text}>{!this.state.tempUser.password ? "Enter Password" : "🕸🕸🕸🕸" }</Text>
        </VrButton>
        <VrButton onClick={this.handleLogin}>
          <Text style={styles.text}>Login</Text>
        </VrButton>
      </View>
    );
  }

  showGoodBye = () => {
    return (
      <View style={styles.panel}>
        <VrButton onClick={()=> 
          surfaceModule.destroyPanel()}>
          <Text style={styles.text} >Close Login</Text>
        </VrButton>
        <Text style={styles.text}>
          Instructions:
        </Text>
        <Text style={styles.text}>
          Escape the MAZE.
        </Text>
        <Text style={styles.text}>
          Don't get trapped in a dead end.
        </Text>
      </View>
    )
  }

  enterName = () => {
    NativeModules.Keyboard.startInput({
      placeholder: 'Enter Your Name',
    }).then(input => this.setState({
      tempUser: {
        ...this.state.tempUser,
        name: input
      }
    }))
  }


  render() {
    if(this.state.currentUser === null){
      return (this.showWelcome())
    }
    else if(this.state.currentUser !== null){
    return(this.showGoodBye())
    }
  }
}


const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 20,
    fontWeight: 'bold',
    fontSize: 30,
  },
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, .4)',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Scary_VR', () => Scary_VR);
AppRegistry.registerComponent('ScareScreen', () => ScareScreen);
AppRegistry.registerComponent(...registerKeyboard);

