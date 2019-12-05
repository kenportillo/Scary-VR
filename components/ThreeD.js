import React from 'react';
import {
  AppRegistry,
  View,
  asset,
  VrButton,
  Image,
  NativeModules,
  Text
} from 'react-360';
import Light from './Light';
import Maze from './Maze';
import MazeMoves from '../moves/MazeMoves';

export default class ThreeD extends React.Component {

  render() {
    return (
      <View>
          <MazeMoves />
          <Maze />
          <Light/>
      </View>
    )
  }
};
















        {/* <Move1/>
        <Building /> */}



AppRegistry.registerComponent('ThreeD', () => ThreeD);

// state={
//   game: false
// }

// startGame(){
//   this.setState({
//     game: true
//   })
  
// }

// showLogin(){
//   return(
//     <View>
//       <Keyboard/>
//     </View>
//   )
// }

// showGame(){
//   return(
//     <View>
//       <Move1/>
//       <Building />
//       {/* <MazeMoves />
//       <Maze /> */}
//       <Light/>
//     </View>
//   )
// }

// <View>
//   <VrButton onClick={()=>{
//     this.startGame()
//   }}>
//     <View>
//       {this.showLogin()}
//     </View>
//   </VrButton>
//   {this.state.game && 
//   <View>
//     <Move1/>
//     <Building/>
//     <Light />
//   </View>
//   }
// </View>

// console.log('Im here')
// if(!this.state.game){
//   return(this.showLogin())
// }else if(this.state.game){
//   return(this.showGame())
// }


      // <View>
      //   {/* there is button on top of a button */}
      //   <Move1/>
      //   <Building />
      //   {/* <MazeMoves />
      //   <Maze /> */}
      //   <Light/>
      // </View>