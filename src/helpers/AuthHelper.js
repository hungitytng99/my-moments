import UserApi from "api/UserApi";
import Cookies from "js-cookie";

function storeUser(apiResponse) {
    console.log("save User to cookie");
    Cookies.set(process.env.REACT_APP_TOKEN_STORAGE, apiResponse.token, { expires: 90 });
    Cookies.set(process.env.REACT_APP_USERNAME_STORAGE, apiResponse.username, { expires: 90 });
}

function getUsername() {
    return Cookies.get(process.env.REACT_APP_USERNAME_STORAGE);
}

function getAndConfirmToken() {
    const authToken = Cookies.get(process.env.REACT_APP_TOKEN_STORAGE);
    if (!authToken) {
        return false;
    } else {
        try {
            // const response = await UserApi.verify(authToken);
        } catch (error){
            console.log(error);
        }
    }
    // const apiResponse = await UserApi.);
    return Cookies.get(process.env.REACT_APP_TOKEN_STORAGE);
}

function rmAuthInfo() {
    Cookies.remove(process.env.REACT_APP_USERNAME_STORAGE);
    Cookies.remove(process.env.REACT_APP_TOKEN_STORAGE);
}
const AuthHelper = {
    storeUser,
    getUsername,
    getAndConfirmToken,
    rmAuthInfo,
}

export default AuthHelper;