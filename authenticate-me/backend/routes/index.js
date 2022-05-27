const express = require('express');
const router = express.Router();
const apiRouter = require('./api');

router.use('/api', apiRouter);

if (process.env.NODE_ENV === 'production') {
    const path = require('path');
//serve the frontend's index.html file at the root route if we are in prod
    router.get('/', (req, res) => {
        res.cookie('XSRF-TOKEN', reeq.csrfToken());
        return res.sendFile(
            path.resolve(__dirname, '../../frontend', 'build', 'index.html')
        );
    });
    router.use(express.static(path.resolve("../frontend/build")));

//serve the frontend's index.html file at any routes that DO NOT begin with api
    router.get(/^(?!\/?api).*/, (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        return res.sendFile(
            path.resolve(__dirname, '../../frontend', 'build', 'index.html')
        );
    });
}

//to add the XSRF-TOKEN in development on the frontend
if (process.env.NODE_ENV !== 'production') {
    router.get('/api/csrf/restore', (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        return res.json({});
    })
}

module.exports = router;
