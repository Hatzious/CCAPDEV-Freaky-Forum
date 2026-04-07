import { Link } from "react-router-dom";

export default function Logo({ size = "text-xxs" }) {
    return (
        <Link to="/" className={`text-secondary-1 font-comforter ${size}`}>
            Freaky Archives
        </Link>
    );
}