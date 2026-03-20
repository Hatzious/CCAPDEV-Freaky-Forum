import { Link } from "react-router-dom";

export default function Row({ arr, onSelect }) {
    if (!arr) {
        return (<Link to="/"><span className="text-white">Problem with component, return to welcome</span></Link>);
    }

    const playAudio = () => {
        const cardAudio = new Audio("/audio/card-picked.mp3");

        cardAudio.play().catch(err => {
            console.warn("Audio playback was prevented:", err);
        });
    };

    const cols = arr.length;

    return (
        <div className="grid gap-x-16" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
            {arr.map((imgSrc, index) => (
                <div key={index} onMouseEnter={playAudio} onClick={() => onSelect(imgSrc)} className="h-[18vh] w-[9vw] cursor-pointer">
                    <img className="hover:scale-110 transition-transform duration-200" src={imgSrc} alt={`Dread item ${index}`} />
                </div>
            ))}
        </div>
    );
}