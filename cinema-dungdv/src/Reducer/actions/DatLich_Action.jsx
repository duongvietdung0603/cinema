export const chon_ghe = (hobby) => {
    return {
        type: 'CHON_GHE',
        payload: hobby,
    }
}

export const set_ghe = (hobby) => {
    return {
        type: 'SET_GHE',
        payload: hobby,
    }
}
