export default function Option({ idName, label="button", description="does something useful" }) {
    return (
        <div className="flex justify-between align-center w-full">
            <div className="text-glow font-french-canon text-xxxs">{description}</div>
            <div className="bg-border rounded-1/2 w-16 h-8 relative cursor-pointer">
                <input type="button" className="sr-only" id={idName} />
                <label htmlFor={idName} className="absolute inset-0"></label>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-auto font-bold text-secondary-1">{label}</span>
            </div>
        </div>
    );
}