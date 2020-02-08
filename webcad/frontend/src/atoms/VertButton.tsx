import React from "react";

import './VertButton.scss'

export const SingleVertButton = ({onClick}: {onClick?: (event: React.MouseEvent<HTMLInputElement>) => any}) => {
    return (
        <div onClick={onClick} className="vert-button"/>
    )
};

export const DoubleVertButton = ({onClickUp, onClickDown}:
                                     {onClickUp?: () => any, onClickDown?: () => any}) => {
    return (
        <>
            <div onClick={onClickUp} className="vert-button-up"/>
            <div onClick={onClickDown} className="vert-button-down"/>
        </>
    )
};