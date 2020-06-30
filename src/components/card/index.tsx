import React, { ReactElement } from 'react';
import './index.scss';

export interface CardProps {
  children: any;
  onScroll: Function | undefined;
};

function Card({ children, onScroll }: CardProps): ReactElement {
  return (
    <div className="card" onScroll={() => onScroll!()}>
      <div className="card__content">
        {children}
      </div>
    </div>
  );
};

export default Card;
