import { useEffect, useRef } from "react";

export default function CustomCursor() {
    const cursorRef = useRef(null);

    const cursorWidth = 48;  
    const cursorHeight = 48;
    const offsetX = cursorWidth / 2; 
    const offsetY = cursorHeight / 2;

    const defaultCursor = "/eyecursor.png";
    const pointerCursor = "/eyecursorLit.png"; 

    useEffect(() => {
        const moveCursor = (e) => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${e.clientX - offsetX}px, ${e.clientY - offsetY}px, 0)`;
            }
        };

        const handleMouseOver = (e) => {
            if (cursorRef.current) {
                const isClickable = e.target.closest(
                    'a, button, input, select, textarea,[class*="cursor-pointer"]'
                );
                
                cursorRef.current.src = isClickable ? pointerCursor : defaultCursor;
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver); 

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <img
            ref={cursorRef}
            src={defaultCursor} 
            alt="cursor"
            style={{
                width: `${cursorWidth}px`,
                height: `${cursorHeight}px`,
            }}
            className="fixed top-0 left-0 pointer-events-none z-[69420]"
        />
    );
}