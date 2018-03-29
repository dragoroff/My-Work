const defaultState = {
    myProducts:[
        {
            title:'test', 
            subtitle: 'subtest',
            manufacturer: 'test',
            marketer: 'test',
            date: '2211-11-11',
            description: 'test',
            size: 'test',
            price: 1212,
            image: 'https://www.siteimage.com.ua/uploads/images/blog/08-2017/internet-magazin-1391231123412331313825.jpg',
            id: 0
        }
    ]
}

const productsReducer = (state=defaultState, action) => {
switch(action.type){
    case "ADD_PRODUCT": {
        return {
        ...state,
        myProducts:[...state.myProducts, action.payload]
        }
    }
    case "EDIT_PRODUCT": {
        console.log("state before edit: " + state);
        return {
        ...state,
        myProducts: state.myProducts.map(x => x.id===action.payload.id?action.payload:x),
    }
}
    case "DELETE_PRODUCT": return {
        ...state,
        myProducts: state.myProducts.filter(x => x.id !== action.id)
    }
    default:  return state;
}
}

 

export default productsReducer;