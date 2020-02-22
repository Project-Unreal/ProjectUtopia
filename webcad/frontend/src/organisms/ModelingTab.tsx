import React, { ReactElement } from 'react';
import { LabelCard } from '../atoms/LabelCard';
import { LabelBar } from '../atoms/atoms.stories';

import './ModelingTab.scss';
import {
  TextBoxWithLabelAndButton,
  TextBoxWithLabelAndDoubleButton,
} from '../molecules/TextBoxWithLabel';

export const ModelingTab = (): ReactElement => {
  return (
    <div className="modeling-tab">
      <div className="element-label-card">
        <LabelCard LabelName="Element" />
      </div>
      <div className="element-label-bar">
        <LabelBar />
      </div>
      <div>
        <div className="position-label-card">
          <LabelCard LabelName="Position" />
        </div>
        <div className="positions">
          <div className="position-X">
            <TextBoxWithLabelAndDoubleButton label="X" text="1820.00" />
          </div>
          <div className="position-X">
            <TextBoxWithLabelAndDoubleButton label="Y" text="1820.00" />
          </div>
          <div className="position-X">
            <TextBoxWithLabelAndDoubleButton label="Z" text="4000.00" />
          </div>
        </div>
      </div>
      <LabelCard LabelName="Global tags" />
      <div>
        <div>
          <TextBoxWithLabelAndButton label="Type" text="D-Vertex" />
          <TextBoxWithLabelAndButton label="Author" text="Issen" />
        </div>
        <div>
          <TextBoxWithLabelAndButton label="Update" text="2012.12.01" />
          <TextBoxWithLabelAndButton label="Approve" text="A. Tadao" />
        </div>
      </div>
      <LabelCard LabelName="Common tags" />
    </div>
  );
};
