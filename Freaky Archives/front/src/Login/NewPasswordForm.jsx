import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Services/Auth";
import { API_BASE } from "../Services/api";

export default function NewPasswordForm({ username }) {
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    const passwordError = hasSubmitted && !password ? "Password required" : "";
    const rePasswordError = hasSubmitted && !rePassword ? "Re-enter your password" : hasSubmitted && password !== rePassword ? "Passwords do not match" : "";

    const isInvalid = !password || !rePassword || password !== rePassword;

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
        setHasSubmitted(true);

        if (isInvalid) return;

        try {
            const response = await fetch(`${API_BASE}/Auth/resetPassword`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ username, newPassword: password })
            });

            const data = await response.json();

            if (response.ok) {
                login(data.user);
                navigate("/forum");
            } else {
                alert(data.message || "Failed to reset password.");
            }
        } catch (err) {
            console.error("Error connecting to server:", err);
            alert("Network error while trying to reset password.");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">

            <div className="text-center font-scary text-medium text-primary-2">
                New Password for {username}
            </div>

            <div>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="New Password"
                    className="w-full px-4 py-3 border border-primary-2 rounded-sm bg-primary-1 text-primary-2 placeholder-primary-2 placeholder-opacity-25 focus:outline-none focus:border-secondary-1 focus:shadow-lg focus:shadow-secondary-1"
                />
                {passwordError && (
                    <p className="text-red-500 text-xxxxxs mt-1">
                        {passwordError}
                    </p>
                )}
            </div>

            <div>
                <input
                    type="password"
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                    placeholder="Re-enter Password"
                    className="w-full px-4 py-3 border border-primary-2 rounded-sm bg-primary-1 text-primary-2 placeholder-primary-2 placeholder-opacity-25 focus:outline-none focus:border-secondary-1 focus:shadow-lg focus:shadow-secondary-1"
                />
                {rePasswordError && (
                    <p className="text-red-500 text-xxxxxs mt-1">
                        {rePasswordError}
                    </p>
                )}
            </div>

            <button
                type="submit"
                disabled={isInvalid && hasSubmitted}
                className="inline-flex text-glow font-french-canon animate-pulse text-shadow-faint transition-all duration-300 ease-in-out hover:text-shadow-glow hover:brightness-300 hover:animate-none text-sm bg-olive border-none p-0 disabled:opacity-50 disabled:cursor-default"
            >
                Confirm & Login
            </button>
        </form>
    );
}