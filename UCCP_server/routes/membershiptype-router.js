const express = require('express')

const MembershipTypeCtrl = require('../controllers/membershiptype-ctrl')

const router = express.Router()

router.get('/membershiptypes', MembershipTypeCtrl.getAllMembershipTypes)

module.exports = router