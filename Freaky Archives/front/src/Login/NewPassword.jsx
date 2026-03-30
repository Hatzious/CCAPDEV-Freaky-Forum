import Logo from "../Global/Logo";
import Explayout from "../Contain/Explayout";

export default function NewPassword() {
    return (
        <Explayout classes="justify-center pt-16">
            <div className="w-full flex justify-center">
                <div className="flex flex-col items-center gap-y-5">
                    <Logo size="text-medium" />

                    <div className="border border-primary-2 bg-accent-dark-1 rounded-sm px-8 py-12 w-full max-w-xl">
                        <NewPasswordForm />
                    </div>
                </div>
            </div>
        </Explayout>
    );
}