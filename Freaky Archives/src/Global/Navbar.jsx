import Logo from "./Logo";
import Click from "./Click";
import Icon from "./Icon";
import HoverBox from "./HoverBox";
import { useState } from "react";


export default function Navbar() {
    const [showHoverBox, setShowHoverBox] = useState(false);

    return (
        <nav className="absolute fixed top-0 left-0 w-full bg-olive border-b border-border 
                        flex items-center px-8 h-[10vh] z-10 justify-between">
                  
            <div className="flex justify-start">
                <Logo size="text-normal" />
            </div>
           
            <div className="flex-none flex justify-center gap-24">
                <Click label="FORUM" />
                <Click label="SEARCH" />
            </div>

            <div className="flex justify-end relative"
                 onMouseEnter={() => setShowHoverBox(true)}
                 onMouseLeave={() => setShowHoverBox(false)}>
                <Icon 
                    classes="cursor-pointer transition-all ease-in-out
                             hover:bg-hover hover:animate-none hover:border-white"
                />
                {showHoverBox && (
                    <div>
                        <HoverBox />
                    </div>
                )}
            </div>
        </nav>
    );
}