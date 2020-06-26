import React, { ReactElement } from 'react';
import JsTree from '../../js-tree';
import Card from '../../../components/card';

export interface PayloadProps {
  payload: any;
};

const Payload = ({ payload }: PayloadProps): ReactElement => {
  return (
    <Card>
      <JsTree payload={payload} draggable={true}></JsTree>
    </Card>
  );
};

export default Payload;
