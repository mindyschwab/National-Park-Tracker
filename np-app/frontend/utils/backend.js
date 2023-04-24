import axios from "axios";

export async function getTips(parkId) {
    const { data } = await axios.get(`/api/tips/park/${parkId}`)
    return data
}