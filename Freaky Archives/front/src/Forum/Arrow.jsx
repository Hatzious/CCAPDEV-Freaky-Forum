import { useState } from "react";
import { API_BASE } from "../Services/api";

export default function Arrow({ direction = "up", color = "var(--color-upvote)", postId="", onVoteSuccess, active }) {
    const [isActive, setIsActive] = useState(false);

    const handleVote = async () => {
        try {
            const action = direction === "up" ? 1 : -1;
            const response = await fetch(`${API_BASE}/Poster/vote`, {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    voteValue: action,
                    postId: postId 
                })
            });

            if (response.ok) {
                setIsActive(!isActive);
                const data = await response.json();
                onVoteSuccess(data.changes.score, data.changes.userVote);
                console.log("Front end success calling vote: " + data.message + data.changes.score + data.changes.userVote);
            }

        } catch (error) {
            console.log("Front end there was a problem with vote: " + error.message);
        }
    }
    return (
        <button 
            className="flex items-center justify-center bg-transparent border-none cursor-pointer outline-none h-12"
            aria-label={direction === "up" ? "Upvote" : "Downvote"}
            onClick={handleVote}
        >
            <svg 
                width="60" 
                height="60" 
                viewBox="10 -10 80 120" 
                className="block"
            >
                <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                    <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                </defs>
                
                <polygon 
                    points={direction === "up" ? "50,45 100,95 0,95" : "0,5 100,5 50,55"} 
                    fill={color}
                    filter={active ? "url(#glow)" : "none"}
                    className={active ? "stroke-glow" : ""}
                />
            </svg>
        </button>
    );
}