export default function InputField({ label, type = "text", placeholder = "", className = "" }) {
    return (
        <div className={`relative ${className}`}>
            <label className="absolute -top-6 left-0 text-primary-1 text-small font-french-canon">
                {label}
            </label>
            <div className="relative">
                <input
                    type={type}
                    placeholder={placeholder}
                    className="w-full h-[40px] rounded-[5px] bg-primary-1 px-4 text-primary-2 font-rubik text-[15px] placeholder:text-primary-2 placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-primary-2 focus:ring-opacity-50"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    {/* Optional icon could go here */}
                </div>
            </div>
        </div>
    );
}