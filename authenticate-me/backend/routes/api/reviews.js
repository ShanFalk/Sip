const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const{ Review } = require('../../db/models');

router.get('/:businessId', asyncHandler(async (req, res) => {
    const reviews = await Review.getBizReviews(req.params.businessId);
    return res.json({ reviews });
}));

module.exports = router;
