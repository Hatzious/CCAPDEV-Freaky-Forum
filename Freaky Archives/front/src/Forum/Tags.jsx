import Tag from "./Tag";

export default function Tags({ tags = [] }) {
    return (
        <div className="flex gap-x-2">
            {tags.map((t, index) => (
                <Tag key={index} label={`#${t}`} />
            ))}
        </div>
    );
}