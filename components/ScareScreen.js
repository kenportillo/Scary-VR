import React from 'react'
import {
    AppRegistry,
    Text,
    View,
    asset,
    VrButton,
    Image,
} from 'react-360';

const RCTDeviceEventEmitter = require('RCTDeviceEventEmitter');

export default class ScareScreen extends React.Component {
    constructor(){
        super();
        this.state ={
            ImageView : false,
            time: new Date,
            // pictName: e.thePicture
        };

        RCTDeviceEventEmitter.addListener('clickedImage', (e) => {this.changeImage(e);});
    }

    showImage(){
        this.setState({
            ImageView: true
        })
    }

    changeImage(e)
    {
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



    render(){
        return(
            <View >
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
              <Image
                source={asset('girls.png')}
                style={{ width: 400, height: 275, transform:[
                    {translate: [ 0 , 0, -2]}]
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