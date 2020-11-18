import callApi from './index';


const URL = 'lich-chieu';

const LichChieu_Api = {
    phimById: (id) => {
        return callApi(`${URL}/phim/${id}`, "GET", null)
    },

    lichChieu: (ngayChieu) => {
        return callApi(`${URL}?ngayChieu=${ngayChieu}`, "GET", null)
    },

}

export default LichChieu_Api;

