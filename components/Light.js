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
          intensity={0.1}
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
              {translate: [50,0,0]}
            ]
          }}
        />
        <SpotLight 
          intensity={0.5}
        />

        {/* <PointLight 
          intensity={0.2}
          style={{
            color: '#F5F5DC',
            transform: [
              {translate: [0,0,0]},
            ]
          }}
          distance={10}
        /> */}
        
      </View>
    );
  }
};
