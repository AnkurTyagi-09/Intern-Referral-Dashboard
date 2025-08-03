const { logger } = require('../utils/logger');

module.exports = (err, req, res, next) => {
  logger.error(`${err.message} - Stack: ${err.stack}`);
  res.status(500).json({
    message: 'Internal Server Error',
    error: err.message
  });
};