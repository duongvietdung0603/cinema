import { combineReducers } from "redux";
import User from './reducer/User';
import Load from './reducer/Load';
import DatLich from "./reducer/DatLich";
import NhanXet_DanhGia from './reducer/NhanXet_DanhGia';



const rootReducers = combineReducers({
    User: User,
    Load: Load,
    DatLich: DatLich,
    NhanXet_DanhGia: NhanXet_DanhGia
});

export default rootReducers;