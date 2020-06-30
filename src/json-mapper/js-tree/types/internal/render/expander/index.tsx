import React, { ReactElement, useState } from 'react';
import DownArrow from './assets/down-arrow.svg';
import RightArrow from './assets/right-arrow.svg';
import { Node } from '../../node.type';
import { ExpanderDraggable, ExpanderDroppable } from '../../helpers/react-dnd.helpers';
import { RenderContext } from '../../iDrawing';
import './index.scss';

export interface ExpanderProps {
  name: String;
  expandable: boolean;
  children: any;
  node: Node;
  type: String;
  context: RenderContext;
};

function Expander({ name, expandable, children, node, type, context }: ExpanderProps): ReactElement {
  const [expanded, toggle] = useState(true);
  const dndContent = name &&
    <span>
      <span className="title--text">{name}:&nbsp;</span>
      <span className="type--text">{type}</span>
    </span>;

  return (
    <div className={expandable ? 'expandable' : ''}>
      <div id={node.$payload} className={`node--title ${expandable ? 'yup' : 'nup'}`} onClick={() => toggle(!expanded)}>
        <div className="expander--icon">
          {expandable &&
            <img src={expanded ? DownArrow : RightArrow} />
          }
        </div>

        {context.draggable ?
          <ExpanderDraggable node={node}>{dndContent}</ExpanderDraggable> :
          <ExpanderDroppable node={node} onDrop={context.onDrop}>{dndContent}</ExpanderDroppable>
        }
      </div>

      {children &&
        <div className={!expanded ? 'd-none' : expandable ? 'expandable content' : 'content'}>
          {children}
        </div>
      }
    </div>
  );
};

export default Expander;
