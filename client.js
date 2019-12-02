// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Location, Surface, Module} from 'react-360-web';
import KeyboardModule from 'react-360-keyboard/KeyboardModule';


// import Math from 'react-360'

import { rotateByQuaternion } from 'react-360-web/js/Utils/Math.js'

function init(bundle, parent, options = {}) {
  r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,

    nativeModules: [KeyboardModule.addModule, new surfaceModule() ],

    ...options,
  });

  const scareSurface = new Surface(
    400,
    275,
    Surface.SurfaceShape.Flat
  );

  scareSurface.setAngle(
    .3, /* yaw angle */
    0, /* pitch angle */
    0,// Math.PI/ 2, /* roll */
  );

  // r360.renderToSurface(
  //   r360.createRoot('ScareScreen', {}),
  //   scareSurface
  // );

  const scareLocation = new Location ([0,0, -1]);
  // const scareLocation = new Location ([-175,50,-100]);


  r360.renderToLocation(
    r360.createRoot('ScareScreen'),
    scareLocation
  )
  
  const customLocation = new Location([0,0,0]);

  // const keyBoardLocation = new Location ([0, 1, -3]);


  // r360.renderToLocation(
  //   r360.createRoot('Scary_VR'),
  //   // r360.getDefaultSurface()
  //   // keyBoardLocation
  //   customLocation
  // )

  r360.renderToLocation(
    r360.createRoot('ThreeD'),
    customLocation
  );


  r360.runtime.executor._worker.addEventListener(
    'message',
    (e) => onMessage(e, r360, customLocation)
  )

  r360.runtime.executor._worker.addEventListener(
    'message',
    (e) => onScare(e, r360, scareSurface)
  )

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));

  KeyboardModule.setInstance(r360)

  // const keyBoardSurface = new Surface(
  //   1000,
  //   600,
  //   Surface.SurfaceShape.Flat
  // )

  // keyBoardSurface.setAngle( 5,10)

  // const keyBoardPanel = r360.renderToSurface(
  //   r360.createRoot('KeyboardPanel'),
  //   r360.getDefaultSurface(),
  //   // keyBoardSurface
  // )

  // r360.renderToSurface(
  //   r360.createRoot('KeyboardPanel'),
  //   r360.getDefaultSurface(),
  // )

}

// function onScare(e, r360, )

function onMessage(e, r360, customLocation){

  if(e.data.type === 'newPosition') {
    customLocation.setWorldPosition(e.data.x, e.data.y, e.data.z)
  }

}

function onScare(e, r360, scareLocation){
  if(e.data.type === 'newPic'){

    const cameraDirection = [3, -6, -1]
    const cameraQuat = r360.getCameraQuaternion()

    rotateByQuaternion(cameraDirection, cameraQuat)

      const x = cameraDirection[0]
      const y = cameraDirection[1]
      const z = cameraDirection[2]

      // const yawAngle = Math.atan2(x, -z)
      // const pitchAngle = Math.asin(y / Math.sqrt(x*x + y*y + z*z))

      // scareSurface.setAngle(yawAngle, pitchAngle)
    
    setTimeout(() => {
      console.log('BOO')
      r360.runtime.context.callFunction('RCTDeviceEventEmitter', 'emit', ['clickedImage', {thePicture: e.data.pic}]);
    }, Math.floor(Math.random() * 3000 + 1200)) ;

  }
}

class surfaceModule extends Module {
  constructor(){
    super('surfaceModule')
  }

  destroyPanel(){
    r360.detachRoot(keyBoardPanel)
  }
}

window.React360 = {init};














  // const LoginPanel = new Surface(
  //   400,
  //   150,
  //   Surface.SurfaceShape.Flat
  // )

  // LoginPanel.setAngle(
  //   0.6,
  //   0.1
  // )

  // r360.renderToSurface(
  //   r360.createRoot('KeyboardPanel'),
  //   LoginPanel
  // )


    // r360.renderToSurface(
  //   r360.createRoot('KeyboardPanel'),
  //   r360.getDefaultSurface(),
  // )

    // const keyBoardLocation = new Location ([-3, 3, 3]);

  // const keyBoardSurface = new Surface(
  //   1000,
  //   600,
  //   Surface.SurfaceShape.Flat
  // )

  // keyBoardSurface.setAngle(
  //   0,
  //   0,
  //   0,
  // )

      // keyBoardLocation
    // r360.getDefaultSurface()


      // r360.renderToLocation(
  //   r360.createRoot('ThreeD'),
  //   customLocation
  // );