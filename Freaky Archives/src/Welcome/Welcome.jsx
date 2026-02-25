import Logo from "../Global/Logo";
import Click from "../Global/Click";
import Explayout from "../Contain/Explayout";

export default function Welcome() {
    return (
        <Explayout classes="items-center justify-center pb-8">
            <div className="flex flex-col items-center gap-y-1">
                <Logo size="text-l" />
                <Click label="Make your statement. Face your fear."
                size="text-xs" to="/dread"
                />
            </div>
        </Explayout>
    );
}