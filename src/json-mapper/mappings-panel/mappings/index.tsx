import React, { ReactElement } from 'react';
import { Mapping } from './types';
import Curve from './curves';
import './index.scss';

export interface MappingsProps {
  mappings: Array<Mapping>;
  refresh: boolean;
}

const mappingCurvesIds = "mappings-curves";

const ClearMappings = () => {
  const el = document.getElementById(mappingCurvesIds);
  if (el) {
    el.innerHTML = '';
  }
};

const Mappings = ({mappings }: MappingsProps): ReactElement => {
  ClearMappings();

  return (
    <div id="mappings" className="mappings">
      <svg id={mappingCurvesIds} height="100%">
        {mappings && mappings.map(q => (
          <Curve id="mappings-curves" containerId="mappings" mapping={q} key={q.to.$payload}></Curve>
        ))}
      </svg>
    </div>
  );
};

export default Mappings;
