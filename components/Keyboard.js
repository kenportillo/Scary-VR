import React from 'react';
import {VrButton, 
  NativeModules, 
  AppRegistry, 
  StyleSheet, 
  View, 
  Text
} from 'react-360';

import {registerKeyboard} from 'react-360-keyboard';
// import { TextInput } from 'react-native-gesture-handler';
// import ThreeD from './ThreeD';
// import ScareScreen from './ScareScreen'

const LAPI = 'http://localhost:3000/login';

const surfaceModule = NativeModules.surfaceModule;


export default class KeyboardPanel extends React.Component {
  state ={
    currentUser: null,
    loggedIn: false,
    tempUser:{
      username: null,
      password: null
    },
    loginView: false,
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
  
  enterName = () => {
    NativeModules.Keyboard.startInput({
      placeholder: 'Enter Your Name',
    }).then(input => this.setState({
      tempUser: {
        ...this.state.tempUser,
        username: input
      }
    }))
  }

  handleLogin=()=>{
    
    let input = this.state.tempUser
    console.log(input)//random issue - I'm still sending a name instead of a username, but it is working? 
    //logout doesn't actually log you out because of this
    
    fetch(LAPI,{
      method: 'POST',
      headers:{
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        username: input.username,
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
        console.log(this.state.loggedIn, this.state.currentUser)
      }
    })
  }


  showWelcome = () =>{
    return (
      <View style={styles.panel}>
        <Text >
        Welcome To Scary VR
        </Text>
        <VrButton onClick={this.enterName}>
          <Text >{!this.state.tempUser.username ? "Enter Your Name" : this.state.tempUser.username}</Text>
        </VrButton>
        <VrButton onClick={this.enterPassword}>
          <Text >{!this.state.tempUser.password ? "Enter Your Password" : "🙈🙈🙈🙈"}</Text>
        </VrButton>
        {/* <TouchableHighlight onClick={this.handleLogout} style={styles.button}> */}
        <VrButton onClick={this.handleLogin}>
          <Text>Login</Text>
        </VrButton>
        {/* </TouchableHighlight> */}
      </View>
    );
  }


  handleLogout = () =>{
    AudioModule.stopEnvironmental();
    Environment.setBackgroundImage(asset('360_world.jpg'));
    this.setState({
      currentUser: null,
      loggedIn: false,
      currentBg: '360_world.jpg',
      playing:false,
      currentSong: null
    })
  }

  showLogin(){
    this.setState({
      loginView: true
    })
  }

  hideLogin(){
    this.setState({
      loginView: false
    })
  }

  onClick() {
    // 4.) show the keyboard
    NativeModules.Keyboard.startInput({
      placeholder: 'Enter your name',
    }).then(input => console.log(input));
  }

  render(){
    console.log(this.state.loggedIn)
    return(
    <View style={styles.panel}>
      <VrButton onclick={() => surfaceModule.destroyPanel()}>
        <Text>Close Keyboard</Text>
      </VrButton>
      <VrButton onClick={this.onClick}>
        <Text>Show Keyboard</Text>
      </VrButton>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 200,
    height: 300,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    // alignItems: 'center',
    // textAlign: 'left',
    // borderColor: '#639dda',
    // borderWidth: 2,
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


AppRegistry.registerComponent('KeyboardPanel', () => KeyboardComponent);
// AppRegistry.registerComponent('KeyboardPanel', () => KeyboardComponent);
AppRegistry.registerComponent(...registerKeyboard)
// AppRegistry.registerComponent('ScareScreen', () => ScareScreen);

