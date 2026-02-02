export default function Contain() {
    return (
        <div className="w-[911px] h-[418px] flex flex-col items-center justify-center">
            {/* Main title - "Freaky Archives" */}
            <div className="relative">
                <p className="text-secondary-1 text-xl font-comforter leading-none tracking-normal whitespace-nowrap">
                    Freaky Archives
                </p>
            </div>
            
            {/* Subtitle - "Make your statement. State your fear." */}
            <div className="mt-4 relative">
                <p className="text-primary-2 text-small font-french-canon tracking-normal whitespace-nowrap">
                    Make your statement. State your fear.
                </p>
            </div>
        </div>
    );
}