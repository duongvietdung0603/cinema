import { all, fork } from "redux-saga/effects";

import load from './load';
import danhGia_nhanXet from './danhGia_nhanXet';




function* rootSaga() {

    yield all([fork(load), fork(danhGia_nhanXet)])
}

export default rootSaga;