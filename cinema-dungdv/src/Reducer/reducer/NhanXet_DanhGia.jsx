const LoadInitialState = {
    list_nhan_xet: [],
}
const NhanXet_DanhGia = (state = LoadInitialState, action) => {
    switch (action.type) {
        case 'DANHGIA_NHANXET': {
            return {
                ...state,
            };
        }

        case 'SET_NHAN_XET': {
            return {
                ...state,
                list_nhan_xet: action.payload
            };
        }

        case 'POST_NHAN_XET': {
            return {
                ...state,
            };
        }

        default:
            return state
    }
}
export default NhanXet_DanhGia;