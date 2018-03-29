
const defaultState = {
    myStore: [{
        store:'My Store', 
        country:'Israel', 
        city:'Tel-Aviv',
        street:'', 
        house:'', 
        image:'',
    }]
}
const storeArrReducer = (state=defaultState, action) => {
    switch(action.type){
        case "REGISTER_STORE": {
            return {
            ...state,
            myStore: [...state.myStore, action.payload]
        }
    }
    default: return state;
}
}

export default storeArrReducer;