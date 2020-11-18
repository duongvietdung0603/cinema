const LoadInitialState = {
    list_ghe_chon: []
}
const DatLich = (state = LoadInitialState, action) => {
    switch (action.type) {
        case 'CHON_GHE': {
            return {
                ...state,
            };
        }
        case 'SET_GHE': {
            const data = [...state.list_ghe_chon];
            const data_new = [...state.list_ghe_chon];

            var check = false;

            data.map(element => {
                if (element === action.payload) {
                    var tt = data.indexOf(element)
                    console.log("đã có", tt);
                    data_new.splice(tt, 1)
                    check = true;
                }
            })

            if (!check) {
                data_new.push(action.payload);
            }


            return {
                ...state,
                list_ghe_chon: data_new,
            };
        }

        default:
            return state
    }
}
export default DatLich;