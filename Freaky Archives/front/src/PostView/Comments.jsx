import { useState } from "react";
import Click from "../Global/Click";
import Reply from "./Reply";

export default function Comments({ coming }) {
    const [isVisible, setIsVisible] = useState(false);

    const handleReplyClick = () => {
        // TODO: if a user is logged in
            setIsVisible(!isVisible);
        // Else do not set visible
    };

    return (
        <div className="flex flex-col h-auto w-full items-center gap-y-4 mt-5 mb-25">
            {/* Buttons */}
            <div className="flex w-full justify-end gap-x-10">
                <Click label="Lock" size="text-xxxs" />
                <Click label="Comment" size="text-xxxs" onClick={handleReplyClick} />
            </div>

            {/* Reply Panel */}
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
                        // value={body}
                        // onChange={(e) => setBody(e.target.value)}
                    >
                    </textarea>
                    {/* {bodyInvalid && hasSubmitted && (
                        <p className="text-red-500 text-xxxxxs">
                            Comment cannot be empty
                        </p>
                    )} */}

                    <div className="flex justify-end w-full">
                        <button 
                            className="min-w-[120px] px-2 py-1.5 bg-accent-dark-1 border border-border 
                                    text-glow font-french-canon tracking-[0.6px] text-xxxxs cursor-pointer 
                                    hover:text-shadow-compact hover:brightness-80 transition-all duration-300 ease-in-out" 
                            type="submit">
                                Post Comment
                        </button>
                    </div>
                </div>
            )}

            {/* Replies */}
            {coming.length > 0 ? (
                coming.map((entry) => (
                    <Reply
                        key={entry._id}
                        data={entry} 
                    />
                ))
            ) : (
                <div className="text-info p-10">No Commento</div>
            )}
            
        </div>
    );
}