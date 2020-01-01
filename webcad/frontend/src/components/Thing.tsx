import React, {useRef} from "react";
import {useFrame} from "react-three-fiber";

declare type Ref = {
    rotation:{
        x: number,
        y: number
    }
}
function Thing() {
  const ref = useRef<Ref>(null);
  useFrame(() => {
        if (ref && ref.current) {
            (ref.current.rotation.x = ref.current.rotation.y += 0.01);
        }
    });
  return (
    <mesh
      ref={ref}
      onClick={e => console.log('click')}
      onPointerOver={e => console.log('hover')}
      onPointerOut={e => console.log('unhover')}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  )
}

export default Thing;