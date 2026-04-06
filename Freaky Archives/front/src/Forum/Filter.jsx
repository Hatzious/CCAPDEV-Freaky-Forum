import { useState } from "react";
import HoverBox from "../Global/HoverBox";

export default function Filter({ onFilter }) {
    const [showHoverBox, setShowHoverBox] = useState(false);

    return (
        <div onMouseEnter={() => setShowHoverBox(true)} onMouseLeave={() => setShowHoverBox(false)}
             className="flex justify-center items-center w-[6vw] h-[5vh] mb-5 -mt-5 bg-olive border border-border 
                        font-french-canon text-glow text-shadow-faint
                        hover:text-shadow-glow hover:brightness-90 duration-300
                        ">
            <span className="text-xxxs">Filter</span>
            {showHoverBox && (
                <HoverBox type="filter" onFilter={onFilter}/>                           
            )}
        </div>
    );
}

