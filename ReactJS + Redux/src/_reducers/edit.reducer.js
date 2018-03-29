// function editReducer(array, action) {
//     return array.map( (item, index) => {
//         if(index !== action.index) {
//             // This isn't the item we care about - keep it as-is
//             return item;
//         }
//  
//         // Otherwise, this is the one we want - return an updated value
//         return {
//             ...item,
//             ...action.item
//         };    
//     });
// }

// const editReducer = (state=defaultState, action) => {
// switch(action.type){
   
//     case "EDIT_PRODUCT": return {
//         ...state,
//         myProducts: state.myProducts.map(x => x.id===action.payload.id?action.payload:x),
//     }
    
//     default:  return state;
// }
// }

// export default productsReducer;