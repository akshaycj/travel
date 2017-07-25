const initialState = {
    data:[],
};


const SELECT_TAB = 'SELECT_PACK';
export const createSelectPackage = (data) => ({
    type: SELECT_TAB,
    data: data
});

export const packsel =(state=initialState,action)=>{
  switch (action.type) {

        case SELECT_TAB:
            return {
                ...state,
                data: action.data
            };
        default:
            return state;
}
}
