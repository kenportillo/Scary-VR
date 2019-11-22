import React from 'react';
import {
  AppRegistry,
  View,
  asset,
  VrButton,
  Image,
  NativeModules
} from 'react-360';
import Building from './Building';
import Light from './Light';
import Entity from 'Entity';
import ScareButton from './ScareButton';
import Maze from './Maze';

const {AudioModule} = NativeModules;

export default class ThreeD extends React.Component {

    constructor(){
        super();
        this.state ={
            xCurPos : 0,
            zCurPos : 0,
            xTarPos : 0,
            zTarPos : 0
        }
        this.LerpZ = this.LerpZ.bind(this);
        this.LerpX = this.LerpX.bind(this);
    }

    componentDidMount(){
        this.LerpZ()
        this.LerpX()
    }

    jumpScare(){
        return(
        <View>
            <Entity
            source ={{
                obj: asset('20191023_162924.obj'),
                mtl: asset('model.mtl')
            }}
            lit={true}
            style={{
                transform:[
                    {translate: [ -1 , -5 , -7]},
                ]
            }}
            />
        </View>
        )
    }

    //LERP = LINEAR INTERPOLATION

    LerpZ(){
        if(Math.abs (this.state.zCurPos - this.state.zTarPos) > 0.3) 
        {
            // to match the Z coordinates
            this.setState({
                zCurPos : this.state.zCurPos * (1 - 0.05) + this.state.zTarPos * 0.05,
            });
            postMessage({type: 'newPosition', x: this.state.xCurPos, z: this.state.zCurPos});
        }
        requestAnimationFrame(this.LerpZ)
    }

    LerpX(){
        if(Math.abs (this.state.xCurPos - this.state.xTarPos) > 0.1 ) 
        {
            // to match the X coordinates
            this.setState({
                xCurPos : this.state.xCurPos * (1 - 0.05) + this.state.xTarPos * 0.05,

            });
            postMessage({type: 'newPosition', x: this.state.xCurPos, z: this.state.zCurPos});
        }
        requestAnimationFrame(this.LerpX)
    }


  render() {
    return (
      <View>

          <VrButton
          onClick={() => {
            // AudioModule.playOneShot({
            //     source: asset('footsteps.mp3')
            // })
              this.state.xTarPos = 1,
              this.state.zTarPos = 6
          }}>
{/* there is button on top of a button */}
         <ScareButton x={-1} y={-1} z={-6} pic={'girls.png'}/>
          <Entity 
            source ={{
                obj: asset('model.obj'),
                mtl: asset('materials.mtl')
            }}
            lit={true}
            style={{
                transform:[
                    {translate: [ -1 , -1 , -6]},
                    {scale: .25},
                    {rotateX: 190},
                    {rotateY: 45},
                    {rotateZ: 1}
                ]
            }}
          />
          
          </VrButton>

          <VrButton
          onClick={() => {
            AudioModule.playOneShot({
                source: asset('footsteps.mp3')
            })
              this.state.xTarPos = 0,
              this.state.zTarPos = 0;
          }}>

          <Entity 
            source ={{
                obj: asset('model.obj'),
                mtl: asset('materials.mtl')
            }}
            lit={true}
            style={{
                transform:[
                    {translate: [ 0 , -1 , 0]},
                    {scale: .25},
                    {rotateX: 190},
                    {rotateY: 45},
                    {rotateZ: 1}
                ]
            }}
          />
        </VrButton>
          {/* <Maze /> */}
          {/* <Building /> */}
          <Light/>

      </View>
    );
  }
};
