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


import {registerKeyboard} from 'react-360-keyboard';

const surfaceModule = NativeModules.surfaceModule;


export default class Scary_VR extends React.Component {

  render() {
      return (
        <View>
          {/* <KeyboardPanel/> */}
          {/* <ThreeD/> */}
          {/* <ScareScreen/> */}
        </View>
      );
    }
};


AppRegistry.registerComponent('Scary_VR', () => Scary_VR);
AppRegistry.registerComponent('ScareScreen', () => ScareScreen);
AppRegistry.registerComponent(...registerKeyboard);

