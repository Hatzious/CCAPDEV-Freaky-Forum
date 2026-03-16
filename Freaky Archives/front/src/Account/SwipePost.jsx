import { useSwipeable } from "react-swipeable";
import Post from "../Post/Post";

export default function SwipePost({ post, onDelete, canDelete }) {

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            if (canDelete) {
                onDelete(post._id);
            }
        },
        trackMouse: true,
        preventScrollOnSwipe: true
    });

    return (
        <div {...handlers}>
            <Post data={post} />
        </div>
    );
}