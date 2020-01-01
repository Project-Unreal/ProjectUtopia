import * as React from 'react';
import * as THREE from 'three';

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

import Stats = require("stats.js");
import * as dat from 'dat.gui';

init();
animate();

function init() {
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

    const container = document.createElement('div');
    document.body.appendChild(container);

    const params = {
        aaa: true,
        bbb: true,
        ccc: true
    };

    // scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xcccccc);

    // renderer
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // camera
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(400, 200, 0);

    // controls
    const controls = new OrbitControls(camera, renderer.domElement);

    //controls.addEventListener('change', render);

    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    controls.screenSpacePanning = false;

    controls.minDistance = 100;
    controls.maxDistance = 500;

    controls.maxPolarAngle = Math.PI / 2;

    // world

    const geometry = new THREE.CylinderBufferGeometry(0, 10, 30, 4, 1);
    const material = new THREE.MeshPhongMaterial({color: 0xffffff, flatShading: true});

    for (let i = 0; i < 500; i ++) {
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = Math.random() * 1600 - 800;
        mesh.position.y = 0;
        mesh.position.z = Math.random() * 1600 - 800;
        mesh.updateMatrix();
        mesh.matrixAutoUpdate = false;
        scene.add(mesh);
    }

    const stats = new Stats();
    container.appendChild(stats.dom);

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
    }, false);

    const gui = new dat.GUI();

    gui.add(params, 'aaa');
    gui.add(params, 'bbb');
    gui.add(params, 'ccc');
}

function animate() {
    requestAnimationFrame(animate);
}