import React from 'react';
import MappingsPanel from './mappings-panel';
import payload from './config/placements.schema.json';
import destination from './config/account-events.schema.json';

const JsonMapper = () => {
  return (
    <div style={{
      height: 800
    }}>
      <MappingsPanel payload={payload} destination={destination}></MappingsPanel>
    </div>
  );
};

export default JsonMapper;
