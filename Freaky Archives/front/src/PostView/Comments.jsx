import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import Click from "../Global/Click";
import Comment from "./Comment";
import { useAuth } from "../Services/Auth";
import OutsideClickHandler from "react-outside-click-handler";
import { API_BASE } from "../Services/api";

const Comments = forwardRef(({ coming, id, setComms, post }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const [body, setBody] = useState("");
    const [quoteMetadata, setQuoteMetadata] = useState([]); // Track quote positions and metadata
    const [postLocked, setPostLocked] = useState(post?.commentsLocked ?? false);
    const bodyInvalid = !body.trim();
    const { user } = useAuth();
    const [error, setError] = useState("");

    useImperativeHandle(ref, () => ({
        handleQuote
    }));

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

    const handleQuote = ({ text, sourceType, sourceId, authorName }) => {
        if (!user) {
            setError("Identification required to leave a statement.");
            return;
        }
        if (postLocked) {
            setError("Comments are locked on this post.");
            return;
        }

        const quoteText = `[QUOTE="${authorName}"]${text}[/QUOTE]\n`;
        const quoteId = `quote-${Date.now()}-${Math.random()}`;

        setQuoteMetadata(prev => [...prev, {
            id: quoteId,
            sourceType,
            sourceId,
            authorName,
            text
        }]);

        setBody(prevBody => prevBody + quoteText);
        setIsVisible(true);
        resetError();
    };

    const parseContent = (textareaContent) => {
        const blocks = [];
        const quoteRegex = /\[QUOTE="([^"]+)"\](.*?)\[\/QUOTE\]/gs;

        let lastIndex = 0;
        let match;
        let quoteIndex = 0;

        while ((match = quoteRegex.exec(textareaContent)) !== null) {
            if (match.index > lastIndex) {
                const beforeText = textareaContent.slice(lastIndex, match.index).trim();
                if (beforeText) {
                    blocks.push({
                        text: beforeText,
                        source: 'none',
                        label: null
                    });
                }
            }

            const authorName = match[1];
            const quotedText = match[2].trim();

            const metadata = quoteMetadata[quoteIndex];
            if (metadata && metadata.authorName === authorName && metadata.text === quotedText) {
                blocks.push({
                    text: quotedText,
                    source: metadata.sourceType,
                    sourceId: metadata.sourceId,
                    label: authorName
                });
            } else {
                blocks.push({
                    text: quotedText,
                    source: 'User',
                    sourceId: null,
                    label: authorName
                });
            }

            quoteIndex++;
            lastIndex = quoteRegex.lastIndex;
        }

        if (lastIndex < textareaContent.length) {
            const afterText = textareaContent.slice(lastIndex).trim();
            if (afterText) {
                blocks.push({
                    text: afterText,
                    source: 'none',
                    label: null
                });
            }
        }

        return blocks;
    };

    const handleSubmit = async () => {
        if (bodyInvalid) {
            setError("Comment cannot be empty");
            return;
        }
        if (postLocked) {
            setError("Comments are locked on this post.");
            return;
        }

        try {
            const contentBlocks = parseContent(body);

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
                setQuoteMetadata([]);
                setError("");
                setIsVisible(false);
            } else {
                setError(info.message || "Unable to post comment.");
            }
        } catch (err) {
            console.error("Error posting comment:", err);
            setError("We're called to serve.");
        }
    };

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
                            type="submit" onClick={handleSubmit}>
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
                        onQuote={handleQuote}
                        id={entry._id}
                    />
                ))
            ) : (
                <div className="text-info p-10">No Commento</div>
            )}
            
        </div>
        </OutsideClickHandler>
    );
});

Comments.displayName = 'Comments';

export default Comments;