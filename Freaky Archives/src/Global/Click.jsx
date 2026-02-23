export default function Click({ label = "Forgor"}) {
    return (
        <span className="inline-flex text-white font-french-canon cursor-pointer
        transition-all duration-200 ease-in-out
        hover:text-shadow-glow hover:brightness+20">
            {label}
        </span>
    );
}