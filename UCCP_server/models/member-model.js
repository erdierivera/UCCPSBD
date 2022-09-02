const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Member = new Schema(
    {
        firstName: { type: String, required: true },
        middleName: { type: String, required: false },
        lastName: { type: String, required: true },
        birthday:{ type: String, required: true },
        birthPlace:{ type: String, required: false },
        nameOfFather:{ type: String, required: false },
        maidenNameOfMother:{ type: String, required: false },
        memberTypeId:{ type: String, required: false },
        baptismDate:{ type: String, required: false },
        baptizedBy:{ type: String, required: false },
        confirmationDate:{ type: String, required: false },
        confirmedBy:{ type: String, required: false },
        occupation:{ type: String, required: false },
        organizationId:{ type: String, required: false },
        civilStatus:{ type: String, required: false },
        isActive:{ type: Boolean, required: true },
        age:{ type: String, required: false },
        weddingDate:{ type: String, required: false },
        weddedBy:{ type: String, required: false },
        spouse:{ type: String, required: false },
        isRemoved:{ type: Boolean, required: true },
        removalDate:{ type: String, required: false },
        reasonOfRemoval:{ type: String, required: false }
    },
    { timestamps: true },
)

module.exports = mongoose.model('members', Member)