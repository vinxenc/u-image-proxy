// In your src/index.ts
import * as uWS from 'uWebSockets.js';
import { registerImageRoutes } from './modules/image/router';

const app = uWS.App();

// Register image routes
registerImageRoutes(app);

export { app };
