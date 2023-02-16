import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.1.6:3000/api',
})

export const insertMember = payload => api.post(`/member`, payload)
export const getAllMembers = () => api.get(`/members`)
export const updateMemberById = (id, payload) => api.put(`/member/${id}`, payload)
export const deleteMemberById = id => api.delete(`/member/${id}`)
export const getMemberById = id => api.get(`/member/${id}`)
export const getMembersByOrg = id => api.get(`/member/getMembersByOrg/${id}`)
export const getMembersByMemberType = id => api.get(`/member/getMembersByMemberType/${id}`)
export const updateAge = id => api.get(`/member/updateAge`) // add button to update members' age manually


export const getAllOrganizations = () => api.get(`/organizations`)

export const getAllMembershipTypes = () => api.get(`/membershiptypes`)

const apis = {
    insertMember,
    getAllMembers,
    updateMemberById,
    deleteMemberById,
    getMemberById,
    getAllOrganizations,
    getMembersByOrg,
    getAllMembershipTypes,
    getMembersByMemberType,
    updateAge
}

export default apis