import * as React from 'react';

import {Cylinder} from './Cylinder';

export const World = () => {
    const items = [];
    for (let i = 0; i < 500; i ++) {
        const position = [];
        position.push(Math.random() * 1600 - 800);
        position.push(0);
        position.push(Math.random() * 1600 - 800);
        items.push(
            <Cylinder position={position} />
        )
    }
    return (
        <>
            {items}
        </>
    )
};