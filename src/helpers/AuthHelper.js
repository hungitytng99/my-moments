import Cookies from "js-cookie";

function setUser(apiResponse){
    console.log("save User to cookie");
    Cookies.set(process.env.REACT_APP_TOKEN_STORAGE, apiResponse.token, { expires: 90 });
    Cookies.set(process.env.REACT_APP_USERNAME_STORAGE, apiResponse.username, { expires: 90 });
}

function getUsername(){
    return Cookies.get(process.env.REACT_APP_USERNAME_STORAGE);
} 
function getAndConfirmToken(){
    return Cookies.get(process.env.REACT_APP_TOKEN_STORAGE);
}
function rmAuthInfo(){
    Cookies.remove(process.env.REACT_APP_USERNAME_STORAGE);
    Cookies.remove(process.env.REACT_APP_TOKEN_STORAGE);
}
const AuthHelper = {
    setUser,
    getUsername,
    getAndConfirmToken,
    rmAuthInfo,
}

export default AuthHelper;