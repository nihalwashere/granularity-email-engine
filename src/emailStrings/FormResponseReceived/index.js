import RenderingFormResponseReceivedEmail from '../../emailComponents/FromResponseReceived';
import { wrapRenderFunction } from '../wrapRenderer';

export const stringOfFormResponseReceivedEmail = wrapRenderFunction(
  RenderingFormResponseReceivedEmail,
);
