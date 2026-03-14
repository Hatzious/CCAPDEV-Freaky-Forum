import { useState } from "react";
import Icon from "../Global/Icon";
import Titlebox from "./Titlebox";
import Vote from "./Vote";
import PostPreviewCard from "./PostPreviewCard";
import { prettyDate } from "../Services/function";

export default function Post({ data }) {
    const [isHovered, setIsHovered] = useState(false);

    const { 
        title, 
        author, 
        createdAt, 
        views, 
        score, 
        content,
        tags 
    } = data;

    const displayDate = prettyDate(createdAt);

    const username = author?.username || "Anonymous";
    const avatar = author?.profile?.avatarUrl || "/pic/puppy.jpg";

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex flex-row bg-olive h-[16vh] w-[66vw] border-border border-post items-center py-1 px-6 gap-x-4">
                <Icon source={avatar} />
                <Titlebox title={title} author={username} date={displayDate} tags={tags} />
                <Vote />
            </div>

            {isHovered && (
                <PostPreviewCard
                    title={title}
                    author={author}
                    date={displayDate}
                    views={views}
                />
            )}
        </div>
    );
}