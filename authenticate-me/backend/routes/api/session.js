const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');


//User login route
router.post('/', asyncHandler(async(req, res, next) => {
        const { credential, password } = req.body;
        const user = await User.login({credential, password});

    if (!user) {
       const err = new Error('Login failed');
       err.status = 401;
       err.title = 'Login failed';
       err.errors = ['The provided credentials were invalid.'];
       return next(err);
    }

    await setTokenCookie(res, user);

    return res.json({
        user
    });
}))

module.exports = router;