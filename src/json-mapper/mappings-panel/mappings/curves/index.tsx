import { CurveFactory, Line, curveCardinal, line, curveBasis } from 'd3';
import { Selection, select } from 'd3-selection';

import React, { ReactElement } from 'react';
import { Mapping } from '../types';
import './index.scss';

export interface CurveProps {
  mapping: Mapping;
  id: string;
  containerId: string;
};

export type Coordinate = [number, number];

var curve: CurveFactory = curveBasis;
var lineGenerator: Line<Coordinate> = line<Coordinate>();

const updateLines = (coordinates: Coordinate[], id: string): Selection<SVGElement, unknown, HTMLElement, any> => {
  lineGenerator.curve(curve);
  const line = lineGenerator(coordinates.slice(0, coordinates.length));
  const g = 
    select(`#${id}`)
    .append('g');

  const u = g
    .selectAll<SVGPathElement, unknown>('path')
    .data([curve]);

  u.enter()
    .append('path')
    .merge(u)
    .style('stroke', (d, i) => 'gray')
    .attr('d', (d) => line);

  return g as any as Selection<SVGElement, unknown, HTMLElement, any>;
}

const updatePoints = (coordinates: Coordinate[], id: string, g: Selection<SVGElement, unknown, HTMLElement, any>) => {
  var u = g
    .selectAll<SVGCircleElement, unknown>('circle')
    .data([coordinates[0], coordinates[coordinates.length - 1]]);

  u.enter()
    .append('circle')
    .attr('r', 4)
    .merge(u)
    .attr('cx', (d: any) => d[0])
    .attr('cy', (d: any) => d[1]);

  u.exit().remove();
}

const Curve = ({ mapping, id, containerId }: CurveProps): ReactElement => {
  const parentContainer = document.getElementById(containerId);
  const first = document.getElementById(mapping.from.$payload);
  const second = document.getElementById(mapping.to.$payload);
  first?.classList.add('mapped');
  second?.classList.add('mapped');

  const container = document.getElementById(id);
  const coordinates: Coordinate[] = [[3, first?.offsetTop! - parentContainer?.scrollTop!]];
  const heightHalf = 15;
  debugger
  coordinates.push([heightHalf + container?.clientWidth! / 3, first?.offsetTop! + heightHalf! - parentContainer?.scrollTop!]);
  coordinates.push([heightHalf + 2 * container?.clientWidth! / 3, second?.offsetTop! + heightHalf - parentContainer?.scrollTop!]);
  coordinates.push([container?.clientWidth! - 3, second?.offsetTop! + heightHalf - parentContainer?.scrollTop!]);

  const g = updateLines(coordinates, id);
  updatePoints(coordinates, id, g);

  return (
    <></>
  );
};

export default Curve;
