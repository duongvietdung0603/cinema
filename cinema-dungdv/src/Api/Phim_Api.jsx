import callApi from './index';


const URL = 'phim';

const Phim_Api = {
    phimByStatus: (status) => {
        return callApi(`${URL}?status=${status}`, "GET", null)
    },

    phim: (status, ngayChieu) => {
        return callApi(`${URL}?status=${status}&ngayChieu=${ngayChieu}`, "GET", null)
    },

    phimById: (id) => {
        return callApi(`${URL}/${id}`, "GET", null)
    },


}

export default Phim_Api;

