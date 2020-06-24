import React, { ReactElement, useState } from 'react';
import DownArrow from './assets/down-arrow.svg';
import RightArrow from './assets/right-arrow.svg';
import { Node } from '../../node.type';
import { Type } from '../..';
import './index.scss';

export interface ExpanderProps {
  name: string;
  expandable: boolean;
  children: any;
  node: Node;
  type: String;
};

function Expander({ name, expandable, children, type }: ExpanderProps): ReactElement {
  const [expanded, toggle] = useState(true)

  return (
    <div className={expandable ? 'expandable' : ''}>
      <div className={`node--title ${expandable ? 'yup': 'nup'}`} onClick={() => toggle(!expanded)} >
        <div className="expander--icon">
          {expandable &&
            <img src={expanded ? DownArrow : RightArrow} />
          }
        </div>
        <div>
          {name &&
            <span>
              <span className="title--text">{name}:&nbsp;</span>
              <span className="type--text">{type}</span>
            </span>
          }
        </div>
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
