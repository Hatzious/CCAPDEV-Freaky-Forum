import Arrow from "./Arrow";
import VoteTrack from "./VoteTrack";
import { useState, useEffect } from "react";

export default function Vote({ score = 0, postId = "", initialUserVote = 0 }) {
    const [currentScore, setCurrentScore] = useState(score);
    const [userVote, setUserVote] = useState(initialUserVote);

    // Sync with props if they change (e.g., navigating to a new post)
    useEffect(() => {
        setCurrentScore(score);
        setUserVote(initialUserVote);
    }, [score, initialUserVote]);

    const handleUpdate = (newScore, newUserVote) => {
        setCurrentScore(newScore);
        setUserVote(newUserVote);
    };

    return (
        <div className="flex grow-2 h-full flex-col items-end justify-center">
            {/* active is true only if userVote is 1 */}
            <Arrow 
                postId={postId} 
                active={userVote === 1} 
                onVoteSuccess={handleUpdate}
            />

            <VoteTrack initial={currentScore} />

            {/* active is true only if userVote is -1 */}
            <Arrow 
                direction="down" 
                color="var(--color-downvote)" 
                postId={postId} 
                active={userVote === -1} 
                onVoteSuccess={handleUpdate}
            />
        </div>
    );
}