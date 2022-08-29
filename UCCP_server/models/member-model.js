const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Member = new Schema(
    {
        firstName: { type: String, required: true },
        middleName: { type: String, required: false },
        lastName: { type: String, required: true },
        birthday:{ type: String, required: false },
        occupation:{ type: String, required: false },
        baptismDate:{ type: String, required: false },
        baptizedBy:{ type: String, required: false },
        memberTypeId:{ type: String, required: false },
        organizationId:{ type: String, required: false },
        isActive:{ type: Boolean, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('members', Member)