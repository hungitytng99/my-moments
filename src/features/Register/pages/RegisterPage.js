import Footer from "components/Footer/Footer";
import FooterCategory from "constants/FooterCategory";
import DirectionBox from "common-components/DirectionBox/DirectionBox";
import RegisterForm from "../components/RegisterForm";
import "./RegisterPage.scss"

RegisterPage.defaultProps = {
}

function RegisterPage() {
    const initialValues = {
        email: "",
        fullname: "",
        username: "",
        password: "",

    }
    return (
        <>
            <div className="register__page">
                <div className="register__page-text">Sign up</div>
                <div className="register__page-box">
                    <RegisterForm
                        initialValues={initialValues}
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