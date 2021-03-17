import { Button } from "react-bootstrap";
import { css } from "@emotion/core";
import InputField from "custom-field/InputField/InputField";
import { FastField, Form, Formik } from "formik";
import ScaleLoader from "react-spinners/ScaleLoader";
import './LoginForm.scss'
import PropTypes from 'prop-types';

const override = css`
    margin: auto;
    & span{
        background-color: white;
    }
`;

LoginForm.propTypes = {
    initialValues : PropTypes.object,
}
LoginForm.defaultProps = {
    initialValues : {},
}

function LoginForm(props) {
    const { initialValues } = props;

    return (
        <Formik
            initialValues={initialValues}
        >
            {formikProps => {
                const { values, errors, touch, isSubmitting } = formikProps;
                const disabled = isSubmitting ? { disabled: true } : { disabled: false };
                const submitLoading = <ScaleLoader height="15" css={override} />
                const submitText = (
                    <div>
                        <span>Login</span>
                        <i className="login-icon fas fa-sign-in-alt"></i>
                    </div>
                );
                return (
                    <>
                        <Form>
                            <FastField
                                name="username"
                                component={InputField}
                                placeholder="Username or email"
                            />
                            <FastField
                                name="password"
                                component={InputField}
                                placeholder="Please enter password"
                                type="password"
                            />
                            <div className="form__btn-submit">
                                <Button variant="outline-light" type="submit" outline="fasle" {...disabled}>
                                    {isSubmitting ? submitLoading : submitText}
                                </Button>
                            </div>

                        </Form>
                        <div className="login__divider">OR</div>
                        <p className="other__login-text">with your social network</p>
                        <div className="other__login">
                            <button className="other__login-btn --fb">
                                <i className="other__login-icon fab fa-facebook-square"></i>
                                <span>Facebook</span>
                            </button>
                            <button className="other__login-btn --gg">
                                <i className="other__login-icon fab fa-google"></i>
                                <span>Google</span>
                            </button>
                        </div>

                    </>
                )
            }}
        </Formik>
    )
}
export default LoginForm;