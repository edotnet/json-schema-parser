import React, { useState, ReactElement } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Destination from './destination';
import Payload from './payload';
import Mappings from './mappings';
import { Mapping } from './mappings/types';
import Output from './output';
import './index.scss';

export interface MappingsPanelProps {
  payload: any;
  destination: any;
}

const MappingsPanel = ({ payload, destination }: MappingsPanelProps): ReactElement => {
  const [mappings, setMappings] = useState<Mapping[]>([]);
  
  const addMapping = (mapping: Mapping): void => {
    setMappings([...mappings.filter(q => q.to.$payload !== mapping.to.$payload), mapping]);
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="mappings-panel">
        <Payload payload={payload}></Payload>
        <Mappings mappings={mappings}></Mappings>
        <Destination payload={destination} onDrop={addMapping}></Destination>
      </div>
        <Output mappings={mappings}></Output>
    </DndProvider>
  );
};

export default MappingsPanel;
