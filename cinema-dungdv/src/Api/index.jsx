import axios from "axios";
import { Api_url } from './../Config/Api_url';

export default function callApi(endpoint, method = "GET", body) {
    return axios({
        method: method,
        url: `${Api_url}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log("lỗi ở:", endpoint, err)
    })
}