import React from 'react';
import { parse } from './parser';

const JsTree = ({payload}) => {
  const root = parse(payload)
  console.log(root);

  return (
    <div className="js-tree-root">
      {root.node.render()}
    </div>
  );
};

export default JsTree;
