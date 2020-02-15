import React from 'react';

import { ModelingTab, TagBrowser } from "./ModelingTab";

export default { title: 'Organisms' };

export const DefaultModelingTab = () => <ModelingTab/>;
export const DefaultBrowseModelingTab = () =>
    <TagBrowser tagPresets={[{name: "AAA", tag_ids: [0,1,2]}, {name: "BBB", tag_ids: [0,3,4]}]}
                tags={[{id: 0, name: "aaa", color: "green", isEditable: true, isFiltered: false, isLocked: true, isVisible: true},
                    {id: 1, name: "bbb", color: "green", isEditable: true, isFiltered: false, isLocked: true, isVisible: true},
                    {id: 2, name: "ccc", color: "green", isEditable: true, isFiltered: false, isLocked: true, isVisible: true},
                    {id: 3, name: "ddd", color: "yellow", isEditable: true, isFiltered: false, isLocked: true, isVisible: true},
                    {id: 4, name: "bbb", color: "yellow", isEditable: true, isFiltered: false, isLocked: true, isVisible: true}]}
                elements={[{id: 0, name: "aaa1", tagId: 0, isVisible: true, isLocked: false},
                    {id: 1, name: "aaa2", tagId: 0, isVisible: true, isLocked: true},
                    {id: 2, name: "aaa3", tagId: 0, isVisible: true, isLocked: true},
                    {id: 3, name: "bbb1", tagId: 1, isVisible: true, isLocked: true},
                    {id: 4, name: "ccc1", tagId: 2, isVisible: true, isLocked: true},
                ]}
                curDir={""}
                resources={[]} />;