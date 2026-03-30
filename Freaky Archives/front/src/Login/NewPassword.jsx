import Logo from "../Global/Logo";
import Explayout from "../Contain/Explayout";
import NewPasswordForm from "./NewPasswordForm";
import { useLocation, Navigate } from "react-router-dom";

export default function NewPassword() {
    const location = useLocation();
    const username = location.state?.username;

    if (!username) {
        return <Navigate to="/login" />
    }

    return (
        <Explayout classes="justify-center pt-16">
            <div className="w-full flex justify-center">
                <div className="flex flex-col items-center gap-y-5">
                    <Logo size="text-medium" />

                    <div className="border border-primary-2 bg-accent-dark-1 rounded-sm px-8 py-12 w-full max-w-xl">
                        <NewPasswordForm username={ username } />
                    </div>
                </div>
            </div>
        </Explayout>
    );
}