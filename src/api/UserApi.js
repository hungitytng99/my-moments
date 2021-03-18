import axiosClient from "./axiosClient";

class UserApi {
    login = (user) => {
        const url = '/api/auth/login';
        return axiosClient.post(url, { user });
    };
}
export default UserApi;