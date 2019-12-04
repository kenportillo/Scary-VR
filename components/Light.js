import React from 'react';
import {
  AppRegistry,
  View,
  AmbientLight,
  PointLight,
  SpotLight
} from 'react-360';

export default class Light extends React.Component {
  render() {
    return (
      <View>
        <AmbientLight
          intensity={0.2}
          style={{
            color: '#ffffff',
            transform: [
              {translate: [0,0,0]},
            ]
          }}
        />

        <SpotLight 
          intensity={0.2}
          style={{
            transform: [
              {translate: [20,0,-50]}
            ]
          }}
        />
        <SpotLight 
          intensity={0.2}
          style={{
            transform: [
              {translate: [-20,0,-100]}
            ]
          }}
        />

        <SpotLight 
          intensity={0.2}
          style={{
            transform: [
              {translate: [-30,0,0]}
            ]
          }}
        />

        <SpotLight 
          intensity={0.2}
        />
        
      </View>
    );
  }
};
