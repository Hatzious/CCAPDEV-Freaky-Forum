import { useState } from "react";

export default function CreatePost() {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const titleInvalid = !title.trim();
    const bodyInvalid = !body.trim();
    const isInvalid = titleInvalid || bodyInvalid;

    const isFilled = (e) => {
        e.preventDefault();
        setHasSubmitted(true);

        if (isInvalid)
            return;
    };

    const richTextButtons = `bg-olive border border-border text-glow font-french-canon
                             text-xxxs px-2.5 py-1.5 cursor-pointer 
                             hover:text-shadow-compact hover:brightness-80 transition-all duration-300 ease-in-out`;

    return (
        <div className="flex justify-center items-center -mt-5">
            <div className="w-[70%] flex flex-col gap-[22px] pb-10">
                <div className="flex flex-col bg-olive border border-border p-2 text-center w-[40%] mx-auto">
                    <div className="font-french-canon text-glow text-small">Create Post</div>
                    <div className="font-varela text-info text-xxxxs">Make your statement. Face your fears.</div>
                </div>

                <form id="post-form" onSubmit={isFilled} className="flex flex-col gap-5 bg-olive border border-border p-5">
                    <label className="flex flex-col gap-2.5">
                        <div className="font-french-canon text-glow text-xs"><span>Title</span></div>
                        <input 
                            id="post-title" 
                            className="bg-textbox border border-border text-glow 
                                    font-french-canon text-lg tracking-[0.6px] p-3 outline-none 
                                    focus:border-info" 
                            type="text" 
                            name="title" 
                            placeholder="Give your post a title" 
                            maxLength="120" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        {titleInvalid && hasSubmitted && (
                            <p className="text-red-500 text-xxxxxs">
                                Title is required
                            </p>
                        )}
                    </label>

                    <div className="flex flex-col gap-2.5">
                        <span className="font-french-canon text-glow text-xs">Body</span>
                        <div className="flex flex-wrap gap-2" role="toolbar" aria-label="Formatting">
                            <button type="button" className={richTextButtons} data-md="**">Bold</button>
                            <button type="button" className={richTextButtons} data-md="*">Italic</button>
                            <button type="button" className={richTextButtons} data-md="~~">Strike</button>
                            <button type="button" className={richTextButtons} data-md="`">Code</button>
                            <button type="button" className={richTextButtons} data-md="> ">Quote</button>
                            <button type="button" className={richTextButtons} data-md="- ">List</button>
                        </div>
                        <textarea 
                            id="post-body" 
                            className="bg-textbox border border-border 
                                    text-glow font-french-canon text-lg tracking-[0.6px] 
                                    p-3 outline-none focus:border-infomax-w-[100%]" 
                            name="body" 
                            rows="14"
                            placeholder="Share your story..."
                            value={body}
                            onChange={(e) => setBody(e.target.value)}>
                        </textarea>
                        {bodyInvalid && hasSubmitted && (
                            <p className="text-red-500 text-xxxxxs">
                                Body is required
                            </p>
                        )}
                    </div>

                    <div className="flex justify-between items-center">
                        <button 
                            className="min-w-[120px] px-2 py-1.5 bg-accent-dark-1 border border-border 
                                    text-glow font-french-canon tracking-[0.6px] text-xxxxs cursor-pointer 
                                    hover:text-shadow-compact hover:brightness-80 transition-all duration-300 ease-in-out" 
                            type="submit">
                                Post
                        </button>
                    </div>
                </form>

                {/* <div className="flex flex-col gap-2.5 bg-olive border border-border p-5">
                    <div className="font-['var(--font-varela)'] text-glow text-xs tracking-[1px]">Preview</div>
                    <div id="post-preview" className="font-['var(--font-french-canon)'] text-glow text-lg tracking-[0.6px] leading-[1.6]"></div>
                </div> */}
            </div>
        </div>
    );
}