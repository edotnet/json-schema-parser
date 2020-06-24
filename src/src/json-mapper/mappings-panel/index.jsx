import React from 'react';
import Destination from './destination';
import Payload from './payload';
import './index.scss';

const MappingsPanel = ({payload, destination}) => {
  return (
    <div className="mappings-panel">
      <Payload payload={payload}></Payload>
      <Destination payload={destination}></Destination>
    </div>
  );
};

export default MappingsPanel;
