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
      AudioModule.playOneShot({
        source: asset('scary_sound.mp3')
      });
      this.setState({
        ImageView: true,
        pictName: e.thePicture
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
            <VrButton onClick={() => {
                this.showImage()
              }}>
              </VrButton>
            {this.state.ImageView && <View>
                <VrButton onClick={() => {
                this.hideImage();
              }}>
                  <Text>
                      GAME OVER
                  </Text>
            </VrButton>
              {/* <Image
                source={asset('girls.png')}
                style={{ width: 75, height: 75, transform:[
                  {translate: [ 100 , 0, 100]},
                  {rotateY: this.state.rotation / 1}
                  // {translateZ: -10}
                ]}
              }
              /> */}
                <Entity 
                source ={{
                    obj: asset('poop.obj'),
                    mtl: asset('poop.mtl')
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
            <VrButton onClick={() => {
                this.hideImage();
              }}>
            </VrButton>
    

            </View>
          }
    
          </View>
        )
    }

}

