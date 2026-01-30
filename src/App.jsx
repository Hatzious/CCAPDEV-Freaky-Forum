export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 p-4">
      
      {/* Login Card */}
      <div className="w-full max-w-md bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
        
        {/* Header */}
        <div className="p-8 pb-0">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-slate-400">Please sign in to continue.</p>
        </div>

        {/* Form Container */}
        <div className="p-8 space-y-6">
          
          {/* Email Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Email</label>
            <input 
              type="email" 
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          {/* Sign In Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-[1.02]">
            Sign In
          </button>
          
          {/* Footer Link */}
          <p className="text-center text-slate-500 text-sm">
            Don't have an account? <a href="#" className="text-blue-400 hover:underline">Sign up</a>
          </p>

        </div>
      </div>
    </div>
  )
}