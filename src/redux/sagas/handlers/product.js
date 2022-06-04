import { call, put } from "redux-saga/effects";
import { setProduct } from "../../ducks/product";
import { requestGetProduct } from "../requests/product";

export function* handleGetProduct(action) {
    try {
        const response = yield call(requestGetProduct);
        const { data } = response;
        yield put(setProduct(data));
    } catch (error) {
        console.log(error);
    }
}