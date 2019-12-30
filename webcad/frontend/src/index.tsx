import * as React from 'react';
import * as THREE from 'three';

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

init();

function init() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xcccccc);

    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(400, 200, 0);

    const controls = new OrbitControls(camera, renderer.domElement);

    //controls.addEventListener('change', render);

    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    controls.screenSpacePanning = false;
}

// three.js animataed line using BufferGeometry

const MAX_POINTS = 500;
// info
const info = document.createElement('div');
info.style.position = 'absolute';
info.style.top = '30px';
info.style.width = '100%';
info.style.textAlign = 'center';
info.style.color = '#fff';
info.style.fontWeight = 'bold';
info.style.backgroundColor = 'transparent';
info.style.zIndex = '1';
info.style.fontFamily = 'Monospace';
info.innerHTML = "three.js line using BufferGeometry";
document.body.appendChild(info);

// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// scene
const scene = new THREE.Scene();

// camera
const camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2,
    window.innerHeight / -2, window.innerHeight / 2);
camera.position.set(0, 0, 500);
//const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
//camera.position.set( 0, 0, 500 );

// geometry
const geometry = new THREE.BufferGeometry();

// attributes
const positions = new Float32Array(3); // 3 vertices per point
geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

// material
const material = new THREE.LineBasicMaterial({color: 0xff0000, linewidth: 5});

// line
const line = new THREE.Line(geometry, material);
scene.add(line);

window.addEventListener('click', (e) => {
    const geometry = line.geometry as THREE.BufferGeometry;
    const positions = geometry.getAttribute('position');
    const arr_positions = Array.from(positions.array);

    //arr_positions.push(e.clientX);
    //arr_positions.push(e.clientY);
    console.log(arr_positions);
    const vec = new THREE.Vector3();
    const pos = new THREE.Vector3();
    vec.set((e.clientX / window.innerWidth) * 2 - 1,
        -((e.clientY - 30) / window.innerHeight) * 2 - 1,
        0.5);
    vec.unproject(camera);
    vec.sub(camera.position).normalize();
    pos.copy(camera.position).add(vec.multiplyScalar(-camera.position.z / vec.z));

    arr_positions.push(pos.x);
    arr_positions.push(pos.y);
    arr_positions.push(0);
    //arr_positions.push((e.clientX / window.innerWidth) * 2 - 1);
    //arr_positions.push(-(e.clientY / window.innerHeight) * 2 - 1);
    //arr_positions.push(0);

    const new_positions = new Float32Array(arr_positions);

    geometry.setAttribute('position', new THREE.BufferAttribute(new_positions, 3));

    renderer.render(scene, camera);
});