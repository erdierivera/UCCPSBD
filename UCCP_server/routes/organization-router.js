const express = require('express')

const OrganizationCtrl = require('../controllers/organization-ctrl')

const router = express.Router()

router.get('/organizations', OrganizationCtrl.getAllOrganizations)

module.exports = router