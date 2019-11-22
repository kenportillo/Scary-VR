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
              {translate: [ 2.5, -2, 2]},
              {scale: 1}
            ],
          }}
          source={{
            obj: asset('demo+4+new.obj'),
            mtl: asset('demo+4+new.mtl')
          }}
          lit={true}
        />
      </View>
    );
  }
};