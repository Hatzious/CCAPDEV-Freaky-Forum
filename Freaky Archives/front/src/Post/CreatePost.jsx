import { useState } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "https://cdn.skypack.dev/canvas-confetti";

export default function CreatePost() {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const navigate = useNavigate();
    const [selectedTags, setSelectedTags] = useState([]);

    const tags = ["TheEnd", "TheWeb", "TheEye", "TheCorruption", "TheBuried", "TheHunt", "TheDesolation", "TheSlaughter", "TheFlesh", "TheStranger", "TheSpiral", "TheLonely", "TheVast", "TheDark"];

    const titleInvalid = !title.trim();
    const bodyInvalid = !body.trim();
    const isInvalid = titleInvalid || bodyInvalid;

    let postCreatedAudio = new Audio("/audio/post-created.mp3");

    const toggleTag = (tag) => {
        setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
    };

    const isFilled = async (e) => {
        e.preventDefault();
        setHasSubmitted(true);

        if (isInvalid)
            return;

        try {
            const response = await fetch("http://localhost:5000/api/Poster/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include", 
                body: JSON.stringify({ 
                    title: title, 
                    content: body,
                    tags: selectedTags 
                })
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Archive Success:", data.message);
                postCreatedAudio.play();
                confetti({
                    spread: 1000,
                    particleCount: 700,
                    startVelocity: 80,
                    origin: { y: 0.7 }
                });
                navigate("/forum");
            } else {
                const errorData = await response.json();
                alert(errorData.message);
            }
        } catch (error) {
            console.error("Network Error:", error);
        }

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

                    <div className="flex flex-col gap-2.5">
                        <span className="font-french-canon text-glow text-xs">Tags</span>
                        <div className="flex justify-between justify-center flex-wrap gap-2">
                            {tags.map((tag) => {
                                const isActive = selectedTags.includes(tag);
                                return (
                                    <div
                                        key={tag}
                                        className={`${richTextButtons} ${isActive ? 'bg-primary-1 border-white' : 'bg-accent-dark-1'}`}
                                        onClick={() => toggleTag(tag)}
                                    >
                                        {tag}
                                    </div>
                                );
                            })}
                        </div>
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
            </div>
        </div>
    );
}