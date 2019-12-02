import React from 'react';
import {
  AppRegistry,
  View,
  asset,
  VrButton,
  Image,
  NativeModules
} from 'react-360';
import Entity from 'Entity'
import ScareButton from '../components/ScareButton';

const {AudioModule} = NativeModules;


export default class Move1 extends React.Component {

    constructor(){
        super();
        this.state ={
            xCurPos : 0,
            zCurPos : 0,
            yCurPos : 0,
            xTarPos : 0,
            zTarPos : 0,
            yTarPos : 0

        }
        this.LerpZ = this.LerpZ.bind(this);
        this.LerpX = this.LerpX.bind(this);
        this.LerpY = this.LerpY.bind(this);
    }

    componentDidMount(){
        this.LerpZ()
        this.LerpX()
        this.LerpY()
    }

    //LERP = LINEAR INTERPOLATION

    LerpZ(){ //
        if(Math.abs (this.state.zCurPos - this.state.zTarPos) > 0.3) 
        {
            // to match the Z coordinates
            this.setState({
                zCurPos : this.state.zCurPos * (1 - 0.05) + this.state.zTarPos * 0.05,
            });
            postMessage({type: 'newPosition', x: this.state.xCurPos, y: this.state.yCurPos,z: this.state.zCurPos});
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
            postMessage({type: 'newPosition', x: this.state.xCurPos, y: this.state.yCurPos, z: this.state.zCurPos});
        }
        requestAnimationFrame(this.LerpX)
    }

    LerpY(){
        if(Math.abs (this.state.yCurPos - this.state.yTarPos) > 0.1 ) 
        {
            // to match the X coordinates
            this.setState({
                yCurPos : this.state.yCurPos * (1 - 0.05) + this.state.yTarPos * 0.05,

            });
            postMessage({type: 'newPosition', x: this.state.xCurPos, y:this.state.yCurPos ,z: this.state.zCurPos});
        }
        requestAnimationFrame(this.LerpY)
    }

    render(){
        return(
        <View>
            <VrButton
            onClick={() => {
              AudioModule.playOneShot({
                  source: asset('footsteps.mp3')
              })
                this.state.xTarPos = 1,
                this.state.zTarPos = 6
            }}>
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
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
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
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = 4,
                    this.state.zTarPos = 1.25;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -4 , -1 , -1.35]},
                        {scale: .25},
                        {rotateX: 180},
                        {rotateY: 135},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -1,
                    this.state.zTarPos = 5.8,
                    this.state.yTarPos = -1.25
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 0 , .65 , -6]},
                        {scale: .15},
                        {rotateX: 90},
                        {rotateY: 135},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = 2.5,
                    this.state.zTarPos = 5.8,
                    this.state.yTarPos = -1.25
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 2.5 , .65 , -6]},
                        {scale: .15},
                        {rotateX: 90},
                        {rotateY: 135},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
        </View>
        )
    }


}