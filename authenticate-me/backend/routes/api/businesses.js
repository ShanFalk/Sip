const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');
const { Business } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

router.post('/', requireAuth, asyncHandler(async(req, res) => {

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

router.get('/test', asyncHandler(async(req, res) => {
    const businesses = await Business.findAll();

    return (res.json({
        businesses
    }))
}))


module.exports = router;
