import axios from 'axios'

export async function getData(url) {
    const response = await axios.get(url)
    const data = await response.data
    return data
}