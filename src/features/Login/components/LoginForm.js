import { Button } from "react-bootstrap";
import { css } from "@emotion/core";
import InputField from "common-components/InputField/InputField";
import { FastField, Form, Formik } from "formik";
import ScaleLoader from "react-spinners/ScaleLoader";
import './LoginForm.scss'
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import ErrorMessage from "common-components/ErrorMessage/ErrorMessage";

const override = css`
    margin: auto;
    & span{
        background-color: white;
    }
`;

LoginForm.propTypes = {
    initialValues: PropTypes.object,
}
LoginForm.defaultProps = {
    initialValues: {},
}

function LoginForm(props) {
    const { initialValues, onSubmit, errorAuthKey } = props;
   
    const validateionSchema = Yup.object().shape({
        username: Yup.string().required('Please enter your username or email.'),
        password: Yup.string().required("Please enter the password."),
    });
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validateionSchema}
        >
            {formikProps => {
                const { isSubmitting, errors } = formikProps;
                const submitLoading = <ScaleLoader height="15px" css={override} />
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
                                <Button variant="outline-light" type="submit" outline="fasle" disabled={isSubmitting}>
                                    {isSubmitting ? submitLoading : submitText}
                                </Button>
                            </div>
                            <div className="flex-center">
                                <ErrorMessage errors={errors} name={errorAuthKey} hasTouched={false} />
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