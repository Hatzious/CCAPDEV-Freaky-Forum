export default function Explayout({ children, classes="" }) {
    return (
        <div className={`min-h-screen w-full relative bg-[radial-gradient(circle,var(--color-accent-dark-2)_0%,var(--color-accent-dark-1)_90%)] no-underline flex ${classes}`}>
            {children}
        </div>
    );
}