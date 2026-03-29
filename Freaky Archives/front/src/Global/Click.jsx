import { Link } from "react-router-dom";

export default function Click({ label = "Forgor", size = "text-xxs", to, onClick, menu = false, post = false}) {

    const shadows = menu ? "hover:text-shadow-compact hover:brightness-80" : "hover:text-shadow-glow hover:brightness-100";

    let styles = `inline-flex text-glow font-french-canon cursor-pointer
            text-shadow-faint
            transition-all duration-300 ease-in-out
            ${shadows} hover:animate-none
            ${size}
            `;

    let tostyles = `inline-flex text-glow font-french-canon cursor-pointer
            ${size}
            truncate w-full
            `;

    if (label == "Sign in" || label == "Sign up") {
        return (
            <Link to={to} className={styles + " border border-border px-2 py-1"}>
                {label}
            </Link>
        );
    }
    
    if (to && !post) {
        return (
            <Link to={to} className={styles}>
                {label}
            </Link>
        );
    }

    if (to && post) {
        return (
            <Link to={to} className={tostyles}>
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

    if (menu) {
        return (
            <span className={styles + " text-center border-none p-0"}>
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