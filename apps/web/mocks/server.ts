// src/mocks/server.js
import { setupServer } from 'msw/node';
import { personalInformationHandlers } from './personal-information/handlers';
import { legalCapacityHandlers } from './legal-capacity/handlers';

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...personalInformationHandlers, ...legalCapacityHandlers);
