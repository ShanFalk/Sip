const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { User } = require('../../db/models');


const{ Review } = require('../../db/models');

router.use((req, res, next) => {
    next();
})

router.get('/:businessId', asyncHandler(async (req, res) => {
    const bizId = parseInt(req.params.businessId, 10)
    const reviews = await Review.findAll({
        where: {
          businessId: bizId
        },
        include: User
      })
    return res.json({ reviews });
}));

module.exports = router;
