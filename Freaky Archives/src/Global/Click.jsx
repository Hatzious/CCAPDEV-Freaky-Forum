import { Link } from "react-router-dom";

export default function Click({ label = "Forgor", size = "text-xxs", to, onClick, bordered = false, menu = false}) {

    const shadows = menu ? "hover:text-shadow-compact hover:brightness-125" : "hover:text-shadow-glow hover:brightness-300";

    let styles = `inline-flex text-glow font-french-canon cursor-pointer
            animate-pulse
            text-shadow-faint
            transition-all duration-300 ease-in-out
            ${shadows} hover:animate-none
            ${size}
            `;

    if (bordered) {
        styles = styles + " border-solid border-glow border-post px-2"
    }
    
    if (to) {
        return (
            <Link to={to} className={styles}>
                {label}
            </Link>
        );
    }

    if (onClick) {
        return (
            <button onClick={onClick} className={styles}>
                {label}
            </button>
        );
    }

    if (label === "LOGOUT" || label === "SETTINGS" || label === "ACCOUNT") {
        return (
            <span className={styles + " text-center bg-olive border-none p-0"}>
                {label}
            </span>
        );
    }

    return (
        <span className={styles}>
            {label}
        </span>
    );
}