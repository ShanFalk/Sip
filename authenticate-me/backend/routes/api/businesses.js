const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Op } = require('sequelize');

const { requireAuth } = require('../../utils/auth');
const { Business } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const validateBizCreate = [
    check('ownerId')
        .exists({ checkFalsy: true }),
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a title')
        .isLength({max: 256})
        .withMessage('Title must not be longer than 256 characters'),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a description'),
    check('address')
        .exists({ checkFalsy: true })
        .withMessage('Please provide an address')
        .isLength({max: 256})
        .withMessage('Address must not be longer than 256 characters'),
    check('city')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a city')
        .isLength({max: 256})
        .withMessage('City must not be longer than 256 characters'),
    check('state')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a state')
        .isLength({max: 256})
        .withMessage('State must not be longer than 256 characters'),
    check('zipCode')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a zipCode')
        .isLength({max: 50})
        .withMessage('Zip code must not be longer than 50 characters'),
    check('imageUrl')
        .exists({ checkFalsy: true })
        .withMessage('Please provide an image URL')
        .isLength({max: 256})
        .withMessage('Image URL must not be longer than 256 characters'),
    handleValidationErrors
];

router.post('/', requireAuth, validateBizCreate, asyncHandler(async(req, res) => {

    const {
        ownerId,
        title,
        description,
        address,
        city,
        state,
        zipCode,
        imageUrl
    } = req.body;

    const business = await Business.signup({
        ownerId,
        title,
        description,
        address,
        city,
        state,
        zipCode,
        imageUrl
    });

    return res.json({
        business
    })

}))

router.get('/search/:term', asyncHandler(async(req, res) => {
    const businesses = await Business.findAll({
        where: {
            [Op.or]: [
                {
                    title: {
                        [Op.iLike]: `%${req.params.term}%`
                    }
                },
                {
                    description: {
                        [Op.iLike]: `%${req.params.term}%`
                    }
                },
                {
                    address: {
                        [Op.iLike]: `%${req.params.term}%`
                    }
                },
                {
                    city: {
                        [Op.iLike]: `%${req.params.term}%`
                    }
                },
                {
                    state: {
                        [Op.iLike]: `%${req.params.term}%`
                    }
                },
                {
                    zipCode: {
                        [Op.iLike]: `%${req.params.term}%`
                    }
                },
            ]
        }
    });

    return (res.json({
        businesses
    }))
}))


module.exports = router;
