
var showcase = document.getElementById('showcase');
var key = 'YOUR KEY HERE';
var model;

showcase.addEventListener('load', function() {
  showcase.contentWindow.MP_SDK.connect(showcase, key, '3.2')
    .then(onConnect, onError);
});

async function onConnect(sdk) {
  console.log('Hello Bundle SDK', sdk);
  // ready to access the sdk!
  await sdk.Scene.register('BasicScene', () => new BasicScene());

  model = await sdk.Scene.createNode();
  model.addComponent('mp.fbxLoader', {
    // url: 'https://gitcdn.link/repo/mrdoob/three.js/dev/examples/models/gltf/Duck/glTF-Binary/Duck.glb',
    // url: 'https://gitcdn.link/repo/mrdoob/three.js/dev/examples/models/gltf/CesiumMan/glTF/CesiumMan.gltf',
    // url: 'https://gitcdn.link/repo/mrdoob/three.js/dev/examples/models/gltf/Horse.glb', 0.01, 0.01, 0.01
    // url: 'https://gitcdn.link/repo/mrdoob/three.js/dev/examples/models/gltf/Parrot.glb', 0.01, 0.01, 0.01
    // url: 'https://gitcdn.link/repo/mrdoob/three.js/dev/examples/models/gltf/PrimaryIonDrive.glb', 0.4, 0.4, 0.4
    // url: 'https://gitcdn.link/repo/mrdoob/three.js/dev/examples/models/gltf/Soldier.glb', 1, 1, 1
    
    // url: 'https://gitcdn.link/repo/mrdoob/three.js/dev/examples/models/obj/female02/female02.obj',
    // materialUrl: 'https://gitcdn.link/repo/mrdoob/three.js/dev/examples/models/obj/female02/female02.mtl', 0.01, 0.01, 0.01
    
    // url: "https://cdn-experiments.s3.amazonaws.com/models/bunny/bunny.obj",
    // materialUrl: "https://cdn-experiments.s3.amazonaws.com/models/bunny/bunny.mtl" 0.5, 0.5, 0.5

    // url: 'https://gitcdn.link/repo/mrdoob/three.js/dev/examples/models/collada/stormtrooper/stormtrooper.dae', 0.3, 0.3, 0.3
    url: 'https://gitcdn.link/repo/mrdoob/three.js/dev/examples/models/fbx/stanford-bunny.fbx',
  });

  model.obj3D.scale.set(0.00002,0.00002,0.00002);
  model.obj3D.position.set(0,-1,0);
  model.start();

  var sceneNode = await sdk.Scene.createNode();
  sceneNode.addComponent('mp.lights');
  sceneNode.start();

  var tick = function() {
    requestAnimationFrame(tick);
    model.obj3D.rotation.y += 0.02;
  }
  tick();
}

function onError(error) {
  console.error(error);
}


function BasicScene() {
  this.onInit = function() {
    var THREE = this.context.three;
    var group = new THREE.Object3D();
    var ambient = new THREE.AmbientLight( 0x888888 );

    var directionalLight = new THREE.DirectionalLight( 0xdddddd, 1 );
    directionalLight.position.set( 1, 0.5, 1 );

    group.add(ambient);
    group.add(directionalLight);
    this.outputs.objectRoot = group;
  };

  this.onTick = function() {

  }
}

function BasicSceneFactory() {
  return new BasicScene();
}
