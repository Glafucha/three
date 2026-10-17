import * as THREE from "./three.module.js"

export default function E02({x,y,z}){
 
    // TEXTURA 1
    var geometry02 = new THREE.BoxGeometry(8,8,8);
    var texture02 = new THREE.TextureLoader().load("./assets/mario02.jpg");
    var material02 = new THREE.MeshLambertMaterial({size:0.6, map:texture02});
    var mesh02 = new THREE.Mesh(geometry02,material02);
  //  scene.add(mesh02);
    mesh02.position.set(0,0,0);

    //repetir textura en x,y
    texture02.wrapS=THREE.RepeatWrapping;
    texture02.wrapT=THREE.RepeatWrapping;
    texture02.repeat.set(2,2);

    const ESC02 = new THREE.Group();
    ESC02.add(mesh02);
    ESC02.position.set(x,y,z);

    return ESC02;
}