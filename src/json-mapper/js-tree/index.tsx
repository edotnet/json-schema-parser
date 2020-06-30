import React, { ReactElement } from 'react';
import { parse } from './parser';
import {RenderContext} from './types/internal/iDrawing';
export interface JsTreeProps {
  payload: any;
  draggable: boolean;
  onDrop?: Function;
}

const JsTree = ({ payload, draggable, onDrop }: JsTreeProps): ReactElement => {
  const root = parse(payload)
  const context = {
    draggable,
    onDrop
  } as RenderContext;

  return (
    <div className="js-tree-root">
      {root?.node?.render(context)}
    </div>
  );
};

export default JsTree;
