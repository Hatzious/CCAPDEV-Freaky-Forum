import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import OutsideClickHandler from "react-outside-click-handler";
import Post from "../Post/Post";

export default function SwipePost({ post, onDelete, canDelete }) {
    const [offset, setOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const MAX_SWIPE = -150;
    const THRESHOLD = -80;

    const handlers = useSwipeable({
        onSwipeStart: () => setIsDragging(true),

        onSwiping: (e) => {
            if (!canDelete) return; // JIC the user doesnt own the post

            if (e.deltaX < 0  && !isOpen) {
                setOffset(Math.max(e.deltaX, MAX_SWIPE));
            } else if (isOpen && e.deltaX > 0) {
                setOffset(Math.min(MAX_SWIPE + e.deltaX, 0));
            }
        },

        onSwiped: () => {
            if (!canDelete) return;
            
            setIsDragging(false);

            if (offset < THRESHOLD) {
                setOffset(MAX_SWIPE);
                setIsOpen(true);
            } else {
                setOffset(0);
                setIsOpen(false);
            }
        },

        trackMouse: true,
        preventScrollOnSwipe: true
    });

    // Handle if user clicks outside post
    const handleOutsideClick = () => {
        if (isOpen) {
            setOffset(0);
            setIsOpen(false);
        }
    }

    // Handle to not nuke all the user's posts in confirm delete button
    const handleDelete = () => {
        onDelete(post._id);
    }

    return (
        <OutsideClickHandler onOutsideClick={handleOutsideClick}>
            {/* Main container */}
            <div className="relative overflow-hidden w-full mb-2 border-border border">
                {/* Confirm delete container */}
                {canDelete && (
                    <div
                        className="absolute top-0 right-0 h-[99%] w-[150px] bg-red-600 flex justify-center items-center cursor-pointer transition-opacity"
                        onClick={handleDelete}>
                            <span className="text-white font-french-canon text-xs pl-5">
                                forget its existence?
                            </span>
                    </div>
                )}

                {/* Post container */}
                <div
                    {...handlers}
                    style={{
                        transform: `translateX(${offset}px)`,
                        transition: isDragging ? "none" : "transform 0.3s ease-out"
                    }}
                    className="relative z-10 w-full h-full bg-olive cursor-grab active:cursor-grabbing">
                        <div className={isOpen ? "pointer-events-none" : ""}>
                            <Post data={post} isAccount={true} />
                        </div>
                </div>
            </div>
        </OutsideClickHandler>
    );
}