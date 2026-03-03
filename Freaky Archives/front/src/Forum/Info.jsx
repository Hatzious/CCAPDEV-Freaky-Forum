export default function Info({ author = "My Mom", date = "67/67/2067" }) {
    return (
        <span className="text-info font-varela text-xxxxxs">
            {author} <span className="text-glow mx-1">|</span>{date}
        </span>
    );
}