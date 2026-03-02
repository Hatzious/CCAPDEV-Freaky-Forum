export default function LoginForm({
    username,
    password,
    usernameError,
    passwordError,
    onUsernameChange,
    onPasswordChange,
    onForgotPassword,
    onSignIn,
    disableSignIn,
}) {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSignIn();
            }}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    e.preventDefault();
                    onSignIn();
                }
            }}
            className="flex flex-col gap-y-6"
        >
            <div className="text-center font-comforter text-l text-primary-2">
                Login Account
            </div>

            <div>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => onUsernameChange(e.target.value)}
                    placeholder="Username"
                    className="w-full px-4 py-3 border border-primary-2 rounded-sm bg-primary-1 text-primary-2 placeholder-primary-2 placeholder-opacity-25 focus:outline-none focus:border-secondary-1 focus:shadow-lg focus:shadow-secondary-1"
                />
                {usernameError && (
                    <p className="text-red-500 text-xxxxxs mt-1">
                        {usernameError}
                    </p>
                )}
            </div>

            <div>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => onPasswordChange(e.target.value)}
                    placeholder="Password"
                    className="w-full px-4 py-3 border border-primary-2 rounded-sm bg-primary-1 text-primary-2 placeholder-primary-2 placeholder-opacity-25 focus:outline-none focus:border-secondary-1 focus:shadow-lg focus:shadow-secondary-1"
                />
                {passwordError && (
                    <p className="text-red-500 text-xxxxxs mt-1">
                        {passwordError}
                    </p>
                )}
            </div>

            <div
                onClick={onForgotPassword}
                className="text-left text-primary-1 font-french-canon cursor-pointer hover:text-green-500 transition-colors"
            >
                Forgot Password?
            </div>

            <button
                type="submit"
                disabled={disableSignIn}
                className="inline-flex text-glow font-french-canon animate-pulse text-shadow-faint transition-all duration-300 ease-in-out hover:text-shadow-glow hover:brightness-300 hover:animate-none text-sm bg-olive border-none p-0 disabled:opacity-50 disabled:cursor-default"
            >
                Sign In
            </button>
        </form>
    );
}