const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MembershipType = new Schema(
    {
        membershiptypeid: { type: String, required: true },
        name: { type: String, required: true },
        description:  { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('membershiptypes', MembershipType)