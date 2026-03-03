export default function Explayout({ children, classes="" }) {
    return (
        <div className={`min-h-screen w-full relative no-underline flex ${classes}`}>
            <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle,var(--color-accent-dark-2)_0%,var(--color-accent-dark-1)_90%)]" />
            {children}
        </div>
    );
}