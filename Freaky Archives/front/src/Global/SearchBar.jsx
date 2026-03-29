import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SearchBar({ onClose, classes = "visible" }) {
    const navigate = useNavigate();
    const [input, setInput] = useState('');

    const handleEnter = (e) => {
        if (e.key === 'Enter' && input.trim()) {
            navigate(`/search?q=${encodeURIComponent(input.trim())}`);

            if (onClose) onClose();
        }
    };

    const HoverStyles = ` -ml-10 flex z-2 w-150 h-10 bg-olive border-1 border-solid border-border 
                         items-center justify-center top-full right-0 blur-none`;

    return (
        <div className="flex items-center gap-2">
            <div className={`${classes} ${HoverStyles}`}>
                <input autoFocus
                    type="text"
                    placeholder="Search forums. Press Enter to search..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleEnter}
                    className="search-input w-140 outline-none text-glow font-french-canon bg-transparent" 
                />
            </div>
            <button onClick={onClose} className="text-glow font-french-canon cursor-pointer px-2 hover:text-shadow-glow">
                X
            </button>
        </div>
    );
}