import React from 'react';
import {
  AppRegistry,
  View,
  AmbientLight,
  PointLight,
} from 'react-360';

export default class Light extends React.Component {
  render() {
    return (
      <View>
        <AmbientLight
          intensity={0.5}
          style={{
            color: 'white',
            transform: [
              {translate: [0,0,0]},
            ]
          }}
        />

        <PointLight 
          intensity={0.3}
          style={{
            color: '#F5F5DC',
            transform: [
              {translate: [0,0,0]},
            ]
          }}
          distance={10}
        />
        
      </View>
    );
  }
};
