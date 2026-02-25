export default function Click({ label = "Forgor", size = "text-xxs"}) {
    return (
        <span className={`inline-flex text-white font-french-canon cursor-pointer
        transition-all duration-300 ease-in-out text-shadow-faint
        hover:text-shadow-glow hover:brightness-125 ${size}`}>
            {label}
        </span>
    );
}