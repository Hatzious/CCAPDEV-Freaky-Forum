import Contain from "./Contain.jsx";
import Circle from "./Circle.jsx";
import Background from "./Background.jsx";

export default function WelcomePage() {
    return (
        <div className="min-h-dvh flex items-center justify-center relative">
            <Background />
            <Circle />
            <Contain />
        </div>
    );
}