import axiosClient from "./axiosClient";

import { Post } from 'constants/fake';
import listApiUri from "helpers/ApiHelper";
const UserApi = {
    login: (user) => {
        return axiosClient.post(listApiUri.LOGIN,user);
    },
    getPost: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Post.splice(0, 3));
            }, 100);
        });
    },
    register: (user) => {
        return axiosClient.post(listApiUri.SIGN_UP, user);
    },
    verify: (token) => {
        // console.log("verify: ", listApiUri.VERIFY(token));
        return axiosClient.get(listApiUri.VERIFY(token));
    },
}
export default UserApi;