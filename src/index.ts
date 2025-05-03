import { app } from './app';
import logger from './libs/logger';

const port = 9001;
app.listen(port, (token) => {
  if (token) {
    logger.info(`Server started on port ${port}`);
  } else {
    logger.error(`Failed to start server on port ${port}`);
  }
});