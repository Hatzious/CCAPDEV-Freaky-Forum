import { Link } from "react-router-dom";
import Familiar from "./Familiar";

export default function Middle({ arr1, arr2, onSelect }) {

    if (!arr1 || !arr2) {
        return (<Link to="/"><span className="text-white">Problem with component, return to welcome</span></Link>);
    }

    return (
        <div className="flex flex-row gap-x-7 items-center">
            {arr1.map((imgSrc, index) => (
                <div key={index} onClick={() => onSelect(imgSrc)} className="h-[17vh] w-[7vw] cursor-pointer">
                    <img src={imgSrc} alt={`Dread item ${index}`} />
                </div>
            ))} 

            <Familiar></Familiar>

            {arr2.map((imgSrc, index) => (
                <div key={index} onClick={() => onSelect(imgSrc)} className="h-[17vh] w-[7vw] cursor-pointer">
                    <img src={imgSrc} alt={`Dread item ${index}`} />
                </div>
            ))}
        </div>
    );
}