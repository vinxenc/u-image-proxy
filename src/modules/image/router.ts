import * as uWS from 'uWebSockets.js';
import { imageUploadHandler } from './handler';

// Register image routes
export const registerImageRoutes = (app: uWS.TemplatedApp): void => {
  // Route for uploading images
  app.post('/api/images/upload', imageUploadHandler);
};