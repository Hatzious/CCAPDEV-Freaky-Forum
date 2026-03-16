import { useSwipeable } from "react-swipeable";
import Post from "./Post";

export default function SwipePost({ post, onDelete }) {

    const handlers = useSwipeable({
        onSwipedLeft: () => onDelete(post._id),
        trackMouse: true,
        preventScrollOnSwipe: true
    });

    return (
        <div {...handlers}>
            <Post data={post} />
        </div>
    );
}