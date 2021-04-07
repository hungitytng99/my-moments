import Footer from "components/Footer/Footer";
import FooterCategory from "constants/FooterCategory";
import DirectionBox from "common-components/DirectionBox/DirectionBox";
import RegisterForm from "../components/RegisterForm";
import UserApi from "api/UserApi";

import "./RegisterPage.scss"
import { useHistory } from "react-router";

RegisterPage.defaultProps = {
}

function RegisterPage() {
    const history = useHistory();
    const initialValues = {
        email: "",
        fullname: "",
        username: "",
        password: "",
    }
    const HandleRegister = async (user) => {
        console.log("Submit register:  ", user);
        // call API to register user 
        try {
            const apiResponse = await UserApi.register(user);
            console.log(apiResponse);
            history.push('/login');
        } catch (error) {
            // const errors = {}
            // errors[errorAuthKey] = error;
            // actions.setErrors(errors);
            console.log("ERROR");
        }
    }
    return (
        <>
            <div className="register__page">
                <div className="register__page-text">Sign up</div>
                <div className="register__page-box">
                    <RegisterForm
                        initialValues={initialValues}
                        onSubmit={HandleRegister}
                    />
                </div>
                <div className="register__page-box --box-below">
                    <DirectionBox text="Have account? " link="Sign in" to="/login" />
                </div>
            </div>
            <div className="register__footer">
                <Footer category={FooterCategory.FOOTER_CATEGORY_LIST_1} />
            </div>
        </>
    )
}
export default RegisterPage;