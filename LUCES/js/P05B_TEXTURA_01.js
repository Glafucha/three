import * as THREE from "./three.module.js"

export default function E01({x,y,z}){
 
    // TEXTURA 1
    var geometry01 = new THREE.BoxGeometry(8,8,8);
    var texture01 = new THREE.TextureLoader().load("./assets/mario01.jpg");
    var material01 = new THREE.MeshLambertMaterial({size:0.6, map:texture01});
    var mesh01 = new THREE.Mesh(geometry01,material01);
  //  scene.add(mesh01);
    mesh01.position.set(0,0,0);

    const ESC01 = new THREE.Group();
    ESC01.add(mesh01);
    ESC01.position.set(x,y,z);

    return ESC01;
}