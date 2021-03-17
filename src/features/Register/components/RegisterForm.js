import { Button } from "react-bootstrap";
import { css } from "@emotion/core";
import InputField from "custom-field/InputField/InputField";
import { FastField, Form, Formik } from "formik";
import ScaleLoader from "react-spinners/ScaleLoader";
import './RegisterForm.scss'

const override = css`
    margin: auto;
    & span{
        background-color: white;
    }
`;

function RegisterForm(props) {
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
                                name="email_phone"
                                component={InputField}
                                placeholder="Mobile number or email"
                            />
                            <FastField
                                name="fullname"
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
                    </>
                )
            }}
        </Formik>
    )
}
export default RegisterForm;