import React from 'react';
import JsTree from '../../js-tree';
import Card from '../../../components/card';

export interface DestinationProps {
  payload: any;
  onDrop: Function;
  onScroll: Function | undefined;
};

const Destination = ({ payload, onDrop, onScroll }: DestinationProps) => {
  return (
    <Card onScroll={onScroll}>
      <JsTree payload={payload} draggable={false} onDrop={onDrop}></JsTree>
    </Card>
  );
};

export default Destination;
