// src/mocks/browser.js
import { setupWorker } from 'msw';
import { personalInformationHandlers } from './personal-information/handlers';
import { legalCapacityHandlers } from './legal-capacity/handlers';
import { validateHandlers } from './validate/handlers';
// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(
  ...personalInformationHandlers,
  ...legalCapacityHandlers,
  ...validateHandlers
);
