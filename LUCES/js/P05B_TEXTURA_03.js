import * as THREE from "./three.module.js"

export default function E03({x,y,z}){
 
    // TEXTURA 1
    var geometry01 = new THREE.BoxGeometry(8,8,8);
    var texture01 = new THREE.TextureLoader().load("./assets/mario03.jpg");
    var material01 = new THREE.MeshLambertMaterial({size:0.6, map:texture01});
    var mesh01 = new THREE.Mesh(geometry01,material01);
  //  scene.add(mesh01);
    mesh01.position.set(0,0,0);

    //rotar la textura
    texture01.rotation=0.785;

    //trasladar la textura
    texture01.offset.x=-0.22;
    texture01.offset.y=0.5;

    const ESC03 = new THREE.Group();
    ESC03.add(mesh01);
    ESC03.position.set(x,y,z);

    return ESC03;
}
