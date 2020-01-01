import React, {useRef} from 'react';
import * as THREE from 'three';
import {Canvas, useFrame, useThree} from "react-three-fiber";
import Controls from "./Camera/OrbitControlsCamera";

import {World} from "./World/World";

const App = () => {
    console.log(window.innerHeight);
    return (
        <Canvas shadowMap>
            <World />
            <Controls />
        </Canvas>
    )
};

export default App;