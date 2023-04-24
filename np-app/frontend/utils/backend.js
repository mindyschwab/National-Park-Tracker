import axios from "axios";

export async function getTips(parkId) {
    const { data } = await axios.get(`/api/tips/park/${parkId}`)
    console.log(parkId)
    return data
}