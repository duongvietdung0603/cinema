

import callApi from './index';


const URL = 'nhan-xet';

const NhanXet_Api = {
    phimById: (id) => {
        return callApi(`${URL}/phim/${id}`, "GET", null)
    },
    post: (noiDung, idUser, idPhim) => {
        const body = {
            noiDung: noiDung,
            user: {
                id: idUser,
            },
            phim: {
                id: idPhim,
            }
        }
        console.log("body", body)
        return callApi(`${URL}`, "POST", body)
    },
}

export default NhanXet_Api;

