
const defaultState = {
        payload:   
        {
            store:'My Store', 
            country:'Israel', 
            city:'Tel-Aviv',
            street:'A-Masger', 
            house:'43', 
            image:'',
            addedStore:false
        }
}
const storeReducer = (state=defaultState, action) => {
    switch(action.type){
        case "REGISTER_STORE": return {
            ...state,
            payload: action.payload
        }
        default: return state;
    }
}

export default storeReducer;