import axios from "axios";

export function requestGetProduct() {
    return axios.request({
        method: "get",
        url: "https://webskitters-fce5d-default-rtdb.firebaseio.com/products.json"
    });
}

