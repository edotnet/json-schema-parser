import { ReactElement } from "react";

export interface RenderContext {
  draggable?: boolean;
  onDrop?: Function;
}

export interface iDrawing {
  render(context: RenderContext): ReactElement;
}
