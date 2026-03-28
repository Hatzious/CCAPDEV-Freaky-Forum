import { useState } from "react";
import Icon from "../Global/Icon";
import Titlebox from "../Forum/Titlebox";
import Vote from "../Forum/Vote";
import PostPreviewCard from "../Forum/PostPreviewCard";
import { prettyDate } from "../Services/function";

export default function Post({ data }) {
    const [isHovered, setIsHovered] = useState(false);

    if (!data) return null;

    const { 
        title, 
        summary, 
        author, 
        createdAt, 
        views, 
        score, 
        currentUserVote,
        tags 
    } = data;

    const postId = data._id || data.id; // Mongoose 'id' var issue fix

    const displayDate = prettyDate(createdAt);

    const username = author?.username || "Anonymous";
    const avatar = author?.profile?.avatarUrl || "/puppy.jpg";

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex flex-row bg-olive h-[16vh] w-[66vw] border-border border-post items-center py-1 px-6 gap-x-4">
                <Icon source={avatar} />
                <Titlebox id={postId} title={title} author={username} date={displayDate} tags={tags} />
                <Vote score={score} postId={postId} initialUserVote={currentUserVote} />
            </div>

            {isHovered && (
                <PostPreviewCard
                    title={title}
                    author={author.username}
                    date={displayDate}
                    views={views}
                    summary={summary}
                />
            )}
        </div>
    );
}