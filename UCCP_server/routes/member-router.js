const express = require('express')

const MemberCtrl = require('../controllers/member-ctrl')

const router = express.Router()

router.post('/member', MemberCtrl.createMember)
router.put('/member/:id', MemberCtrl.updateMember)
router.delete('/member/:id', MemberCtrl.deleteMember)
router.get('/member/:id', MemberCtrl.getMemberById)
router.get('/members', MemberCtrl.getAllMembers)
router.get('/member/getMembersByOrg/:id', MemberCtrl.getMembersByOrg)
router.get('/member/getMembersByMemberType/:id', MemberCtrl.getMembersByMemberType)

module.exports = router