const initialstate = {
    allList: [
        { id: 1, first: "sample ", last: "data", address: "sector 22" },
        { id: 2, first: "sample 2", last: "data 2", address: "sector 22 22" },
        { id: 3, first: "sample 3", last: "data 3", address: "sector 22" }
    ],
    isCreateItem: false,
    updateid:0
};


const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'GET_LIST':
            return {
                ...state
            };
        case 'ADD_ITEM':
            return {
                ...state,
                isCreateItem:action.payload
            };
        case 'CREATE_LIST':
            return {
                ...state,
                allList: state.allList.concat(action.payload) 
            };
        case 'DELETE_LIST':
            return {
                ...state,
                allList: state.allList.filter(item => item.id !== action.id)
            };
        case 'UPDATE_LIST':
            return {
                ...state,
                allList:state.allList.map(    
                    (content, i) => content.id === action.payload.id ? action.payload
                                            : content) 
            };
             case 'EDIT_LIST':
            return {
                ...state,
                updateid:action.id
            };

        default:
            return state;
    }

}
export default reducer;  