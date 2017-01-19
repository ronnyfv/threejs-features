import * as THREE from 'three';
import './starter.scss';

import cube from './cube';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.z = 5;

scene.add(cube);

let render = function () {
  renderer.render(scene, camera);
};

render();