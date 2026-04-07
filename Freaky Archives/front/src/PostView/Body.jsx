import ReactMarkdown from 'react-markdown';
import Click from "../Global/Click";
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

export default function Body({text = "oops body issue", onQuote, postData, id}) {
    return (
        <div id={id} className="flex flex-col bg-olive h-auto w-full border-border border-post items-start py-6 px-6 gap-y-4 min-w-0">
            <div 
                className="text-glow font-french-canon text-xxxs break-words max-w-full overflow-hidden"
            >
                <ReactMarkdown
                    remarkPlugins={[remarkGfm, remarkBreaks]} 
                    components={{
                        p: ({node, ...props}) => <p className="mb-4 last:mb-0 leading-relaxed" {...props} />
                    }}
                >
                    {text}
                </ReactMarkdown>
            </div>
            {onQuote && postData && (
                <div className="flex justify-end w-full">
                    <Click
                        label="Quote Post"
                        size="text-xxxxs"
                        onClick={() => onQuote({
                            text: text,
                            sourceType: 'Post',
                            sourceId: postData._id,
                            authorName: postData.author?.username || "Anonymous"
                        })}
                    />
                </div>
            )}
        </div>
    );
}