import * as React from 'react';
import { useThree } from 'react-three-fiber';
import { useDrag, useHover } from 'react-use-gesture';
import { useSpring, a } from 'react-spring/three';

export function Dodecahedron() {
    const { size, viewport } = useThree();
    const aspect = size.width / viewport.width;
    const [spring, set] = useSpring(() => ({
        scale: [1, 1, 1],
        position: [0, 0, 0],
        rotation: [0, 0, 0],
        config: { mass: 3, friction: 40, tension: 800}
    }));
    const bindDrag = useDrag(
        ({ offset: [x, y], vxvy: [vx, vy], down, ...prop}) => set({ position: [x / aspect, -y / aspect, 0], rotation: [y / aspect, x / aspect, 0] }),
        { pointerEvents: true }
    );

    const bindHover = useHover(({ hovering }) => set({ scale: hovering ? [1.2, 1.2, 1.2]: [1, 1, 1] }),
        { pointerEvents: true }
    );

    return (
        <a.mesh {...spring} {...bindDrag()} {...bindHover()} castShadow>
            <dodecahedronGeometry attach="geometry" args={[1.4, 0]} />
            <meshNormalMaterial attach="material" />
        </a.mesh>
    )
}