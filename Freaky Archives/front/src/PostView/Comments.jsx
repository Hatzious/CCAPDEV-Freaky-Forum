import { useState, useEffect } from "react";
import Click from "../Global/Click";
import Comment from "./Comment";
import { useAuth } from "../Services/Auth";
import OutsideClickHandler from "react-outside-click-handler";
import { API_BASE } from "../Services/api";

export default function Comments({ coming, id, setComms, post }) {
    const [isVisible, setIsVisible] = useState(false);
    const [body, setBody] = useState("");
    const [postLocked, setPostLocked] = useState(post?.commentsLocked ?? false);
    const bodyInvalid = !body.trim();
    const { user } = useAuth();
    const [error, setError] = useState("");

    const isAuthor = user && post && post.author && post.author._id === user._id;

    const resetError = () => {
        if (error) {
            setError("");
        }
    }

    const syncPostLocked = () => {
        setPostLocked(post?.commentsLocked ?? false);
    }

    useEffect(() => {
        syncPostLocked();
    }, [post]);

    const toggleLock = async () => {
        if (!isAuthor) {
            setError("Only the author can lock/unlock comments.");
            return;
        }

        try {
            const response = await fetch(`${API_BASE}/Poster/${id}/lock`, {
                method: "PATCH",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ locked: !postLocked })
            });
            const info = await response.json();

            if (response.ok) {
                setPostLocked(!postLocked);
                setError("");
            } else {
                setError(info.message || "Unable to update lock state.");
            }
        } catch (err) {
            console.error("Error toggling lock state:", err);
            setError("Network error updating lock state.");
        }
    }

    const handleCommentClick = () => {
        if (!user) {
            setError("Identification required to leave a statement.");
            return;
        }
        if (postLocked) {
            setError("Comments are locked on this post.");
            return;
        }
        setIsVisible(!isVisible);
    };

    const handleBodyValidity = () => {
        if (bodyInvalid) {
            setError("Comment cannot be empty");
            return;
        }
        if (postLocked) {
            setError("Comments are locked on this post.");
            return;
        }
        setError("");
        createComment();
    }

    const createComment = async () => {
        try {
            if (postLocked) {
                setError("Comments are locked on this post.");
                return;
            }

            const contentBlocks = [{
                text: body,
                source: 'none',
                label: null
            }];

            const response = await fetch(`${API_BASE}/Commenter/create`, {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    postId: id,
                    content: contentBlocks
                })
            });
            const info = await response.json();

            if (response.ok) {
                setComms((prevComms) => [...(prevComms || []), info.comment]);
                setBody("");
                setError("");
                setIsVisible(false);
            } else {
                setError(info.message || "Unable to post comment.");
            }
        } catch (err) {
            console.error("Error fetching comments:", err);
            setError("We're called to serve.");
        }
    }

    return (
        <OutsideClickHandler onOutsideClick={resetError}>
        <div className="flex flex-col h-auto w-full items-center gap-y-4 mt-5 mb-20">
            {/* Buttons */}
            <div className="flex w-full justify-end gap-x-10">
                {isAuthor && (<Click
                    label={postLocked ? "Unlock" : "Lock"}
                    size="text-xxxs"
                    onClick={toggleLock}
                />)
                }
                <Click
                    label="Comment"
                    size="text-xxxs"
                    onClick={handleCommentClick}
                />
            </div>

            {error && <p className="text-red-500 text-[10px] uppercase">{error}</p>}

            {/* Comment Panel */}
            {isVisible && (
                <div className="flex flex-col bg-olive h-auto w-full border-border border-post items-start py-6 px-6 gap-2.5">
                    <span className="font-french-canon text-glow text-xs">
                        Yap about it.
                    </span>

                    <textarea 
                        className="bg-textbox border border-border 
                                text-glow font-french-canon text-lg tracking-[0.6px] 
                                p-3 w-full outline-none focus:border-infomax-w-[100%]" 
                        name="body" 
                        rows="6"
                        placeholder="Share your views..."
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    >
                    </textarea>

                    {error && <p className="text-red-500 text-[10px] uppercase">{error}</p>}

                    <div className="flex justify-end w-full">
                        <button 
                            className="min-w-[120px] px-2 py-1.5 bg-accent-dark-1 border border-border 
                                    text-glow font-french-canon tracking-[0.6px] text-xxxxs cursor-pointer 
                                    hover:text-shadow-compact hover:brightness-80 transition-all duration-300 ease-in-out" 
                            type="submit" onClick={handleBodyValidity}>
                                Post Comment
                        </button>
                    </div>
                </div>
            )}

            {/* Comments */}
            {coming && coming.length > 0 ? (
                coming.map((entry) => (
                    <Comment
                        key={entry._id}
                        data={entry} 
                    />
                ))
            ) : (
                <div className="text-info p-10">No Commento</div>
            )}
            
        </div>
        </OutsideClickHandler>
    );
}