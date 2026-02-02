import InputField from "./InputField.jsx";

export default function LoginContainer() {
    return (
        <div className="w-[572px] min-h-[467px] bg-accent-dark-1 border-2 border-primary-2 rounded-lg p-8 relative">
            {/* Login Account Title */}
            <div className="mb-8">
                <h2 className="text-primary-2 text-l font-comforter text-center">
                    Login Account
                </h2>
            </div>
            
            {/* Username Field */}
            <div className="mb-6">
                <InputField 
                    label="Username" 
                    type="text"
                    placeholder="Enter your username"
                />
            </div>
            
            {/* Password Field */}
            <div className="mb-4">
                <InputField 
                    label="Password" 
                    type="password"
                    placeholder="Enter your password"
                />
            </div>
            
            {/* Forgot Password Link */}
            <div className="mb-8">
                <a href="#" className="text-primary-1 text-small font-french-canon hover:text-primary-2 transition-colors">
                    Forgot Password?
                </a>
            </div>
            
            {/* Sign In Button */}
            <div className="flex justify-center mb-8">
                <button className="bg-accent-dark-3 text-primary-2 text-medium font-island px-8 py-3 rounded-[5px] border-2 border-primary-2 hover:bg-accent-dark-2 transition-colors">
                    Sign In
                </button>
            </div>
            
            {/* Divider with text */}
            <div className="relative flex items-center justify-center mb-8">
                <div className="flex-grow border-t-2 border-primary-2"></div>
                <span className="mx-4 text-primary-2 text-xs font-varela whitespace-nowrap">
                    You don't have an account?
                </span>
                <div className="flex-grow border-t-2 border-primary-2"></div>
            </div>
            
            {/* Bottom buttons */}
            <div className="flex justify-between">
                <button className="bg-accent-dark-3 text-primary-2 text-medium font-island px-6 py-3 rounded-[5px] border-2 border-primary-2 w-[210px] hover:bg-accent-dark-2 transition-colors">
                    View as Guest
                </button>
                
                <button className="bg-accent-dark-3 text-primary-2 text-medium font-island px-6 py-3 rounded-[5px] border-2 border-primary-2 w-[210px] hover:bg-accent-dark-2 transition-colors">
                    Create Account
                </button>
            </div>
        </div>
    );
}