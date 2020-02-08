import React from 'react';

const TabMenu = (selected_tab: number) => {
    const tabs = ['Preferences', 'Team', 'Resource', 'Timeline', 'Modeling', 'Visualize'];
    return (
        <>
            {tabs.map((tab, i) => {
                if (i === selected_tab)
                    return <div className="selected_tab">{tab}</div>
                else
                    return <div className="tab">{tab}</div>
            })}
        </>
    )
};

export default TabMenu;