import React, { useState, ReactElement } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Destination from './destination';
import Payload from './payload';
import Mappings from './mappings';
import { Mapping } from './mappings/types';
import Output from './output';
import { Node } from '../js-tree/types';
import './index.scss';

export interface MappingsPanelProps {
  payload: any;
  destination: any;
}

const MappingsPanel = ({ payload, destination }: MappingsPanelProps): ReactElement => {
  const [mappings, setMappings] = useState<Mapping[]>([]);
  const [refresh, setRefresh] = useState(true);
  
  const addMapping = (mapping: Mapping): void => {
    setMappings([...mappings.filter(q => q.to.$payload !== mapping.to.$payload), mapping]);
  }

  const refreshMappings = () => {
    setTimeout(() => {
      setRefresh(!refresh);
   }, 0);
  }

  Node.onExpand = refreshMappings;

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="mappings-panel">
        <div className="mappings">
          <Payload onScroll={refreshMappings} payload={payload}></Payload>
          <Mappings refresh={refresh} mappings={mappings}></Mappings>
          <Destination onScroll={refreshMappings} payload={destination} onDrop={addMapping}></Destination>
        </div>
        <div className="results">
          <Output mappings={mappings}></Output>
        </div>
      </div>
    </DndProvider>
  );
};

export default MappingsPanel;
