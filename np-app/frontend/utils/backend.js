import axios from "axios";

export async function getTips(parkId) {
    const { data } = await axios.get(`/api/tips/park/${parkId}`)
    return data
}

export async function postTip(tip) {
    const { data } = await axios.post('/api/tips', tip)
    return data
}

export async function deleteTip(id) {
    const { data } = await axios.delete(`/api/tips/${id}`)
    return data
}

export async function updateTip(tip, id) {
    const { data } = await axios.put(`/api/tips/${id}`, tip)
    return data
}