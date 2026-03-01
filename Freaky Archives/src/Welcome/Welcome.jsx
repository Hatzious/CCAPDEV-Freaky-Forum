import Logo from "../Global/Logo";
import Click from "../Global/Click";
import Explayout from "../Contain/Explayout";

export default function Welcome() {
    return (
        <Explayout classes="items-center justify-center pb-8">
            <div className="flex flex-col items-center gap-y-2">
                <Logo size="text-xl" />
                <Click label="Make your statement. Face your fear."
                size="text-small" to="/postview"
                />
            </div>
        </Explayout>
    );
}