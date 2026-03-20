import { Link } from "react-router-dom";
import Familiar from "./Familiar";

export default function Middle({ arr1, arr2, onSelect }) {

    if (!arr1 || !arr2) {
        return (<Link to="/"><span className="text-white">Problem with component, return to welcome</span></Link>);
    }

    const playAudio = () => {
        const cardAudio = new Audio("/audio/card-picked.mp3");

        cardAudio.play().catch(err => {
            console.warn("Audio playback was prevented:", err);
        });
    };

    return (
        <>
        <div className="flex flex-row gap-x-24">
            <div className="flex flex-row gap-x-24 -mt-4 -mb-4 items-center">
                {arr1.map((imgSrc, index) => (
                    <div key={index} onMouseEnter={playAudio} onClick={() => onSelect(imgSrc)} className="h-[18vh] w-[9vw] cursor-pointer">
                        <img className="hover:scale-110 transition-transform duration-200" src={imgSrc} alt={`Dread item ${index}`} />
                    </div>
                ))}
            </div>
            
            <Familiar></Familiar>
            
            <div className="flex flex-row gap-x-24 -mt-4 -mb-4 items-center">
                    {arr2.map((imgSrc, index) => (
                        <div key={index} onMouseEnter={playAudio} onClick={() => onSelect(imgSrc)} className="h-[18vh] w-[9vw] cursor-pointer">
                            <img className="hover:scale-110 transition-transform duration-200" src={imgSrc} alt={`Dread item ${index}`} />
                        </div>
                    ))}
            </div>
        </div>
        </>
    );
}