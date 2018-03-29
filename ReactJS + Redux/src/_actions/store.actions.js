export const storeRegister = (store, country, city, street, house, image) => {
    return {
        type: "REGISTER_STORE",
        payload: {store, country, city, street, house, image}
    }
}