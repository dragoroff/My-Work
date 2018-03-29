export const productActions = {
    addProducts,
    deleteProducts,
    editProduct
}

function addProducts (title, subtitle, manufacturer, marketer, date, description, size, price, image, id){
    return {
        type: "ADD_PRODUCT",
        payload: {title, subtitle, manufacturer, marketer, date, description, size, price, image, id}
    }
}
function deleteProducts (id) {
    return {
        type: "DELETE_PRODUCT",
        id
    }
}
function editProduct (title, subtitle, manufacturer, marketer, date, description, size, price, image, id)
{
    return {
        type: 'EDIT_PRODUCT',
        payload: {title, subtitle, manufacturer, marketer, date, description, size, price, image, id}
    }
}
