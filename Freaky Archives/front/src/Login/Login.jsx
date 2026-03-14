import { useState } from "react";
import Logo from "../Global/Logo";
import Explayout from "../Contain/Explayout";
import LoginForm from "./LoginForm";
import LoginRegister from "./LoginRegister";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const usernameInvalid = !username.trim();
    const passwordInvalid = !password;
    const isInvalid = usernameInvalid || passwordInvalid;

    const signIn = async () => {
        const userData = {
            username: username,
            password: password
        };

        try {
            const response = await fetch("http://localhost:5000/api/Login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(userData)
            });
            const data = await response.json();
            console.log("Response data:", data);

            setHasSubmitted(true);

            if (isInvalid) {
                return;
            }

            console.log("Log in:", { username, password });
        } catch (err) {
            console.error("Error logging in:", err);
            return;
        }  
    };

    const forgotPassword = () => {
        console.log("forgot password clicked");
    };

    return (
        <Explayout classes="justify-center pt-16">
            <div className="w-full flex justify-center">
                <div className="flex flex-col items-center gap-y-5">
                    <Logo size="text-medium" />

                    <div className="border border-primary-2 bg-accent-dark-1 rounded-sm px-8 py-12 w-full max-w-xl">
                        <LoginForm
                            username={username}
                            password={password}
                            usernameError={
                                hasSubmitted && usernameInvalid ? "Username required" : ""
                            }
                            passwordError={
                                hasSubmitted && passwordInvalid ? "Password required" : ""
                            }
                            onUsernameChange={setUsername}
                            onPasswordChange={setPassword}
                            onForgotPassword={forgotPassword}
                            onSignIn={signIn}
                            disableSignIn={isInvalid}
                        />

                        <LoginRegister />
                    </div>
                </div>
            </div>
        </Explayout>
    );
}