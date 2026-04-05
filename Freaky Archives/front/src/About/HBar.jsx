export default function HBar({ text, pic="../../public/puppy.jpg" }) {
    return (
        <div className="w-[50vw] flex py-4 items-center">
            <div className="flex-grow border-t border-secondary-1"></div>
            {text ? (
                <span className="flex-shrink mx-4 text-xs text-glow font-scary">{text}</span>
            ) : (
                <img className="flex-shrink mx-4 h-24" src={pic}></img>
            )}
            <div className="flex-grow border-t border-secondary-1"></div>
        </div>
    );
}