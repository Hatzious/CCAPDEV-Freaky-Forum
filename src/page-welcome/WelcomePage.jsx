import Contain from "./Contain.jsx";
import Background from "./Background.jsx";
import Topbar from "./Topbar.jsx";

export default function WelcomePage() {
    return (
        <div className="min-h-dvh flex items-center justify-center relative">
            <Background />
            <Topbar />
            <Contain />
        </div>
    );
}