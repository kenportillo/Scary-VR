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

    // postMessage({type: "newPic", pic: 'girls.png'});

    render(){
        return(
        <View>
            <VrButton // top view left
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = 0,
                    this.state.zTarPos = 3,
                    this.state.yTarPos = -100;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 0 , 100 , -3]},
                        {scale: 1},
                        {rotateX: 180},
                        {rotateY: 135},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton // top view right
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -50,
                    this.state.zTarPos = -3,
                    this.state.yTarPos = -100;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 50 , 100 , -3]},
                        {scale: 1},
                        {rotateX: 180},
                        {rotateY: 135},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton // top view forward right
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    // postMessage({type: "newPic", pic: 'flag.obj', mtl: 'flag.mtl'});
                    this.state.xTarPos = -50,
                    this.state.zTarPos = 70,
                    this.state.yTarPos = -100;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 50 , 100 , -70]},
                        {scale: 1},
                        {rotateX: 180},
                        {rotateY: 135},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton // top view left forward left
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = 25,
                    this.state.zTarPos = 70,
                    this.state.yTarPos = -100;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -25 , 100 , -70]},
                        {scale: 1},
                        {rotateX: 180},
                        {rotateY: 135},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            
            <VrButton // start position
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = 0,
                    this.state.zTarPos = 0,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 0 , -4.1 , 0]},
                        {scale: .50},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: 0}
                    ]
                }}
                />            
            </VrButton>
            <VrButton // 1st position
            onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                this.state.xTarPos = 33,
                this.state.zTarPos = 0,
                this.state.yTarPos = 0;
            }}>
            <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -33 , -4.1 , 0]},
                        {scale: .50},
                        {rotateX: 180},
                        {rotateY: 310},
                        {rotateZ: 0}
                    ]
                }}
            />
            </VrButton>
            <VrButton // 2nd position
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = 33,
                    this.state.zTarPos = 20,
                    this.state.yTarPos = 0;
                }}>
                {/* <ScareButton x={-33} y={-4.1} z={-20} pic={'girls.png'}/> */}
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -33 , -4.1 , -20]},
                        {scale: .50},
                        {rotateX: 180},
                        {rotateY: 135},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton // 3rd  position
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = 6,
                    this.state.zTarPos = 22,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -6, -4.1 , -22]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 135},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton // 4th postition 1st fork
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = 6,
                    this.state.zTarPos = 38,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -6, -4.1 , -38]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 135},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton // 5th postion left at 1st fork
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -4.25,
                    this.state.zTarPos = 38,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 4.25, -4.1 , -38]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton // 6th position following left of 1st fork
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -4.25,
                    this.state.zTarPos = 53,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 4.25, -4.1 , -53]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
                <VrButton // 1st position left of 1st fork
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = 11,
                    this.state.zTarPos = 53,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -11, -4.1 , -53]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
                <VrButton // 2nd position left of 1st fork
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = 12,
                    this.state.zTarPos = 37,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -12, -4.1 , -37]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
                <VrButton // 3rd position left of 1st fork
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = 18,
                    this.state.zTarPos = 37,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -18, -4.1 , -37]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
                <VrButton // 4th position left of 1st fork
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = 18,
                    this.state.zTarPos = 42,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -18, -4.1 , -42]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
                <VrButton // 5th position left of 1st fork
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = 31,
                    this.state.zTarPos = 42,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -31, -4.1 , -42]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
                <VrButton // 6th position left of 1st fork
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = 31,
                    this.state.zTarPos = 30,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -31, -4.1 , -30]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
                <VrButton // 7th position left of 1st fork
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = 37.7,
                    this.state.zTarPos = 30,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -37.7, -4.1 , -30]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
                <VrButton // 8th position left of 1st fork
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = 38,
                    this.state.zTarPos = 52,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -38, -4.1 , -52]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
                <VrButton // 9th position left of 1st fork [SCARE]
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                postMessage({type: "newPic", pic: 'poop.obj', mtl: 'poop.mtl'});
                    this.state.xTarPos = 24.5,
                    this.state.zTarPos = 52,
                    this.state.yTarPos = 0;
                }}>
                {/* <ScareButton x={-22} y={-4.1} z={-48} pic={'girls.png'} /> */}
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -24.5, -4.1 , -52]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
                <VrButton // 10th position left of 1st fork
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = 37,
                    this.state.zTarPos = 63,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -37, -4.1 , -63]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
                <VrButton // 11th position left of 1st fork
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = 27,
                    this.state.zTarPos = 63,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -27, -4.1 , -63]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
                <VrButton // 7th position right at 1st fork
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -25,
                    this.state.zTarPos = 38,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 25, -4.1 , -38]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
                <VrButton // 8th position following right of 1st fork
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -25,
                    this.state.zTarPos = 48,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 25, -4.1 , -48]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            
                    <VrButton // 1st position right of 1st fork
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -12,
                    this.state.zTarPos = 48,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 12, -4.1 , -48]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
                    <VrButton // 2nd position right of 1st fork
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -12,
                    this.state.zTarPos = 69,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 12, -4.1 , -67]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
                    <VrButton // 3rd position right of 1st fork
                        onClick={() => {
                        AudioModule.playOneShot({
                            source: asset('footsteps.mp3')
                        })
                            this.state.xTarPos = -12,
                            this.state.zTarPos = 67,
                            this.state.yTarPos = 0;
                        }}>
                        <Entity 
                        source ={{
                            obj: asset('model.obj'),
                            mtl: asset('materials.mtl')
                        }}
                        lit={true}
                        style={{
                            transform:[
                                {translate: [ 12, -4.1 , -67]},
                                {scale: .5},
                                {rotateX: 180},
                                {rotateY: 45},
                                {rotateZ: .25}
                            ]
                        }}
                        />
                    </VrButton>
                    <VrButton // 4th position right of 1st fork
                        onClick={() => {
                        AudioModule.playOneShot({
                            source: asset('footsteps.mp3')
                        })
                            this.state.xTarPos = -22,
                            this.state.zTarPos = 69,
                            this.state.yTarPos = 0;
                        }}>
                        <Entity 
                        source ={{
                            obj: asset('model.obj'),
                            mtl: asset('materials.mtl')
                        }}
                        lit={true}
                        style={{
                            transform:[
                                {translate: [ 22, -4.1 , -69]},
                                {scale: .5},
                                {rotateX: 180},
                                {rotateY: 45},
                                {rotateZ: .25}
                            ]
                        }}
                        />
                    </VrButton>
                    <VrButton // 5th position right of 1st fork
                        onClick={() => {
                        AudioModule.playOneShot({
                            source: asset('footsteps.mp3')
                        })
                            this.state.xTarPos = -23,
                            this.state.zTarPos = 82,
                            this.state.yTarPos = 0;
                        }}>
                        <Entity 
                        source ={{
                            obj: asset('model.obj'),
                            mtl: asset('materials.mtl')
                        }}
                        lit={true}
                        style={{
                            transform:[
                                {translate: [ 23, -4.1 , -82]},
                                {scale: .5},
                                {rotateX: 180},
                                {rotateY: 45},
                                {rotateZ: .25}
                            ]
                        }}
                        />
                    </VrButton>
                    <VrButton // 6th position right of 1st fork
                        onClick={() => {
                        AudioModule.playOneShot({
                            source: asset('footsteps.mp3')
                        })
                            this.state.xTarPos = -40,
                            this.state.zTarPos = 82,
                            this.state.yTarPos = 0;
                        }}>
                        <Entity 
                        source ={{
                            obj: asset('model.obj'),
                            mtl: asset('materials.mtl')
                        }}
                        lit={true}
                        style={{
                            transform:[
                                {translate: [ 40, -4.1 , -82]},
                                {scale: .5},
                                {rotateX: 180},
                                {rotateY: 45},
                                {rotateZ: .25}
                            ]
                        }}
                        />
                    </VrButton>
                    <VrButton // 7th position right of 1st fork
                        onClick={() => {
                        AudioModule.playOneShot({
                            source: asset('footsteps.mp3')
                        })
                            this.state.xTarPos = -40,
                            this.state.zTarPos = 76,
                            this.state.yTarPos = 0;
                        }}>
                        <Entity 
                        source ={{
                            obj: asset('model.obj'),
                            mtl: asset('materials.mtl')
                        }}
                        lit={true}
                        style={{
                            transform:[
                                {translate: [ 40, -4.1 , -76]},
                                {scale: .5},
                                {rotateX: 180},
                                {rotateY: 45},
                                {rotateZ: .25}
                            ]
                        }}
                        />
                    </VrButton>
                    <VrButton // 8th position right of 1st fork
                        onClick={() => {
                        AudioModule.playOneShot({
                            source: asset('footsteps.mp3')
                        })
                            this.state.xTarPos = -30,
                            this.state.zTarPos = 76,
                            this.state.yTarPos = 0;
                        }}>
                        <Entity 
                        source ={{
                            obj: asset('model.obj'),
                            mtl: asset('materials.mtl')
                        }}
                        lit={true}
                        style={{
                            transform:[
                                {translate: [ 30, -4.1 , -76]},
                                {scale: .5},
                                {rotateX: 180},
                                {rotateY: 45},
                                {rotateZ: .25}
                            ]
                        }}
                        />
                    </VrButton>
                    <VrButton // 9th position right of 1st fork
                        onClick={() => {
                        AudioModule.playOneShot({
                            source: asset('footsteps.mp3')
                        })
                            this.state.xTarPos = -30,
                            this.state.zTarPos = 62,
                            this.state.yTarPos = 0;
                        }}>
                        <Entity 
                        source ={{
                            obj: asset('model.obj'),
                            mtl: asset('materials.mtl')
                        }}
                        lit={true}
                        style={{
                            transform:[
                                {translate: [ 30, -4.1 , -62]},
                                {scale: .5},
                                {rotateX: 180},
                                {rotateY: 45},
                                {rotateZ: .25}
                            ]
                        }}
                        />
                    </VrButton>
                    <VrButton // 10th position right of 1st fork
                        onClick={() => {
                        AudioModule.playOneShot({
                            source: asset('footsteps.mp3')
                        })
                            this.state.xTarPos = -22,
                            this.state.zTarPos = 62,
                            this.state.yTarPos = 0;
                        }}>
                        <Entity 
                        source ={{
                            obj: asset('model.obj'),
                            mtl: asset('materials.mtl')
                        }}
                        lit={true}
                        style={{
                            transform:[
                                {translate: [ 22, -4.1 , -62]},
                                {scale: .5},
                                {rotateX: 180},
                                {rotateY: 45},
                                {rotateZ: .25}
                            ]
                        }}
                        />
                    </VrButton>
                    <VrButton // 11th position right of 1st fork
                        onClick={() => {
                        AudioModule.playOneShot({
                            source: asset('footsteps.mp3')
                        })
                            this.state.xTarPos = -22,
                            this.state.zTarPos = 54,
                            this.state.yTarPos = 0;
                        }}>
                        <Entity 
                        source ={{
                            obj: asset('model.obj'),
                            mtl: asset('materials.mtl')
                        }}
                        lit={true}
                        style={{
                            transform:[
                                {translate: [ 22, -4.1 , -54]},
                                {scale: .5},
                                {rotateX: 180},
                                {rotateY: 45},
                                {rotateZ: .25}
                            ]
                        }}
                        />
                    </VrButton>
                    <VrButton // 12th position right of 1st fork
                        onClick={() => {
                        AudioModule.playOneShot({
                            source: asset('footsteps.mp3')
                        })
                            this.state.xTarPos = -35,
                            this.state.zTarPos = 54,
                            this.state.yTarPos = 0;
                        }}>
                        <Entity 
                        source ={{
                            obj: asset('model.obj'),
                            mtl: asset('materials.mtl')
                        }}
                        lit={true}
                        style={{
                            transform:[
                                {translate: [ 35, -4.1 , -54]},
                                {scale: .5},
                                {rotateX: 180},
                                {rotateY: 45},
                                {rotateZ: .25}
                            ]
                        }}
                        />
                    </VrButton>
                    <VrButton // 13th position right of 1st fork
                        onClick={() => {
                        AudioModule.playOneShot({
                            source: asset('footsteps.mp3')
                        })
                            this.state.xTarPos = -35,
                            this.state.zTarPos = 41,
                            this.state.yTarPos = 0;
                        }}>
                        <Entity 
                        source ={{
                            obj: asset('model.obj'),
                            mtl: asset('materials.mtl')
                        }}
                        lit={true}
                        style={{
                            transform:[
                                {translate: [ 35, -4.1 , -41]},
                                {scale: .5},
                                {rotateX: 180},
                                {rotateY: 45},
                                {rotateZ: .25}
                            ]
                        }}
                        />
                    </VrButton>
                    <VrButton // 14th position right of 1st fork following left of 2nd fork of 
                        onClick={() => {
                        AudioModule.playOneShot({
                            source: asset('footsteps.mp3')
                        })
                            this.state.xTarPos = -47,
                            this.state.zTarPos = 38,
                            this.state.yTarPos = 0;
                        }}>
                        <Entity 
                        source ={{
                            obj: asset('model.obj'),
                            mtl: asset('materials.mtl')
                        }}
                        lit={true}
                        style={{
                            transform:[
                                {translate: [ 49, -4.1 , -38]},
                                {scale: .5},
                                {rotateX: 180},
                                {rotateY: 45},
                                {rotateZ: .25}
                            ]
                        }}
                        />
                    </VrButton>
                        <VrButton // 1st position left of 2nd fork
                        onClick={() => {
                        AudioModule.playOneShot({
                            source: asset('footsteps.mp3')
                        })
                            this.state.xTarPos = -49,
                            this.state.zTarPos = 51,
                            this.state.yTarPos = 0;
                        }}>
                        <Entity 
                        source ={{
                            obj: asset('model.obj'),
                            mtl: asset('materials.mtl')
                        }}
                        lit={true}
                        style={{
                            transform:[
                                {translate: [ 49, -4.1 , -51]},
                                {scale: .5},
                                {rotateX: 180},
                                {rotateY: 45},
                                {rotateZ: .25}
                            ]
                        }}
                        />
                    </VrButton>
                        <VrButton // 2nd position left of 2nd fork [SCARE]
                            onClick={() => {
                            AudioModule.playOneShot({
                                source: asset('footsteps.mp3')
                            })
                                postMessage({type: "newPic", pic: 'poop.obj', mtl: 'poop.mtl'});
                                this.state.xTarPos = -54,
                                this.state.zTarPos = 57,
                                this.state.yTarPos = 0;
                            }}>
                            <Entity 
                            source ={{
                                obj: asset('model.obj'),
                                mtl: asset('materials.mtl')
                            }}
                            lit={true}
                            style={{
                                transform:[
                                    {translate: [ 54, -4.1 , -57]},
                                    {scale: .5},
                                    {rotateX: 180},
                                    {rotateY: 45},
                                    {rotateZ: .25}
                                ]
                            }}
                            />
                        </VrButton>
            
                    <VrButton // 15th position right of 1st fork following right of 2nd fork
                        onClick={() => {
                        AudioModule.playOneShot({
                            source: asset('footsteps.mp3')
                        })
                            this.state.xTarPos = -35,
                            this.state.zTarPos = 28,
                            this.state.yTarPos = 0;
                        }}>
                        <Entity 
                        source ={{
                            obj: asset('model.obj'),
                            mtl: asset('materials.mtl')
                        }}
                        lit={true}
                        style={{
                            transform:[
                                {translate: [ 35, -4.1 , -28]},
                                {scale: .5},
                                {rotateX: 180},
                                {rotateY: 45},
                                {rotateZ: .25}
                            ]
                        }}
                        />
                    </VrButton>
                        <VrButton // 1st position right of 2nd fork
                        onClick={() => {
                        AudioModule.playOneShot({
                            source: asset('footsteps.mp3')
                        })
                            this.state.xTarPos = -20,
                            this.state.zTarPos = 28,
                            this.state.yTarPos = 0;
                        }}>
                        <Entity 
                        source ={{
                            obj: asset('model.obj'),
                            mtl: asset('materials.mtl')
                        }}
                        lit={true}
                        style={{
                            transform:[
                                {translate: [ 20, -4.1 , -28]},
                                {scale: .5},
                                {rotateX: 180},
                                {rotateY: 45},
                                {rotateZ: .25}
                            ]
                        }}
                        />
                    </VrButton>
                        <VrButton // 2nd position right of 2nd fork
                        onClick={() => {
                        AudioModule.playOneShot({
                            source: asset('footsteps.mp3')
                        })
                            this.state.xTarPos = -20,
                            this.state.zTarPos = 16,
                            this.state.yTarPos = 0;
                        }}>
                        <Entity 
                        source ={{
                            obj: asset('model.obj'),
                            mtl: asset('materials.mtl')
                        }}
                        lit={true}
                        style={{
                            transform:[
                                {translate: [ 20, -4.1 , -16]},
                                {scale: .5},
                                {rotateX: 180},
                                {rotateY: 45},
                                {rotateZ: .25}
                            ]
                        }}
                        />
                    </VrButton>
                        <VrButton // 3rd position right of 2nd fork
                        onClick={() => {
                        AudioModule.playOneShot({
                            source: asset('footsteps.mp3')
                        })
                            this.state.xTarPos = -20,
                            this.state.zTarPos = 7.6,
                            this.state.yTarPos = 0;
                        }}>
                        <Entity 
                        source ={{
                            obj: asset('model.obj'),
                            mtl: asset('materials.mtl')
                        }}
                        lit={true}
                        style={{
                            transform:[
                                {translate: [ 20, -4.1 , -7.6]},
                                {scale: .5},
                                {rotateX: 180},
                                {rotateY: 45},
                                {rotateZ: .25}
                            ]
                        }}
                        />
                    </VrButton>   
                        <VrButton // 4th position right of 2nd fork
                            onClick={() => {
                            AudioModule.playOneShot({
                                source: asset('footsteps.mp3')
                            })
                                this.state.xTarPos = -28,
                                this.state.zTarPos = 7.6,
                                this.state.yTarPos = 0;
                            }}>
                            <Entity 
                            source ={{
                                obj: asset('model.obj'),
                                mtl: asset('materials.mtl')
                            }}
                            lit={true}
                            style={{
                                transform:[
                                    {translate: [ 28, -4.1 , -7.6]},
                                    {scale: .5},
                                    {rotateX: 180},
                                    {rotateY: 45},
                                    {rotateZ: .25}
                                ]
                            }}
                            />
                        </VrButton>    
            
            <VrButton // 1st position right of 2nd fork following left of 3rd fork
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -28,
                    this.state.zTarPos = 19.5,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 28, -4.1 , -19.5]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton // 2nd position right of 2nd fork following left of 3rd fork
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -39,
                    this.state.zTarPos = 19.5,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 39, -4.1 , -19.5]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>  
            <VrButton // 5th position right of 2nd fork & following left of 3rd fork
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -39,
                    this.state.zTarPos = 11,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 39, -4.1 , -11]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>  
            <VrButton // 6th position right of 2nd fork 
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -48.5,
                    this.state.zTarPos = 11,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 48.5, -4.1 , -11]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>     
            <VrButton // 7th position right of 2nd fork 
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -48.5,
                    this.state.zTarPos = 1,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 48.5, -4.1 , -1]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>   
            <VrButton // 8th position right of 2nd fork 
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -68,
                    this.state.zTarPos = 1,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 68, -4.1 , -1]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton // 9th position right of 2nd fork 
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -68,
                    this.state.zTarPos = 9,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 68, -4.1 , -9]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>    
            <VrButton // 10th position right of 2nd fork 
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -58,
                    this.state.zTarPos = 9,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 58, -4.1 , -9]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>  
            <VrButton // 11th position right of 2nd fork 
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -58,
                    this.state.zTarPos = 16,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 58, -4.1 , -16]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton // 12th position right of 2nd fork 
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -67,
                    this.state.zTarPos = 16,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 67, -4.1 , -16]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>   
            <VrButton // 13th position right of 2nd fork 
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -67,
                    this.state.zTarPos = 33,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 67, -4.1 , -33]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton // 14th position right of 2nd fork following left of 4th fork
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -61,
                    this.state.zTarPos = 33,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 61, -4.1 , -33]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>   
            
                <VrButton // 1st position following left of 4th fork
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -60.5,
                    this.state.zTarPos = 24,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 60.5, -4.1 , -24]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>    
                <VrButton // 2nd position following left of 4th fork [SCARE]
                    onClick={() => {
                    AudioModule.playOneShot({
                        source: asset('footsteps.mp3')
                    })
                        postMessage({type: "newPic", pic: 'poop.obj', mtl: 'poop.mtl'});  
                        this.state.xTarPos = -50.5,
                        this.state.zTarPos = 24,
                        this.state.yTarPos = 0;
                    }}>
                    <Entity 
                    source ={{
                        obj: asset('model.obj'),
                        mtl: asset('materials.mtl')
                    }}
                    lit={true}
                    style={{
                        transform:[
                            {translate: [ 50.5, -4.1 , -24]},
                            {scale: .5},
                            {rotateX: 180},
                            {rotateY: 45},
                            {rotateZ: .25}
                        ]
                    }}
                    />
                </VrButton>     
            
            <VrButton // 15th position right of 2nd fork following right of 4th fork
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -61,
                    this.state.zTarPos = 40,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 61, -4.1 , -40]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>     
            
                <VrButton // 1st position following right of 4th fork
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -55,
                    this.state.zTarPos = 40,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 55, -4.1 , -40]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton> 
                <VrButton // 2nd position following right of 4th fork
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -55,
                    this.state.zTarPos = 47,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 55, -4.1 , -47]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>     
                <VrButton // 3rd position following right of 4th fork
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -66,
                    this.state.zTarPos = 48,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 66, -4.1 , -48]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>    
                <VrButton // 4th position following right of 4th fork
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -66,
                    this.state.zTarPos = 70,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 66, -4.1 , -70]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>    
                <VrButton // 5th position following right of 4th fork
                    onClick={() => {
                    AudioModule.playOneShot({
                        source: asset('footsteps.mp3')
                    })
                        this.state.xTarPos = -56,
                        this.state.zTarPos = 70,
                        this.state.yTarPos = 0;
                    }}>
                    <Entity 
                    source ={{
                        obj: asset('model.obj'),
                        mtl: asset('materials.mtl')
                    }}
                    lit={true}
                    style={{
                        transform:[
                            {translate: [ 56, -4.1 , -70]},
                            {scale: .5},
                            {rotateX: 180},
                            {rotateY: 45},
                            {rotateZ: .25}
                        ]
                    }}
                    />
                </VrButton> 
            
            <VrButton // 1st position right of 5th fork & following right of 4th fork 
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -63,
                    this.state.zTarPos = 78,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 63, -4.1 , -78]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton // 2nd position right of 5th fork & following right of 4th fork 
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -59,
                    this.state.zTarPos = 96.5,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 59, -4.1 , -96.5]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton // 3rd position right of 5th fork & following right of 4th fork 
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -33,
                    this.state.zTarPos = 97,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 33, -4.1 , -97]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton // 4th position right of 5th fork & following right of 4th fork 
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -33,
                    this.state.zTarPos = 104,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 33, -4.1 , -104]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton // 5th position right of 5th fork & following right of 4th fork 
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -23,
                    this.state.zTarPos = 104,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 23, -4.1 , -104]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton // 6th position right of 5th fork & following right of 4th fork 
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -59,
                    this.state.zTarPos = 103,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 59, -4.1 , -103]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>  
            <VrButton // 7th position right of 5th fork & following right of 4th fork [WIN!!!!!!]
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    postMessage({type: "win", pic: 'flag.obj', mtl: 'flag.mtl'});
                    this.state.xTarPos = -45,
                    this.state.zTarPos = 103,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 45, -4.1 , -103]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            
            <VrButton // 1st position left of 5th fork & following right of 4th fork 
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -52.7,
                    this.state.zTarPos = 78,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 52.7, -4.1 , -78]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton // 2nd position left of 5th fork & following right of 4th fork 
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -49.7,
                    this.state.zTarPos = 89,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 49.7, -4.1 , -89]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton // 3rd position left of 5th fork & following right of 4th fork 
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -47,
                    this.state.zTarPos = 69,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 47, -4.1 , -69]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton // 4th position left of 5th fork & following right of 4th fork [SCARE] 
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    postMessage({type: "newPic", pic: 'poop.obj', mtl: 'poop.mtl'});
                    this.state.xTarPos = -37,
                    this.state.zTarPos = 69,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 37, -4.1 , -69]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton // 5th position left of 5th fork & following right of 4th fork 
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -23,
                    this.state.zTarPos = 89,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 23, -4.1 , -89]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            
            <VrButton // 1st position left of 6th fork & following left of 5th fork  
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -13,
                    this.state.zTarPos = 89,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 13, -4.1 , -89]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton // 2nd position left of 6th fork & following left of 5th fork  
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -13,
                    this.state.zTarPos = 103,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 13, -4.1 , -103]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton // 3rd position left of 6th fork & following left of 5th fork  
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -5,
                    this.state.zTarPos = 103,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 5, -4.1 , -103]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>    
            <VrButton // 4th position left of 6th fork & following left of 5th fork  
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -5,
                    this.state.zTarPos = 89,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 5, -4.1 , -89]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton // 5th position left of 6th fork & following left of 5th fork  
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -5,
                    this.state.zTarPos = 81,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 5, -4.1 , -81]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>    
            <VrButton // 6th position left of 6th fork & following left of 5th fork  
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -15,
                    this.state.zTarPos = 81,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 15, -4.1 , -81]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton // 7th position left of 6th fork & following left of 5th fork  
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -15,
                    this.state.zTarPos = 74,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 15, -4.1 , -74]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton // 8th position left of 6th fork & following left of 5th fork  
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -4,
                    this.state.zTarPos = 74,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 4, -4.1 , -74]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton // 9th position left of 6th fork & following left of 5th fork  
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -4,
                    this.state.zTarPos = 61,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 4, -4.1 , -61]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton // 10th position left of 6th fork & following left of 5th fork  
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = 18,
                    this.state.zTarPos = 61,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -18, -4.1 , -61]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>    
            <VrButton // 11th position left of 6th fork & following left of 5th fork  
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = 18,
                    this.state.zTarPos = 71,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -18, -4.1 , -71]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton // 12th position left of 6th fork & following left of 5th fork  
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = 18,
                    this.state.zTarPos = 80,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -18, -4.1 , -80]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton // 13th position left of 6th fork & following left of 5th fork  
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = 9,
                    this.state.zTarPos = 80,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -9, -4.1 , -80]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>    
            <VrButton // 14th position left of 6th fork & following left of 5th fork  
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = 25,
                    this.state.zTarPos = 88,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -25, -4.1 , -88]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>    
            <VrButton // 15th position left of 6th fork & following left of 5th fork  
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = 26,
                    this.state.zTarPos = 71,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -26, -4.1 , -71]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton> 
            <VrButton // 16th position left of 6th fork & following left of 5th fork  
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = 36,
                    this.state.zTarPos = 71,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -36, -4.1 , -71]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton // 17th position left of 6th fork & following left of 5th fork [SCARE]
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    // postMessage({type: "newPic", pic: 'girls.png'});
                    postMessage({type: "newPic", pic: 'poop.obj', mtl: 'poop.mtl'});
                    this.state.xTarPos = 36,
                    this.state.zTarPos = 100,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -36, -4.1 , -100]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>


            <VrButton // 1st position @ 7th fork left of 6th fork & following left of 5th fork  
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = 2,
                    this.state.zTarPos = 89,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -2, -4.1 , -89]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>     
            <VrButton // 2nd position @ 7th fork left of 6th fork & following left of 5th fork  
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = 2,
                    this.state.zTarPos = 103,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -2, -4.1 , -103]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            <VrButton // 3rd position @ 7th fork left of 6th fork & following left of 5th fork  
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = 17,
                    this.state.zTarPos = 103,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -17, -4.1 , -103]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>    
            <VrButton // 4th position @ 7th fork left of 6th fork & following left of 5th fork  
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = 14,
                    this.state.zTarPos = 94,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -14, -4.1 , -94]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton> 
            <VrButton // 5th position @ 7th fork left of 6th fork & following left of 5th fork  
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = 10,
                    this.state.zTarPos = 88,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -10, -4.1 , -88]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>    
            <VrButton // 6th position @ 7th fork left of 6th fork & following left of 5th fork  
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = 4.3,
                    this.state.zTarPos = 73,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -4.3, -4.1 , -73]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>
            
            
            <VrButton // 1st position following right of 2nd fork
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -13,
                    this.state.zTarPos = 16,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 13, -4.1 , -16]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>   
            <VrButton // 2nd position following right of 2nd fork
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -13,
                    this.state.zTarPos = 28,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 13, -4.1 , -28]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>       
            <VrButton // 3rd position following right of 2nd fork
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -4,
                    this.state.zTarPos = 28,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 4, -4.1 , -28]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>       
            <VrButton // 4th position following right of 2nd fork
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = -4,
                    this.state.zTarPos = 15,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 4, -4.1 , -15]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton>   
            <VrButton // 5th position following right of 2nd fork
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    this.state.xTarPos = 12.5,
                    this.state.zTarPos = 15,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -12.5, -4.1 , -15]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton> 
            <VrButton // 6th position following right of 2nd fork [SCARE]
                onClick={() => {
                AudioModule.playOneShot({
                    source: asset('footsteps.mp3')
                })
                    postMessage({type: "newPic", pic: 'poop.obj', mtl: 'poop.mtl'});
                    this.state.xTarPos = 12.5,
                    this.state.zTarPos = 8,
                    this.state.yTarPos = 0;
                }}>
                <Entity 
                source ={{
                    obj: asset('model.obj'),
                    mtl: asset('materials.mtl')
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -12.5, -4.1 , -8]},
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 45},
                        {rotateZ: .25}
                    ]
                }}
                />
            </VrButton> 

        
        </View>
        )
    }


}