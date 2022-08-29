const Member = require('../models/member-model')

createMember = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a member',
        })
    }

    const member = new Member(body)

    if (!member) {
        return res.status(400).json({ success: false, error: err })
    }
    switch(member.memberTypeId){
        case "Regular":
            member.memberTypeId = "1";
            break;
        case "Associate":
            member.memberTypeId = "2";
            break;
        case "Affiliate":
            member.memberTypeId = "3";
            break;
        case "Preparatory":
            member.memberTypeId = "4";
            break;
        case "Honorary":
            member.memberTypeId = "5";
            break;
        default:
            break;
    }            
    switch(member.organizationId.toUpperCase()){
        case "UCSCA":
            member.organizationId = "1";
            break;
        case "UCM":
            member.organizationId = "2";
            break;
        case "CWA":
            member.organizationId = "3";
            break;
        case "CYAF":
            member.organizationId = "4";
            break;
        case "CYF":
            member.organizationId = "5";
            break;
        case "KIDS":
            member.organizationId = "6";
            break;
        default:
            break;
    }
    member
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: member._id,
                message: 'Member created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Member not created!',
            })
        })
}

updateMember = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Member.findOne({ _id: req.params.id }, (err, member) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Member not found!',
            })
        }
        member.firstName = body.firstName
        member.lastName = body.lastName
        member.middleName = body.middleName
        member.birthday = body.birthday
        member.occupation = body.occupation
        member.baptismDate = body.baptismDate
        member.baptizedBy = body.baptizedBy
        member.organizationId = body.organizationId
        member.memberTypeId = body.memberTypeId
        member.isActive = body.isActive
        switch(member.memberTypeId){
            case "Regular":
                member.memberTypeId = "1";
                break;
            case "Associate":
                member.memberTypeId = "2";
                break;
            case "Affiliate":
                member.memberTypeId = "3";
                break;
            case "Preparatory":
                member.memberTypeId = "4";
                break;
            case "Honorary":
                member.memberTypeId = "5";
                break;
            default:
                break;
        }            
        switch(member.organizationId.toUpperCase()){
            case "UCSCA":
                member.organizationId = "1";
                break;
            case "UCM":
                member.organizationId = "2";
                break;
            case "CWA":
                member.organizationId = "3";
                break;
            case "CYAF":
                member.organizationId = "4";
                break;
            case "CYF":
                member.organizationId = "5";
                break;
            case "KIDS":
                member.organizationId = "6";
                break;
            default:
                break;
        }
        member
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: member._id,
                    message: 'Member updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Member not updated!',
                })
            })
    })
}

deleteMember = async (req, res) => {
    await Member.findOneAndDelete({ _id: req.params.id }, (err, member) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!member) {
            return res
                .status(404)
                .json({ success: false, error: `Member not found` })
        }

        return res.status(200).json({ success: true, data: member })
    }).catch(err => console.log(err))
}

getMemberById = async (req, res) => {
    await Member.findOne({ _id: req.params.id }, (err, member) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!member) {
            return res
                .status(404)
                .json({ success: false, error: `Member not found` })
        }
        switch(member.memberTypeId){
            case "1":
                member.memberTypeId = "Regular";
                break;
            case "2":
                member.memberTypeId = "Associate";
                break;
            case "3":
                member.memberTypeId = "Affiliate";
                break;
            case "4":
                member.memberTypeId = "Preparatory";
                break;
            case "5":
                member.memberTypeId = "Honorary";
                break;
            default:
                break;
        }            
        switch(member.organizationId){
            case "1":
                member.organizationId = "UCSCA";
                break;
            case "2":
                member.organizationId = "UCM";
                break;
            case "3":
                member.organizationId = "CWA";
                break;
            case "4":
                member.organizationId = "CYAF";
                break;
            case "5":
                member.organizationId = "CYF";
                break;
            case "6":
                member.organizationId = "KIDS";
                break;
            default:
                break;
        }
        return res.status(200).json({ success: true, data: member })
    }).catch(err => console.log(err))
}

getAllMembers = async (req, res) => {
    await Member.find({}, (err, members) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!members.length) {
            return res
                .status(404)
                .json({ success: false, error: `Members not found.` })
        }
        members.forEach((mem) => {
            switch(mem.memberTypeId){
                case "1":
                    mem.memberTypeId = "Regular";
                    break;
                case "2":
                    mem.memberTypeId = "Associate";
                    break;
                case "3":
                    mem.memberTypeId = "Affiliate";
                    break;
                case "4":
                    mem.memberTypeId = "Preparatory";
                    break;
                case "5":
                    mem.memberTypeId = "Honorary";
                    break;
            }            
            switch(mem.organizationId){
                case "1":
                    mem.organizationId = "UCSCA";
                    break;
                case "2":
                    mem.organizationId = "UCM";
                    break;
                case "3":
                    mem.organizationId = "CWA";
                    break;
                case "4":
                    mem.organizationId = "CYAF";
                    break;
                case "5":
                    mem.organizationId = "CYF";
                    break;
                case "6":
                    mem.organizationId = "KIDS";
                    break;
            }
        });
        return res.status(200).json({ success: true, data: members })
    }).catch(err => console.log(err))
}

getMembersByOrg = async (req, res) => {
    await Member.find({organizationId: req.params.id}, (err, members) => {
        if (err) {
            return res.status(200).json({ success: false, error: err, data: members })
        }
        if (!members.length) {
            return res.status(200).json({ success: false, error: "No data found.", data: members })
        }
        console.log(members);
        members.forEach((mem) => {
            switch(mem.memberTypeId){
                case "1":
                    mem.memberTypeId = "Regular";
                    break;
                case "2":
                    mem.memberTypeId = "Associate";
                    break;
                case "3":
                    mem.memberTypeId = "Affiliate";
                    break;
                case "4":
                    mem.memberTypeId = "Preparatory";
                    break;
                case "5":
                    mem.memberTypeId = "Honorary";
                    break;
            }            
            switch(mem.organizationId){
                case "1":
                    mem.organizationId = "UCSCA";
                    break;
                case "2":
                    mem.organizationId = "UCM";
                    break;
                case "3":
                    mem.organizationId = "CWA";
                    break;
                case "4":
                    mem.organizationId = "CYAF";
                    break;
                case "5":
                    mem.organizationId = "CYF";
                    break;
                case "6":
                    mem.organizationId = "KIDS";
                    break;
            }
        });
        return res.status(200).json({ success: true, data: members })
    }).catch(err => console.log(err))
}

getMembersByMemberType = async (req, res) => {
    await Member.find({memberTypeId: req.params.id}, (err, members) => {
        if (err) {
            return res.status(200).json({ success: false, error: err, data: members })
        }
        if (!members.length) {
            return res.status(200).json({ success: false, error: "No data found.", data: members })
        }
        members.forEach((mem) => {
            switch(mem.memberTypeId){
                case "1":
                    mem.memberTypeId = "Regular";
                    break;
                case "2":
                    mem.memberTypeId = "Associate";
                    break;
                case "3":
                    mem.memberTypeId = "Affiliate";
                    break;
                case "4":
                    mem.memberTypeId = "Preparatory";
                    break;
                case "5":
                    mem.memberTypeId = "Honorary";
                    break;
            }            
            switch(mem.organizationId){
                case "1":
                    mem.organizationId = "UCSCA";
                    break;
                case "2":
                    mem.organizationId = "UCM";
                    break;
                case "3":
                    mem.organizationId = "CWA";
                    break;
                case "4":
                    mem.organizationId = "CYAF";
                    break;
                case "5":
                    mem.organizationId = "CYF";
                    break;
                case "6":
                    mem.organizationId = "KIDS";
                    break;
            }
        });
        return res.status(200).json({ success: true, data: members })
    }).catch(err => console.log(err))
}


module.exports = {
    createMember,
    updateMember,
    deleteMember,
    getAllMembers,
    getMemberById,
    getMembersByOrg,
    getMembersByMemberType
}