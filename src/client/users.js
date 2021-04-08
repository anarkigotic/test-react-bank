import axios from "axios"
import { Config } from "../config/router_url"


export const verifyPass = ({ email, password }) => {
    return axios.post(Config.URL_AUTH, { email, password })
}
export const getId = async(token, id) => {
    let res = await axios.get(`${Config.URL_GETALL}/${id}`, {
        headers: {
            token
        }
    })
    return res.data.data
}