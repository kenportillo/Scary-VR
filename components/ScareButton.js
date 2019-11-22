import React from 'react';
import {
    AppRegistry,
    View,
    asset,
    VrButton,
    NativeModules
} from 'react-360';
import Entity from 'Entity';
import ScareScreen from './ScareScreen'

const {AudioModule} = NativeModules;


export default class ScareButton extends React.Component {


    render(){
        return(
            <View>
                <VrButton onClick = {()=> {
                    postMessage({type: "newPic", pic: this.props.pic});
                    AudioModule.playOneShot({
                        source: asset('footsteps.mp3')
                    });
                }}
                >
            <Entity 
            source ={{
            obj: asset('model.obj'),
            mtl: asset('materials.mtl')
            }}
            lit={true}
            style={{
            transform:[
            {translate: [ this.props.x , this.props.y , this.props.z]},
            {scale: .25},
            {rotateX: 190},
            {rotateY: 45},
            {rotateZ: 1}
            ]
            }}
            />
            </VrButton>
            </View>
        )
    }

}