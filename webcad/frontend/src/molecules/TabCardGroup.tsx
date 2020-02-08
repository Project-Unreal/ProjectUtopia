import React from "react";

import { TabCard } from "../atoms/TabCard";

import "./TabCardGroup.scss"

export const TabCardGroup = ({ tabs, selected_id }:{ tabs:string[], selected_id: number }) => {
    return (
        <div className="TabCardGroup">
            {tabs.map((tab, id) =>
                <div className="TagCard"><TabCard tagName={tab} selected={id === selected_id}/></div>
            )}
        </div>
    )
};