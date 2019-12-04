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

  handleLogin=()=>{    
    let input = this.state.tempUser
    
    fetch('http://10.9.107.232:3000/login',{
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

  showWelcome = () =>{
    return (
      <View style={styles.panel}>
        <Text style={styles.text}>
        Welcome to SHITTY MAZE VR
        </Text>
        <VrButton onClick={this.enterName}>
          <Text style={styles.text}>{!this.state.tempUser.name ? "Enter Your Name" : this.state.tempUser.name }</Text>
        </VrButton>
        <VrButton onClick={this.enterPassword}>
          <Text style={styles.text}>{!this.state.tempUser.password ? "Enter Password" : this.state.tempUser.password.length }</Text>
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
        <VrButton onClick={()=> surfaceModule.destroyPanel()}>
          <Text style={styles.text} >Close Login</Text>
        </VrButton>
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

  // onClick() {
  //   // 4.) show the keyboard
  //   NativeModules.Keyboard.startInput({
  //     placeholder: 'Enter your name',
  //   }).then(input => console.log(input));
  // }

  render() {
      // <View style={styles.panel}>
    // <View>
    //   <VrButton onClick={()=> surfaceModule.destroyPanel()}>
    //     <Text>Destroy</Text>
    //   </VrButton>

    //   <VrButton onClick={this.onClick}>
    //     <Text>Show Keyboard</Text>
    //   </VrButton>
    // </View>

    if(this.state.currentUser === null){
      return (this.showWelcome())
    }
    else if(this.state.currentUser !== null){
    return(this.showGoodBye())
    }
      // {/* </View> */}
  }
}

//   render() {
//       return (
//         <View>
//           <KeyboardPanel/>
//           {/* <ThreeD/> */}
//           {/* <ScareScreen/> */}
//           <Light />
//         </View>
//       );
//     }
// };

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

