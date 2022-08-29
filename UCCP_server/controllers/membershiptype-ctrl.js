const MembershipType = require('../models/membershiptype-model')


getAllMembershipTypes = async (req, res) => {
    await MembershipType.find({}, (err, membershipTypes) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!membershipTypes.length) {
            return res
                .status(404)
                .json({ success: false, error: `Membership Types not found.` })
        }
        return res.status(200).json({ success: true, data: membershipTypes })
    }).catch(err => console.log(err))
}

module.exports = {
    getAllMembershipTypes,
}