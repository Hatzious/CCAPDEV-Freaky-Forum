export default function Arrow({ direction = "up", color = "var(--color-upvote)" }) {
    return (
        <button 
            className="flex items-center justify-center bg-transparent border-none cursor-pointer outline-none w-6 h-6"
            aria-label={direction === "up" ? "Upvote" : "Downvote"}
        >
            <svg 
                width="16" 
                height="16" 
                viewBox="0 0 100 100" 
                className="block"
            >
                <polygon 
                    points={direction === "up" ? "50,15 100,95 0,95" : "0,5 100,5 50,85"} 
                    fill={color}
                />
            </svg>
        </button>
    );
}