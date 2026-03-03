import Icon from "../Global/Icon";
import Vote from "../Forum/Vote";

export default function Reply({ author = "ForgorMan", date = "04/20/2067", hasQuote = false, content = "ReplyUnyapped", quoteAuthor = "ForgorMan2", quote = "QuoteUnyapped" }) {
    if (hasQuote) {
        return (
            <div className="flex flex-row bg-olive h-auto w-full border-border border-post items-start py-3 px-6 gap-x-4">
                <div className="flex flex-1 pt-4 gap-x-4">
                    <Icon />
                    <div className="flex flex-col flex-1">
                        <div className="text-glow font-french-canon text-xs">{author}</div>
                        <div className="text-info font-varela text-xxxxxs">{date}</div>
                        <div className="text-info font-french-canon text-xxxxs border-border border-post p-4 m-3">
                            <span className="underline">{quoteAuthor} said:</span>
                            <br></br>
                            {quote}
                        </div>
                        <div className="text-glow font-french-canon text-xxxs break-words">{content}</div>
                    </div>
                </div>
                <div className="flex-shrink-0">
                    <Vote />
                </div>
            </div>
        );
    }

    else {
        return (
            <div className="flex flex-row bg-olive h-auto w-full border-border border-post items-start py-3 px-6 gap-x-4">
                <div className="flex flex-1 pt-4 gap-x-4">
                    <Icon />
                    <div className="flex flex-col flex-1">
                        <div className="text-glow font-french-canon text-xs">{author}</div>
                        <div className="text-info font-varela text-xxxxxs">{date}</div>
                        <div className="text-glow font-french-canon text-xxxs break-words">{content}</div>
                    </div>
                </div>
                <div className="flex-shrink-0">
                    <Vote />
                </div>
            </div>
        );
    }
}