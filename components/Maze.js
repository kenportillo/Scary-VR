import React from 'react';
import {
  AppRegistry,
  View,
  PointLight,
  asset,
  VrButton
} from 'react-360';
import Entity from 'Entity';

export default class Building extends React.Component {

  render() {
    return (
      <View>
        <Entity
          style={{
            transform:[
              {translate: [ 18, -1, -50]},
              {scale: 50}
            ],
          }}
          source={{
            obj: asset('newMaze.obj'),
            mtl: asset('newMaze.mtl')
          }}
          lit={true}
        />
      </View>
    );
  }
};