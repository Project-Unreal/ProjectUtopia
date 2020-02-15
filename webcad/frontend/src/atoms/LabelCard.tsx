import React from "react";

import "./LabelCard.scss"

export const LabelCard = ({ LabelName, selected = true }: { LabelName: string, selected?: boolean }) => {
    return (
        <>
            <div className={"label-card " + (selected ?  "" : "unselected")}>
                { LabelName }
            </div>
        </>
    )
};