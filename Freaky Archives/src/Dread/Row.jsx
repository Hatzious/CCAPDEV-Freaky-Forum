import { Link } from "react-router-dom";

export default function Row({ arr }) {
    if (!arr) {
        return (<Link to="/"><span className="text-white">Hi</span></Link>);
    }

    const cols = arr.length;

    return (
        <div className="grid gap-4 w-full" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
            {arr.map((imgSrc, index) => (
                <div key={index} className="border border-border p-2 bg-accent-dark-2">
                    <img src={imgSrc} alt={`Dread item ${index}`} />
                </div>
            ))}
        </div>
    );
}