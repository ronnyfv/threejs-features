import * as THREE from 'three';

const textureLoader = new THREE.TextureLoader();

let spriteTextureLink = textureLoader.load('build/sprites/sprite1.png');
let spriteMaterial = new THREE.SpriteMaterial({ map: spriteTextureLink });

var radius = 800;

let link = new THREE.Sprite(spriteMaterial);

link.position.set(-300, -300, 1);
link.position.normalize();
link.position.multiplyScalar(radius);

console.log(link);

export default link;