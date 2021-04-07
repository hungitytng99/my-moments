// import axiosClient from "./axiosClient";

import { Post, SUCCESS_LOGIN_RESPONSE } from 'constants/fake';
const UserApi = {
  login: (user) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(SUCCESS_LOGIN_RESPONSE);
      }, 250);
    });
  },
  loginFail: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Sorry, your password was incorrect. Please double-check your password.");
      }, 250);
    });
  },
  getPost: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Post.splice(0, 3));
      }, 100);
    });
  },
  register: (user) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("SUCCESS");
      }, 100);
    });
  }
}
export default UserApi;