export const danhgia_nhanxet = (hobby) => {
    return {
        type: 'DANHGIA_NHANXET',
        payload: hobby,
    }
}

export const set_nhan_xet = (hobby) => {
    return {
        type: 'SET_NHAN_XET',
        payload: hobby,
    }
}

export const pots_nhan_xet = (hobby, hobby1, hobby2) => {
    return {
        type: 'POST_NHAN_XET',
        payload: hobby,
        payload1: hobby1,
        payload2: hobby2,
    }
}
