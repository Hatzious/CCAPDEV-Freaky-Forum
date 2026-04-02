import Logo from "../Global/Logo";
import Click from "../Global/Click";
import EyesBlinking from "./EyesBlinking";
import Explayout from "../Contain/Explayout";

export default function Welcome() {
    return (
        <Explayout classes="items-center justify-center pb-8 h-full overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-32 opacity-20">
            {Array.from({ length: 512 }).map((_, index) => (
                <div key={index} className="col-span-1 row-span-1">
                    <EyesBlinking />
                </div>
            ))}
            </div>
            <div className="relative flex flex-col items-center gap-y-2 z-10">
                <Logo size="text-xl" />
                <Click label="Make your statement. Face your fear."
                size="text-small" to="/forum"
                />
            </div>
        </Explayout>
    );
}