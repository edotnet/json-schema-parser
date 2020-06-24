import React from 'react';
import JsTree from '../../js-tree';
import Card from '../../../components/card';

const Destination = ({payload}) => {
  return (
    <Card>
      <JsTree payload={payload}></JsTree>
    </Card>
  );
};

export default Destination;
