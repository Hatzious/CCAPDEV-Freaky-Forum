import Icon from "../Global/Icon";
import Vote from "../Forum/Vote";
import { prettyDate } from "../Services/function";

export default function Comment({ data }) {
   
    if (!data) return null;

   
    const { author, content, createdAt, score } = data;

    
    const username = author?.username || "Bombadillo Crocodillo";
    const avatar = author?.profile?.avatarUrl || "/pic/puppy.jpg";
    const dateDisplay = `${prettyDate(createdAt)}`;

    return (
        <div className="flex flex-row bg-olive h-auto w-full border-border border-post items-start py-3 px-6 gap-x-4">
            <div className="flex flex-1 pt-4 gap-x-4">
               
                <Icon source={avatar} dimensions="w-10 h-10" />

                <div className="flex flex-col flex-1 min-w-0">
                   
                    <div className="text-glow font-french-canon text-xs">{username}</div>
                    <div className="text-info font-varela text-xxxxxs mb-3">{dateDisplay}</div>

                   
                    <div className="flex flex-col gap-y-3">
                        {content.map((block) => {
                            // CASE A: Normal Text
                            if (block.source === 'none') {
                                return (
                                    <div key={block._id} className="text-glow font-french-canon text-xxxs break-words leading-relaxed">
                                        {block.text}
                                    </div>
                                );
                            }

                            // CASE B: Quote (Post or User)
                            const isPost = block.source === 'Post';
                            return (
                                <div key={block._id} className="group relative">
                                    <a 
                                        href={`#${block.sourceId}`} 
                                        className={`block text-info font-french-canon text-xxxxs border-l-2 p-4 my-2 transition-all
                                            ${isPost ? 'bg-primary-1/5 border-primary-1 hover:bg-primary-1/10' : 'bg-accent-dark-2 border-glow hover:bg-white/5'}`}
                                    >
                                        <span className="underline opacity-70">
                                            {isPost ? "Referencing Statement" : `${block.label} recorded:`}
                                        </span>
                                        <div className="mt-1 italic text-glow/80">
                                            "{block.text}"
                                        </div>
                                        <span className="absolute right-2 bottom-1 text-[8px] opacity-0 group-hover:opacity-40 transition-opacity">
                                            Jump to source ↑
                                        </span>
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* 6. Dynamic Score */}
            <div className="flex-shrink-0 pt-4">
                <Vote score={score} />
            </div>
        </div>
    );
}