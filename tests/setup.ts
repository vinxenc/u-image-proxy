import * as uWS from 'uWebSockets.js';

import { app } from '../src/app';
import logger from '../src/libs/logger';

// Declare a proper global namespace augmentation
declare global {
  var app: uWS.TemplatedApp; // Use var instead of adding to NodeJS.Global
}

beforeAll(async () => {
  // Initialize any services or test data needed for E2E tests
  const port = 3000;
  app.listen(port, (token) => {
    if (token) {
      logger.info(`Server started on port ${port}`);
    } else {
      logger.error(`Failed to start server on port ${port}`);
    }
  });
  
  global.app = app;
  // Create test directory if needed
  // You might want to add code here to set up test environment
});

// Clean up after all tests
afterAll(async () => {
  // Clean up any test data or services
  global.app.close();
});