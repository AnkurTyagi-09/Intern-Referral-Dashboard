const dummyData = require('../data/dummyData');
const { logger } = require('../utils/logger');

exports.getUserData = (req, res, next) => {
  try {
    logger.info('Fetching user data');
    res.status(200).json(dummyData.user);
  } catch (error) {
    logger.error(`Error fetching user data: ${error.message}`);
    next(error);
  }
};

exports.getLeaderboard = (req, res, next) => {
  try {
    logger.info('Fetching leaderboard data');
    res.status(200).json(dummyData.leaderboard);
  } catch (error) {
    logger.error(`Error fetching leaderboard data: ${error.message}`);
    next(error);
  }
};

exports.logReferralClick = (req, res, next) => {
  try {
    const { referralCode } = req.body;
    logger.info(`Logging referral click for ${referralCode}`);
    dummyData.analytics.push({
      timestamp: new Date().toISOString(),
      referralCode,
      action: 'click'
    });
    res.status(200).json({ message: 'Referral click logged' });
  } catch (error) {
    logger.error(`Error logging referral click: ${error.message}`);
    next(error);
  }
};