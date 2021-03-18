// import axiosClient from "./axiosClient";

import { FAKE_AUTH_LIST } from './FakeData/auth-data'
const UserApi =  {
    login : (user) => {
        return new Promise((resolve) => {
            setTimeout(() => {
              resolve(FAKE_AUTH_LIST);
            }, 5000);
          });
    },
}
export default UserApi;