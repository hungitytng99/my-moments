import UserApi from "api/UserApi";
import Footer from "components/Footer/Footer";
import FooterCategory from "constants/FooterCategory";
import DirectionBox from "custom-field/DirectionBox/DirectionBox";
import { useHistory } from "react-router";
import LoginForm from "../components/LoginForm";
import "./LoginPage.scss"

function LoginPage() {
    const initialValues = {
        username: "",
        password: ""
    }
    const history = useHistory();
    const errorAuthKey = "errorLogin";
    const handleSubmit = async (values, actions) => {
        // call API to auth user 
        try{
            const apiResponse = await UserApi.login(values);
            console.log(apiResponse);
            history.push('/');
        } catch(error){
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