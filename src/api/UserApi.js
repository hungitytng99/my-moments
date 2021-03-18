// import axiosClient from "./axiosClient";

import { FAKE_AUTH_LIST } from './FakeData/auth-data'
const UserApi =  {
    login : (user) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(FAKE_AUTH_LIST);
            }, 250);
          });
    },
    loginFail : () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject("Sorry, your password was incorrect. Please double-check your password.");
        }, 250);
      });
    }
}
export default UserApi;