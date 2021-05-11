import UserApi from "api/UserApi";
import Footer from "components/Footer/Footer";
import FooterCategory from "constants/FooterCategory";
import DirectionBox from "common-components/DirectionBox/DirectionBox";
import { useHistory } from "react-router";
import LoginForm from "../components/LoginForm";
import "./LoginPage.scss"
import AuthHelper from "helpers/AuthHelper";

function LoginPage() {
    const initialValues = {
        username: "",
        password: ""
    }
    console.log("Login Page");
    const history = useHistory();
    const errorAuthKey = "errorLogin";
    //handle after click SubmitBtn
    const handleSubmit = async (values, actions) => {
        try{
            // call API to auth user 
            const apiResponse = await UserApi.login(values);
            AuthHelper.storeUser(apiResponse);
            history.push('/');
        } catch(error){
            // when api is response error
            const errors = {}
            errors[errorAuthKey] = "Your username or password is incorrect. Please double check again.";
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