export const GET_PRODUCT = "GET_PRODUCT";
const SET_PRODUCT = "SET_PRODUCT";

export const getProduct = () => ({
    type: GET_PRODUCT
});

export const setProduct = (product) => ({
    type: SET_PRODUCT,
    product
});

const initialState = {
    product: undefined
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT:
            const { product } = action;
            return { ...state, product };
        default:
            return state;
    }
};
