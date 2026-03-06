import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Global/Logo";
import Explayout from "../Contain/Explayout";
import Click from "../Global/Click";
import RegisterForm from "./RegisterForm";
import { useAuth } from "../Services/Auth";

export default function Register() {
    const { login } = useAuth();
    
    const handleRegister = async (username, email, password, dob) => {
        const userData = {
            username: username,
            email: email,
            password: password,
            dob: dob
        };

        try {
            const response = await fetch("http://localhost:5000/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(userData)
            });
            const data = await response.json();

            console.log("Response data:", data);

            if (response.ok) {        
                login(data.user);            
                return true;
            } 
            else {
                alert(data.message);
                return false;
            }

        } catch (error) {
            console.error("Error connecting to server:", error);
            return false;
        }
    };

    const navigate = useNavigate();

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

    const handleCreateAccount = async () => {
        setHasSubmitted(true);

        if (emailInvalid || 
            usernameInvalid ||
            dobInvalid ||
            passwordInvalid || 
            rePasswordInvalid || 
            passwordMismatch) {
            return;
        }

        const success = handleRegister(form.username, form.email, form.password, form.dob);

        if (success) {
            navigate("/dread");
        }
    };

    return (
        <Explayout classes="justify-center pt-10">
            <div className="w-full flex justify-center">
                {/* <img
                    src="/pic/card.png"
                    alt="card"
                    style={{ width: 336, height: 487, objectFit: "cover" }}
                /> */}
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
                                    <Click onClick={handleCreateAccount} label="Create Account" size="text-sm" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Explayout>
    );
}