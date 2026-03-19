import { useEffect, useState } from "react";

export default function HoverToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!visible) return null;

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className="fixed left-4 bottom-4 z-50 w-12 h-12 bg-olive border border-border text-glow shadow-lg
                       flex items-center justify-center text-lg hover:bg-olive transition-all duration-200 ease-in-out
                       focus:outline-none focus:ring-2 focus:ring-info"
        >
            ^
        </button>
    );
}
