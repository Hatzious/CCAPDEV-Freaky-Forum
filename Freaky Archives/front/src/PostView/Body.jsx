import ReactMarkdown from 'react-markdown';

export default function Body({text = "oops body issue"}) {
    return (
        <div className="flex flex-col bg-olive h-auto w-full border-border border-post items-start py-6 px-6 gap-y-4 min-w-0">
            <div 
                className="text-glow font-french-canon text-xxxs break-words max-w-full overflow-hidden"
            >
                <ReactMarkdown 
                    components={{
                        p: ({node, ...props}) => <p className="mb-4 last:mb-0 leading-relaxed" {...props} />
                    }}
                >
                    {text}
                </ReactMarkdown>
            </div>
        </div>
    );
}