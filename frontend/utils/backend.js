import axios from "axios";
const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }

export async function getTips(parkId) {
    const { data } = await axios.get(`/api/tips/park/${parkId}`)
    return data
}

export async function postTip(tip) {
    const { data } = await axios.post('/api/tips', tip, authHeader)
    return data
}

export async function deleteTip(id) {
    const { data } = await axios.delete(`/api/tips/${id}`, authHeader)
    return data
}

export async function updateTip(tip, id) {
    const { data } = await axios.put(`/api/tips/${id}`, tip, authHeader)
    return data
}

export async function signUp(user) {
    console.log('this is the signUp function')
    console.log('user is; ' + user)
    const { data } = await axios.post('/api/users/signup', user)
    console.log('data is: ' + data)
    return data
}

export async function logIn(user) {
    const { data } = await axios.post('/api/users/login', user)
    return data
}