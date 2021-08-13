/*
|--------------------------------------------------------------------------
| Login View.
|--------------------------------------------------------------------------
|
| The view where a user can log in. Redux is used to make the api call.
|
*/

import React, { ReactElement, useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "@/store/auth/authActions";
import { UserValidator } from "@/services/UserValidator";
import { TextInput } from "@/components/Form/FormElement";
import { PrimaryButton } from "@/components/Button/Button";
import { Alert } from "@/components/Alert/Alert";
import { useRouter } from "next/router";
import Link from "next/link";
import { SmallSpinner } from "@/components/Spinner/Spinner";

const Login = (props: any): ReactElement => {
    /**
     * The state.
     */
    const [formData, setFormData] = useState<{
        email: string;
        password: string;
        emailError: string;
        passwordError: string;
    }>({
        email: "",
        password: "",
        emailError: "",
        passwordError: "",
    });

    // The router object used for redirecting after login.
    const router = useRouter();

    // Redirect to user home route if user is authenticated.
    useEffect(() => {
        if (props.isAuthenticated && !props.loading) {
            router.push(process.env.NEXT_PUBLIC_USER_HOME_ROUTE);
        }
    }, [props.isAuthenticated, props.loading]);

    /**
     * Handle input change.
     *
     * @param {object} e
     *   The event object.
     */
    const handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.name]: e.currentTarget.value,
            emailError: "",
            passwordError: "",
        });
    };

    /**
     * Submit the form.
     */
    const submit = (): Promise<void> => {
        const userValidator: UserValidator = new UserValidator();
        const { email, password } = formData;

        // Check for valid email address.
        const isEmailValid: boolean = userValidator.validateEmail(email);
        if (!isEmailValid) {
            setFormData({
                ...formData,
                emailError: "Please provide a valid email address",
            });
            return;
        }

        // Check for valid password.
        if (!password) {
            setFormData({
                ...formData,
                passwordError: "Please provide a valid password",
            });
            return;
        }

        // Make API call if everything is fine.
        props.login(email, password);
    };

    // Return statement.
    return (
        <div className="app-login-card">
            {props.loginError && (
                <Alert type="danger">{props.loginError}</Alert>
            )}
            {/* The main Header */}
            <div className="app-header">
                <h3 className="title">تسجيل الدخول</h3>
            </div>
            {/* Email */}
            <label className="label-name" htmlFor="">البريد الإلكتروني</label>

            <TextInput
                type="text"
                value={formData.email}
                placeholder="البريد الإلكتروني"
                onChange={(e) => {
                    handleInputChange(e);
                }}
                name="email"
                errorMsg={formData.emailError}
            />
            <label className="label-name" htmlFor="">كلمة المرور</label>
            {/* Password */}
            <TextInput
                type="password"
                value={formData.password}
                placeholder="كلمة المرور"
                onChange={(e) => {
                    handleInputChange(e);
                }}
                name="password"
                errorMsg={formData.passwordError}
            />

            {/* Submit Button */}
            <PrimaryButton
                onClick={() => {
                    submit();
                }}
                additionalClasses="butt-sm"
            >
                <SmallSpinner show={props.loading} />
                            تسجيل الدخول
            </PrimaryButton>

            {/* Additional links. */}
            <div className="d-flex justify-content-between mt-3 app-login-footer">
                <Link href="/user/register">
                    <a className="">
                        لا أملك حساب
                    </a>
                </Link>
                <Link href="/user/password/forgot">
                    <a className="">
                        نسيت كلمة المرور
                    </a>
                </Link>
            </div>
        </div>
    );
};

// Map redux states to local component props.
const mapStateToProps = (state: any) => ({
    isAuthenticated: state.auth.isAuthenticated,
    loginError: state.auth.loginError,
    loading: state.auth.loginLoading,
});

// Define PropTypes.
Login.propTypes = {
    props: PropTypes.object,
    login: PropTypes.func,
};

export default connect(mapStateToProps, { login })(Login);
