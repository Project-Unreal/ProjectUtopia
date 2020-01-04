import * as React from 'react';
import { a } from 'react-spring/three';

import { extend, ReactThreeFiber } from "react-three-fiber";

import { FogExp2 } from "three";

declare global {
    namespace JSX {
        // eslint-disable-next-line @typescript-eslint/interface-name-prefix
        interface IntrinsicElements {
            fogExp2: ReactThreeFiber.Object3DNode<FogExp2, typeof FogExp2>
        }
    }
}
extend({FogExp2});

const World = () => {
    const items = [];
    for (let i = 0; i < 500; i++) {
        const position = [];
        position.push(Math.random() * 1600 - 800);
        position.push(0);
        position.push(Math.random() * 1600 - 800);
        items.push(
            <a.mesh key={i} position={position} castShadow>
                <cylinderBufferGeometry attach="geometry" args={[0, 10, 30, 4, 1]}/>
                <meshPhongMaterial attach="material" color={"#ffffff"} flatShading/>
            </a.mesh>
        )
    }
    return (
        <>
            <fogExp2 attach="fog" args={["#CCCCCC", 0.002]}/>
            <a.mesh>
                <directionalLight position={[1, 1, 1]} args={["#FFFFFF"]}/>
                <directionalLight position={[-1, -1, -1]} args={["#002288"]}/>
                <directionalLight args={["#222222"]}/>
            </a.mesh>
            {items}
        </>
    )
};

export default World;