const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Organization = new Schema(
    {
        organizationId: { type: String, required: true },
        name: { type: String, required: true },
        abbreviation: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('organizations', Organization)