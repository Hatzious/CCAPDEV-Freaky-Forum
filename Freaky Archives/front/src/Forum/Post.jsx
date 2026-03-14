import { useState } from "react";
import Icon from "../Global/Icon";
import Titlebox from "./Titlebox";
import Vote from "./Vote";
import PostPreviewCard from "./PostPreviewCard";

export default function Post({
    title = "Statement of Detective Alice Daisy Tonner, regarding a traffic stop...",
    author = "My Mom",
    date = "67/67/2067",
    views = 123,
    upvotes = 42,
    excerpt = "The sun had barely risen when the first sirens echoed through the quiet streets. Detective Tonner knew the night would be long, but she was prepared to follow every lead...",
}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex flex-row bg-olive h-[16vh] w-full border-border border-post items-center py-1 px-6 gap-x-4">
                <Icon />
                <Titlebox title={title} author={author} date={date} />
                <Vote />
            </div>

            {isHovered && (
                <PostPreviewCard
                    title={title}
                    author={author}
                    date={date}
                    views={views}
                    upvotes={upvotes}
                    excerpt={excerpt}
                />
            )}
        </div>
    );
}