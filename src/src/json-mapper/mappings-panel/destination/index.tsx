import React from 'react';
import JsTree from '../../js-tree';
import Card from '../../../components/card';

export interface DestinationProps {
  payload: any;
  onDrop: Function
};

const Destination = ({ payload, onDrop }: DestinationProps) => {
  return (
    <Card>
      <JsTree payload={payload} draggable={false} onDrop={onDrop}></JsTree>
    </Card>
  );
};

export default Destination;
