const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const businessesRouter = require('./businesses');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/businesses', businessesRouter);





module.exports = router;
