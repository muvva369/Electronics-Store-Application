var express = require('express');
var router = express.Router();
const dbBusinessLogic = require('../public/javascripts/dbBusinessLogic')

router.get('/get-signup-data', function (req, res, next) {
    return dbBusinessLogic.getSignUpData()
        .then(function (item) {
            res.json(item);
        }).catch(function (err) {
            next(err);
        });
})

module.exports = router;