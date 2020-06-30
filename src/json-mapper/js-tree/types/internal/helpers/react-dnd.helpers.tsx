import React, { ReactElement } from "react";
import { useDrag, DragSourceMonitor, useDrop, DropTargetMonitor } from "react-dnd";
import { Node } from "../node.type";
import { Mapping } from "../../../../mappings-panel/mappings/types";
import './react-dnd.helpers.scss';

export interface ExpanderDndProps {
  children: any;
  node: Node;
  onDrop?: Function;
};

export function ExpanderDraggable({ children, node }: ExpanderDndProps): ReactElement {
  const [collectedProps, drag] = useDrag({
    item: { type: 'Expander', node: node },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: !!monitor.isDragging(),
      item: node
    }),
  });

  return (
    <div style={{width: 'fit-content'}} className={ collectedProps.isDragging ? 'expander-draggable-dragging' : '' }  ref={drag}>
      {children}
    </div>
  );
};

export function ExpanderDroppable({ children, node, onDrop }: ExpanderDndProps): ReactElement {
  const [{ isOver }, drop] = useDrop({
    accept: 'Expander',
    drop: (item: any, monitor: DropTargetMonitor) => {
      onDrop!({
        from: item.node,
        to: node
      } as Mapping);
    },
    canDrop: (item: any, monitor: DropTargetMonitor): boolean => node.$type === item.node.$type,
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  })

  return (
    <div style={{width: 'fit-content'}} className={ isOver ? 'expander-droppable-over' : '' } ref={drop}>
      {children}
    </div>
  );
};
