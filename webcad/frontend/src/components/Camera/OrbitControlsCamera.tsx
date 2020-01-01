import React, { useRef } from 'react';
import {extend, ReactThreeFiber, useFrame, useThree} from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

declare global {
    namespace JSX {
    // eslint-disable-next-line @typescript-eslint/interface-name-prefix
        interface IntrinsicElements {
            orbitControls: ReactThreeFiber.Object3DNode< OrbitControls, typeof OrbitControls >
        }
    }
}

extend({OrbitControls});
interface OrbitRef {
    update: Function;
}

const Controls = () => {
    const ref = useRef<OrbitRef>(null);
    const {camera, gl} = useThree();
    useFrame(() => {
        if (ref && ref.current) {
            ref.current.update();
        }
    });
    return (
        <orbitControls
            ref={ref}
            args={[camera, gl.domElement]}
            enableDamping
            dampingFactor={0.05}
            screenSpacePanning={false}
            maxDistance={500}
            minDistance={100}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 6}
        />
    );
};
export default Controls;