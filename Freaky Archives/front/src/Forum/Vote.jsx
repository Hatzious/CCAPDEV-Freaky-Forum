import Arrow from "./Arrow";
import VoteTrack from "./VoteTrack";

export default function Vote({ score=0 }) {
    return (
        <div className="flex grow-2 h-full flex-col items-end justify-center">
            <Arrow />
            <VoteTrack initial={score} />
            <Arrow direction="down" color="var(--color-downvote)"/>
        </div>
    );
}