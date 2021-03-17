import DirectionBox from "custom-field/DirectionBox/DirectionBox";
import LoginForm from "../components/LoginForm";
import "./LoginPage.scss"


function LoginPage() {
    const initialValues = {
        username: "",
        password: ""
    }
    return (
        <>
            <div className="login__page">
                <div className="login__page-text">Login</div>
                <div className="login__page-box">
                    <LoginForm
                        initialValues={initialValues}
                    />
                </div>
                <div className="login__page-box --box-below">
                    <DirectionBox text="Don't have account? " link="Sign up" to="/register"/>
                </div> 

            </div>
        </>
    )
}
export default LoginPage;