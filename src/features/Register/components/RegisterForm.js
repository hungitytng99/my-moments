import { Button } from "react-bootstrap";
import { css } from "@emotion/core";
import InputField from "common-components/InputField/InputField";
import { FastField, Form, Formik } from "formik";
import ScaleLoader from "react-spinners/ScaleLoader";
import './RegisterForm.scss'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import * as Yup from 'yup';

const override = css`
    margin: auto;
    & span{
        background-color: white;
    }
`;
RegisterForm.ProtoTypes = {
    initialValues : PropTypes.object,
}
RegisterForm.defaultProps = {
    initialValues : "",
}

function RegisterForm(props) {
    const { initialValues } = props;
    const validateionSchema = Yup.object().shape({
        email: Yup.string().email('Please enter a valid email address').required('Please enter your email.'),
        fullName: Yup.string().required("Please enter your fullname."),
        username: Yup.string().required("Please enter your username."),
        password: Yup.string().required("Please enter your password.").min(8,"Your password must contain at least 8 characters.")
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validateionSchema}
            onSubmit = {props.onSubmit}
        >
            {formikProps => {
                const { isSubmitting } = formikProps;
                const disabled = isSubmitting ? { disabled: true } : { disabled: false };
                const submitLoading = <ScaleLoader height="15" css={override} />
                const submitText = (
                    <div>
                        <span>Register</span>
                    </div>
                );
                return (
                    <>
                        <div className="register_text">
                            <span>Register to keep your moments</span>
                            <i className="heart-icon fas fa-heart"></i>
                        </div>
                        <Form>
                            <FastField
                                name="email"
                                component={InputField}
                                placeholder="Email address"
                            />
                            <FastField
                                name="fullName"
                                component={InputField}
                                placeholder="Full name"
                            />
                            <FastField
                                name="username"
                                component={InputField}
                                placeholder="Username"
                            />
                            <FastField
                                name="password"
                                component={InputField}
                                placeholder="Password"
                                type="password"
                            />
                            <div className="form__btn-submit">
                                <Button variant="outline-light" type="submit" outline="fasle" {...disabled}>
                                    {isSubmitting ? submitLoading : submitText}
                                </Button>
                            </div>
                        </Form>
                        <div className="policy_register">
                            By signing up, you agree to our <Link to="#">Terms</Link>, <Link to="#">Data Policy</Link>  and <Link to="#">Cookies Policy</Link>.
                        </div>
                    </>
                )
            }}
        </Formik>
    )
}
export default RegisterForm;