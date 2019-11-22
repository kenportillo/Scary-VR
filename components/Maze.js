import React from 'react';
import {
  AppRegistry,
  View,
  PointLight,
  asset
} from 'react-360';
import Entity from 'Entity';

export default class Building extends React.Component {
  render() {
    return (
      <View>
        <Entity
          style={{
            transform:[
              {translate: [ -0.09, 0.09, -4]},
              {scale: 1.1}
            ],
          }}
          source={{
            obj: asset('maze.obj'),
            mtl: asset('maze.mtl')
          }}
          lit={true}
        />
      </View>
    );
  }
};