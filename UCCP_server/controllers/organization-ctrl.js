const Organization = require('../models/organization-model')


getAllOrganizations = async (req, res) => {
    await Organization.find({}, (err, organizations) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!organizations.length) {
            return res
                .status(404)
                .json({ success: false, error: `Organizations not found` })
        }
        return res.status(200).json({ success: true, data: organizations })
    }).catch(err => console.log(err))
}

module.exports = {
    getAllOrganizations,
}