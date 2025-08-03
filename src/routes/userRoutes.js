const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/user', userController.getUserData);
router.get('/leaderboard', userController.getLeaderboard);
router.post('/analytics', userController.logReferralClick);

module.exports = router;