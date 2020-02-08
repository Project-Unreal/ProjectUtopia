import React from "react";

import "./TabCard.scss"

export const TabCard = ({ tagName, selected }: { tagName: string, selected: boolean }) => {
    return (
        <div className={selected ? "tab-card-selected" : "tab-card"}>
            { tagName }
        </div>
    )
};