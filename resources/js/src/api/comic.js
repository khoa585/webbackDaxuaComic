import axios from "./axios";
export const getListComic = (page = 1, numberItem = 20) => {
    return axios.post("/api/comic/list", {
        page: page,
        numberLimit: numberItem,
    });
};

