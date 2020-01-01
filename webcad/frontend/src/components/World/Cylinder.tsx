import * as React from 'react';
import {a} from 'react-spring/three';

interface Props {
    position: Number[],
}
export const Cylinder = (props: Props) => {
    return (
        <a.mesh position={props.position} castShadow>
            <cylinderBufferGeometry attach="geometry" args={[0, 10, 30, 4, 1]} />
            <meshPhongMaterial attach="material" color="0xffffff" flatShading />
        </a.mesh>
    )
};