import { put, takeLatest, call, spawn } from "redux-saga/effects";
import { set_nhan_xet } from "../Reducer/actions/NhanXet_DanhGia_Action";
import NhanXet_Api from './../Api/NhanXet_Api';
import { danhgia_nhanxet } from './../Reducer/actions/NhanXet_DanhGia_Action';



function* danhGia_nhanXet() {
    yield takeLatest("DANHGIA_NHANXET", worker_danhgia_nhanxet);
    yield takeLatest("POST_NHAN_XET", worker_pots_nhan_xet);

}

function fetchData_danhgia_nhanxet(id) {
    return NhanXet_Api.phimById(id);
}


function* worker_danhgia_nhanxet({ payload }) {
    try {

        const data = yield call(fetchData_danhgia_nhanxet, payload);
        yield put(set_nhan_xet(data.data));

    } catch (error) {
        console.log(error);
    }
}

function fetchData_pots_nhan_xet(binh_luan, userId, phimId) {
    return NhanXet_Api.post(binh_luan, userId, phimId);
}


function* worker_pots_nhan_xet({ payload, payload1, payload2 }) {
    try {

        const data = yield call(fetchData_pots_nhan_xet, payload, payload1, payload2);
        // yield spawn(worker_danhgia_nhanxet);
        yield put(danhgia_nhanxet(payload2));


    } catch (error) {
        console.log(error);
    }
}

export default danhGia_nhanXet;
