
export default function NewPasswordForm() {
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
                Forgot Password
            </div>

            <div>
                <input
                    type="password"
                    value={form.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                    placeholder="Password"
                    className="w-full px-4 py-3 border border-primary-2 rounded-sm bg-primary-1 text-primary-2 placeholder-primary-2 placeholder-opacity-25 focus:outline-none focus:border-secondary-1 focus:shadow-lg focus:shadow-secondary-1"
                />
                {passwordError && (
                    <p className="text-red-500 text-xxxxxs mt-1">
                        {passwordError}
                    </p>
                )}
            </div>

            <div>
                <input
                    type="password"
                    value={form.rePassword}
                    onChange={(e) => handleChange("rePassword", e.target.value)}
                    placeholder="Re-enter Password"
                    className="w-full px-4 py-3 border border-primary-2 rounded-sm bg-primary-1 text-primary-2 placeholder-primary-2 placeholder-opacity-25 focus:outline-none focus:border-secondary-1 focus:shadow-lg focus:shadow-secondary-1"
                />
                {rePasswordError && (
                    <p className="text-red-500 text-xxxxxs mt-1">
                        {rePasswordError}
                    </p>
                )}
            </div>

            <button
                type="submit"
                disabled={disableSignIn}
                className="inline-flex text-glow font-french-canon animate-pulse text-shadow-faint transition-all duration-300 ease-in-out hover:text-shadow-glow hover:brightness-300 hover:animate-none text-sm bg-olive border-none p-0 disabled:opacity-50 disabled:cursor-default"
                onClick={handleSignIn}
            >
                Sign In
            </button>
        </form>
    );
}