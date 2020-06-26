import React, { ReactElement } from 'react';
import { Mapping } from './types';

export interface MappingsProps {
  mappings: Array<Mapping>
}

const Mappings = ({mappings}: MappingsProps): ReactElement => {
  return (
    <div>
      {mappings && mappings.map(q => (
        <p><span>{q.from.$payload} {q.to.$payload}</span></p>
      ))}
    </div>
  )
}

export default Mappings;
