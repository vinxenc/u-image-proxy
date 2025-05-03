import pino from 'pino'

// Configure pino logger
const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  timestamp: true,
  formatters: {
    level: (label) => {
      return { level: label }
    }
  }
})

export default logger
