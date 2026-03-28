import Arrow from "./Arrow";
import VoteTrack from "./VoteTrack";
import { useState, useEffect } from "react";

export default function Vote({ score=0, postId="", initialUserVote=0 }) {
    const [currentScore, setCurrentScore] = useState(score);
    const [userVote, setUserVote] = useState(initialUserVote);
    useEffect(() => {
        setCurrentScore(score);
        setUserVote(initialUserVote);
    }, [score, initialUserVote]);
    return (
        <div className="flex grow-2 h-full flex-col items-end justify-center">
            <Arrow postId={postId} active={userVote === 1}
                    onVoteSuccess={(newScore, newUserVote) => {
                    setCurrentScore(newScore);
                    setUserVote(newUserVote);
                }}/>
            <VoteTrack initial={currentScore} />
            <Arrow direction="down" color="var(--color-downvote)" postId={postId} active={userVote === -1}
                    onVoteSuccess={(newScore, newUserVote) => {
                    setCurrentScore(newScore, newUserVote);
                }}/>
        </div>
    );
}