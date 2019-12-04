import React from 'react'
import {
    AppRegistry,
    Text,
    View,
    asset,
    VrButton,
    Image,
    NativeModules,
    Animated
} from 'react-360';
import Entity from 'Entity';

const RCTDeviceEventEmitter = require('RCTDeviceEventEmitter');

const {AudioModule} = NativeModules

export default class ScareScreen extends React.Component {
    constructor(){
        super();
        this.state ={
            ImageView : false,
            time: new Date,
            // pictName: e.thePicture
            rotation: 130,
            pictName: null,
            mtl: null,
            type: null
          };
        this.lastUpdate = Date.now();
        this.rotate = this.rotate.bind(this);
        RCTDeviceEventEmitter.addListener('clickedImage', (e) => {this.changeImage(e);});
    }

    componentDidMount() {
      this.rotate();
    }

    componentWillUnmount() {
      if (this.frameHandle) {
        cancelAnimationFrame(this.frameHandle);
        this.frameHandle = null;
      }
    }

    rotate() {
      const now = Date.now();
      const delta = now - this.lastUpdate;
      this.lastUpdate = now;
      
      this.setState({
          rotation: this.state.rotation + delta / 150
      });
      this.frameHandle = requestAnimationFrame(this.rotate);
    }

    showImage(){
        this.setState({
            ImageView: true
        })
    }

    changeImage(e){
      console.log(e)
      // if(e.thePicture === 'flag.obj'){
      // AudioModule.playOneShot({
      //     source: asset('win.mp3')
      //   });
      // }
      AudioModule.playOneShot({
        source: asset('scary_sound.mp3')
      });
      this.setState({
        ImageView: true,
        pictName: e.thePicture,
        mtl: e.mtl,
        type: e.type
      });
    }

    hideImage(){
        this.setState({
            ImageView: false
        })
    }

    bounce({initial, toValue, friction = 1.5}) {
      value.setValue(initial);

      Animated.spring(
        this.state.bounceValue,{
          toValue,
          friction,
        }
      ).start();
    }

    render(){
        return(
            <View 
            // style={{transform:[
            //   {translate: [-2,0,0]},
            //   {rotateY: 90},
              // {rotateX:0}
              // {rotateZ: 45}
            // ]}}
            >
            {this.state.ImageView && <View>
                <VrButton onClick={() => {
                this.hideImage();
              }}>
                <Text>
                    {this.state.pictName === 'poop.obj'?
                    'GAME OVER' : 'YOU WIN'}
                </Text>
            </VrButton>
              {this.state.pictName === 'poop.obj'?
                <Entity 
                source ={{
                    obj: asset(this.state.pictName),
                    mtl: asset(this.state.mtl)
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ 0, 0 , 0]},
                        {scale: 1},
                        {rotateY: this.state.rotation / 1},
                        // {rotateX: 180}
                        // {rotateY: 45},
                        // {rotateZ: .25}
                        // {rotateZ: this.state.rotation / 1}
                    ]
                }}
                />
                :
                <Entity 
                source ={{
                    obj: asset(this.state.pictName),
                    mtl: asset(this.state.mtl)
                }}
                lit={true}
                style={{
                    transform:[
                        {translate: [ -20, 0 , -15]},
                        {scale: 1},
                        // {rotateY: this.state.rotation / 1},
                        // {rotateX: 180}
                        // {rotateY: 45},
                        // {rotateZ: .25}
                        // {rotateZ: this.state.rotation / 1}
                    ]
                }}
                />
              }
              {/* <VrButton onClick={() => {
                this.hideImage();
                }}>
              </VrButton> */}
            </View>
          }
    
          </View>
        )
    }

}

