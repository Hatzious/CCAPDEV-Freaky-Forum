import Click from "../Global/Click";

export default function LoginRegister() {
    return (
        <div className="flex flex-col gap-y-6">
            <div className="flex items-center gap-4 py-2">
                <div className="flex-1 border-t border-white"></div>
                <span className="text-primary-2 font-varela text-xxxxxs whitespace-nowrap">
                    You don't have an account?!
                </span>
                <div className="flex-1 border-t border-white"></div>
            </div>

            <div className="flex flex-row gap-4 justify-center">
                <Click 
                    label="View as Guest" 
                    to="/forum"
                    size="text-sm"
                />
                <Click 
                    label="Create Account" 
                    to="/register"
                    size="text-sm"
                />
            </div>
        </div>
    );
}
