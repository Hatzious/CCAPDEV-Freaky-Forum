import Arrow from "./Arrow";
import VoteTrack from "./VoteTrack";

export default function Vote() {
    return (
        <div className="flex w-3/12 h-full flex-col items-end">
            <Arrow />
            <VoteTrack />
            <Arrow direction="down" color="var(--color-downvote)"/>
        </div>
    );
}