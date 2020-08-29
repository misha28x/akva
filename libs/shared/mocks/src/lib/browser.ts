import { handlers } from './handlers';
import { setupWorker } from 'msw';

const isBrowser = !(window as any)?.process;

export const worker = isBrowser
  ? setupWorker(...handlers)
  : { start: () => null };
