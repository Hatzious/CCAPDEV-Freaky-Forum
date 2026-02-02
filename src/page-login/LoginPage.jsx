import LoginContainer from "./LoginContainer.jsx";
import Background from "./Background.jsx";

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center relative">
            {/* Background gradient */}
            <Background />
            
            {/* Freaky Archives Title */}
            <div className="mb-12">
                <h1 className="text-secondary-1 text-xl font-comforter text-center">
                    Freaky Archives
                </h1>
            </div>
            
            {/* Login Container */}
            <LoginContainer />
        </div>
    );
}