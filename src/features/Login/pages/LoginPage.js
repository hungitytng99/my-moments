import UserApi from "api/UserApi";
import Footer from "components/Footer/Footer";
import FooterCategory from "constants/FooterCategory";
import DirectionBox from "common-components/DirectionBox/DirectionBox";
import { useHistory } from "react-router";
import LoginForm from "../components/LoginForm";
import "./LoginPage.scss"
import { addUser, deleteUser } from "../LoginSlice";
import { useDispatch } from "react-redux";

function LoginPage() {
    const initialValues = {
        username: "",
        password: ""
    }
    const history = useHistory();
    const dispatch = useDispatch();
    const errorAuthKey = "errorLogin";
    //remove user info in global state
    dispatch(deleteUser());
    //handle after click SubmitBtn
    const handleSubmit = async (values, actions) => {
        try{
            // call API to auth user 
            const apiResponse = await UserApi.login(values);
            // save user to local storage
            localStorage.setItem(process.env.REACT_APP_TOKEN_STORAGE,apiResponse.token);
            localStorage.setItem(process.env.REACT_APP_USERNAME_STORAGE,apiResponse.username);
            // save user to global state - redux
            dispatch(addUser(apiResponse));
            // redirect to home page
            history.push('/');
        } catch(error){
            // when api is response error
            const errors = {}
            errors[errorAuthKey] = error;
            actions.setErrors(errors);
        }
        
    }
    return (
        <>
            <div className="login__page">
                <div className="login__page-text">Login</div>
                <div className="login__page-box">
                    <LoginForm
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        errorAuthKey={errorAuthKey}
                    />
                </div>
                <div className="login__page-box --box-below">
                    <DirectionBox text="Don't have account? " link="Sign up" to="/register"/>
                </div> 
            </div>
            <div className="login__footer">
                <Footer category={FooterCategory.FOOTER_CATEGORY_LIST_1}/>
            </div>
        </>
    )
}
export default LoginPage;