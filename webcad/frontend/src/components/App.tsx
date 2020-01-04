import React from 'react';
import { Canvas, useThree } from "react-three-fiber";

import Controls from "./Controls/OrbitControls";
import World from "./World/World";
import styles from "./App.css";

const GLSize = () => {
    const {gl} = useThree();
    gl.setSize(window.innerWidth, window.innerHeight);
    return <></>;
};

const App = () => {
    return (
        <div className={styles.all}>
            <Canvas className={styles.root} shadowMap>
                <GLSize/>
                <perspectiveCamera args={[60, window.innerWidth / window.innerHeight, 1, 1000]}
                                   position={[400, 200, 0]}/>
                <Controls/>
                <World/>
            </Canvas>
        </div>
    )
};

export default App;