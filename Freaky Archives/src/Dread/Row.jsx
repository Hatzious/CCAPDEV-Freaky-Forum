import { Link } from "react-router-dom";

export default function Row({ arr }) {
    if (!arr) {
        return (<Link to="/"><span className="text-white">Problem with component, return to welcome</span></Link>);
    }

    const cols = arr.length;

    return (
        <div className="grid gap-x-7" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
            {arr.map((imgSrc, index) => (
                <div key={index} className="h-[20vh] w-[8vw]">
                    <img src={imgSrc} alt={`Dread item ${index}`} />
                </div>
            ))}
        </div>
    );
}