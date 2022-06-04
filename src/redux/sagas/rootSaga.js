import { takeLatest } from "redux-saga/effects";
import { handleGetProduct } from "./handlers/product";
import { GET_PRODUCT } from "../ducks/product";

export function* watcherSaga() {
    yield takeLatest(GET_PRODUCT, handleGetProduct);
}



