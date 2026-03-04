import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Global/Logo";
import Explayout from "../Contain/Explayout";
import Click from "../Global/Click";
import RegisterForm from "./RegisterForm";
import axios from "axios";
import CreateAccountClick from "./CreateAccountClick";

export default function Register() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [form, setForm] = useState({
        email: "",
        username: "",
        dob: "",
        password: "",
        rePassword: "",
    });

    const [hasSubmitted, setHasSubmitted] = useState(false);

    const emailInvalid = !form.email.trim();
    const usernameInvalid = !form.username.trim();
    const dobInvalid = !form.dob;
    const passwordInvalid = !form.password;
    const rePasswordInvalid = !form.rePassword;
    const passwordMismatch = form.password && form.rePassword && form.password !== form.rePassword;

    const handleChange = (field, value) => {
        setForm((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleCreateAccount = async() => {
        setHasSubmitted(true);
        setError("");

        if (emailInvalid || 
            usernameInvalid ||
            dobInvalid ||
            passwordInvalid || 
            rePasswordInvalid || 
            passwordMismatch) {
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', {
                email: form.email,
                username: form.username,
                password: form.password,
                dob: form.dob
            });

            // localStorage.setItem("authToken", "logged_in_user_" + Date.now());
            localStorage.setItem("authToken", response.data.token);
            // localStorage.setItem("username", form.username);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            localStorage.setItem("username", response.data.user.username);
            // localStorage.setItem("email", form.email);
            localStorage.setItem("email", response.data.user.email);

            navigate("/dread");

        } catch (err) {
            setError(err.response?.data?.msg || "Registration failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Explayout classes="justify-center pt-10">
            <div className="w-full flex justify-center">
                <img
                    src="/pic/card.png"
                    alt="card"
                    style={{ width: 336, height: 487, objectFit: "cover" }}
                />
                <div className="flex flex-col items-center gap-y-5">
                    <Logo size="text-medium" />

                    <div className="border border-primary-2 bg-accent-dark-1 rounded-sm px-24 py-8 w-full max-w-5xl">
                        <div className="text-center font-comforter text-l text-primary-2 mb-4">
                            Create Account
                        </div>

                        <div className="flex flex-row gap-x-8 items-start">

                            <div className="flex-1">
                                <RegisterForm 
                                    form={form} 
                                    handleChange={handleChange}
                                    emailError={hasSubmitted && emailInvalid ? "Email required" : ""}
                                    usernameError={hasSubmitted && usernameInvalid ? "Username required" : ""}
                                    dobError={hasSubmitted && dobInvalid ? "Date of Birth required" : ""}
                                    passwordError={hasSubmitted && passwordInvalid ? "Password required" : ""}
                                    rePasswordError={hasSubmitted && (rePasswordInvalid ? "Password confirmation required" : passwordMismatch ? "Passwords do not match" : "")}
                                />

                                <div className="flex justify-between mt-6">
                                    <Click to="/forum" label="Back" size="text-xxs" />
                                    {/* <Click onClick={handleCreateAccount} label="Create Account" size="text-sm" /> */}
                                    <CreateAccountClick handleCreateAccount={handleCreateAccount} loading={loading} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Explayout>
    );
}