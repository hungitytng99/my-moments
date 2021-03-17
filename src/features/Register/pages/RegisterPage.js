import DirectionBox from "custom-field/DirectionBox/DirectionBox";
import RegisterForm from "../components/RegisterForm";
import "./RegisterPage.scss"

RegisterPage.defaultProps = {
}

function RegisterPage() {
    const initialValues = {
        email_phone: "",
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
                    <DirectionBox text="Have account? " link="Sign in" to="/login"/>
                </div> 

            </div>
        </>
    )
}
export default RegisterPage;