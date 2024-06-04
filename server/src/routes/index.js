const { Router } = require("express");
const { getAllCountries } = require('../controllers/getAllCountries')
const { getCountryById } = require('../controllers/getCountryById')
const { getCountriesByName } = require('../controllers/getCountriesByName')
const { createActivity } = require('../controllers/createActivity');
const { getActivities } = require("../controllers/getActivities");

const router = Router();
router.get('/countries', getAllCountries)
router.get('/countries/:id', getCountryById)
router.get('/countries', getCountriesByName)
router.post('/activities', createActivity)
router.get('/activities', getActivities)


module.exports = router;
