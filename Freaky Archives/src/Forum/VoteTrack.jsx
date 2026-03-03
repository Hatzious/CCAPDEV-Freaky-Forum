import { useState } from "react";

export default function VoteTrack({ initial=0 }) {
    const [score, useScore] = useState(initial);
    return (
        <button className="text-glow text-xxxxs w-7 flex pr-1 cursor-pointer">
            {score}
        </button>
    );
}