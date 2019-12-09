import React from 'react';
import {
    AppRegistry,
    View,
    asset,
    VrButton,
    NativeModules
} from 'react-360';
import Entity from 'Entity';

const {AudioModule} = NativeModules;


export default class ScareButton extends React.Component {


    render(){
        return(
            <View>
                <VrButton onClick = {()=> {
                    postMessage({type: "newPic", pic: this.props.pic});
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
                        {scale: .5},
                        {rotateX: 180},
                        {rotateY: 135},
                        {rotateZ: 0.25}
                ]
                }}
            />
            </VrButton>
            </View>
        )
    }

}