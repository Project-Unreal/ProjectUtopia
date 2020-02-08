import React from "react";

import "./LabelCard.scss"

export const LabelCard = ({ LabelName }: { LabelName: string }) => {
    return (
        <>
            <div className="label-card">
                { LabelName }
            </div>
        </>
    )
};