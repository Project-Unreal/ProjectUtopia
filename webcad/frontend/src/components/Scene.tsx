import * as React from 'react';
import {useThree} from "react-three-fiber";

function Scene() {
    const { setDefaultCamera } = useThree();

    return (
        <mesh>
            <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
            <meshNormalMaterial attach='material' />
        </mesh>
    )
}

export default Scene;