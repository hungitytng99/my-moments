import UserApi from "api/UserApi";
import Footer from "components/Footer/Footer";
import FooterCategory from "constants/FooterCategory";
import DirectionBox from "custom-field/DirectionBox/DirectionBox";
import LoginForm from "../components/LoginForm";
import { addUser } from "../LoginSlice";
import "./LoginPage.scss"

function LoginPage() {
    const initialValues = {
        username: "",
        password: ""
    }
    const handleSubmit = async (values) => {
        // call API to auth user 
        try{
            const apiResponse = await UserApi.login(values);
            console.log(apiResponse);
        } catch(error){
            console.log("ERROR GET API.");
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