import Click from "../Global/Click";
import Info from "../Forum/Info";
import Tags from "../Forum/Tags";

export default function Head({
    title = "",
    summary = "",
    author = "",
    date = "",
    tags = []
}) {
    return (
        <div className="flex flex-col bg-olive h-auto w-full border-border border-post items-start py-6 px-6 gap-y-4 mb-4">
            <div className="flex flex-col grow gap-y-2 h-full justify-center break-words">
                <Click label={title} size="text-small" />
                <p className="text-xxs leading-relaxed italic text-glow font-french-canon">{summary}</p>
                <Info author={author} date={date} />
                <Tags tags={tags} />
            </div>
        </div>
    );
}