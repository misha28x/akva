import { handlers as auth } from './auth.mock';

const api = 'http://165.22.83.21:3000';
export const handlers = [...auth(api)];
