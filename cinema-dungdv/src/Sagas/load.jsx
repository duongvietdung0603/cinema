import { put, takeLatest, delay } from "redux-saga/effects";
import { load_item, load_page } from "../Reducer/actions/Load_Action";



function* load() {
    yield takeLatest("CALL_LOAD_ITEM", worker_call_load_item);
    yield takeLatest("CALL_LOAD_PAGE", worker_call_load_page);

}


function* worker_call_load_item({ payload }) {
    yield put(load_item(true));
    yield delay(payload);
    yield put(load_item(false));
}
function* worker_call_load_page({ payload }) {
    yield put(load_page(true));
    yield delay(payload);
     yield put(load_page(false));
}

export default load;
