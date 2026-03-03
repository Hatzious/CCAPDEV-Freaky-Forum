export default function RegisterForm({ 
    form, 
    handleChange, 
    emailError, 
    usernameError, 
    dobError,
    passwordError, 
    rePasswordError }) {
    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-y-6"
        >
            <div>
                <input
                    type="text"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-primary-2 rounded-sm bg-primary-1 text-primary-2 placeholder-primary-2 placeholder-opacity-25 focus:outline-none focus:border-secondary-1 focus:shadow-lg focus:shadow-secondary-1"
                />
                {emailError && (
                    <p className="text-red-500 text-xxxxxs mt-1">
                        {emailError}
                    </p>
                )}
            </div>

            <div>
                <input
                    type="text"
                    value={form.username}
                    onChange={(e) => handleChange("username", e.target.value)}
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
                    type="date"
                    value={form.dob}
                    onChange={(e) => handleChange("dob", e.target.value)}
                    className="w-full px-4 py-3 border border-primary-2 rounded-sm bg-primary-1 text-primary-2 focus:outline-none focus:border-secondary-1 focus:shadow-lg focus:shadow-secondary-1"
                    />
                {dobError && (
                    <p className="text-red-500 text-xxxxxs mt-1">
                        {dobError}
                    </p>
                )}
                    
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
        </form>
    );
}

