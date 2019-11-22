// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Location, Surface} from 'react-360-web';
// import Math from 'react-360'

import { rotateByQuaternion } from 'react-360-web/js/Utils/Math.js'

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const scareSurface = new Surface(
    400,
    275,
    Surface.SurfaceShape.Flat 
  );

  scareSurface.setAngle(
    0, /* yaw angle */
    0, /* pitch angle */
    0,// Math.PI/ 2, /* roll */
  );

  r360.renderToSurface(
    r360.createRoot('ScareScreen', {}),
    // r360.getDefaultSurface(),
    scareSurface
  );

  // Render your app content to the default cylinder surface
  const customLocation = new Location([0,0,0]);

  r360.renderToLocation(
    r360.createRoot('Scary_VR'),
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
}

// function onScare(e, r360, )

function onMessage(e, r360, customLocation){

  if(e.data.type === 'newPosition') {
    customLocation.setWorldPosition(e.data.x, 0, e.data.z)
  }

}

function onScare(e, r360, scareSurface){
  if(e.data.type === 'newPic'){

    const cameraDirection = [0, 0, -15]
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
      r360.setWorldPosition()
    }, Math.floor(Math.random() * 3000 + 1200)) ;

  }
}

window.React360 = {init};
