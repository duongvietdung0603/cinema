const LoadInitialState = {
    loadItem: false,
    loadPage: false,
}
const Load = (state = LoadInitialState, action) => {
    switch (action.type) {
        case 'CALL_LOAD_ITEM': {
            return {
                ...state,
            };
        }
        case 'LOAD_ITEM': {
            return {
                ...state,
                loadItem: action.payload,
            };
        }
        case 'CALL_LOAD_PAGE': {
            return {
                ...state,
            };
        }
        case 'LOAD_PAGE': {
            return {
                ...state,
                loadPage: action.payload,
            };
        }
        default:
            return state
    }
}
export default Load;