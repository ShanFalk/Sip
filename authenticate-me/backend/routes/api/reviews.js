const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const{ Review } = require('../../db/models');

router.get('/:businessId', asyncHandler(async (req, res) => {
    console.log('Are we in the backend route?');
    const reviews = await Review.getBizReviews(req.params.businessId);
    console.log('This is the response from the database query', reviews);
    return res.json({ reviews });
}));

module.exports = router;
