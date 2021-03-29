// import axiosClient from "./axiosClient";

import { Post } from 'constants/fake';
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
    },
    getPost : () => {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(Post.splice(0,3));
          }, 100);
        });
  },
}
export default UserApi;