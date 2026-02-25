export default function Explayout({ children, classes="" }) {
    return (
        <div className={`min-h-screen w-full relative bg-black no-underline flex ${classes}`}>
            {children}
        </div>
    );
}