import React, { ReactElement } from 'react';
import './index.scss';

export interface CardProps {
  children: any;
};

function Card({ children }: CardProps): ReactElement {
  return (
    <div className="card">
      <div className="card__content">
        {children}
      </div>
    </div>
  );
};

export default Card;
