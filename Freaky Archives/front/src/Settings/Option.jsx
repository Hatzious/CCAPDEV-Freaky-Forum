export default function Option({ idName, label="button", description="does something useful" }) {
    return (
        <div className="flex justify-between items-center w-full">
            <div className="text-glow font-french-canon text-xxxs">{description}</div>
            <div className="bg-border rounded-1/2 w-24 h-8 relative cursor-pointer flex items-center justify-center text-center">
                <input type="button" className="sr-only" id={idName} />
                <label htmlFor={idName} className="absolute inset-0"></label>
                <span className="text-auto font-bold text-secondary-1">{label}</span>
            </div>
        </div>
    );
}