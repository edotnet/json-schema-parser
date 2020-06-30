import React, { ReactElement } from 'react';
import JsTree from '../../js-tree';
import Card from '../../../components/card';

export interface PayloadProps {
  payload: any;
  onScroll: Function | undefined;
};

const Payload = ({ payload, onScroll }: PayloadProps): ReactElement => {
  return (
    <Card onScroll={onScroll}>
      <JsTree payload={payload} draggable={true}></JsTree>
    </Card>
  );
};

export default Payload;
