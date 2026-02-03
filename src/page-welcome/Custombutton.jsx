export default function Custombutton ({children, onClick}) {
    return (
        <button onClick={onClick}
        className="w-button font-island bg-accent-dark-3 text-primary-2 rounded-sm"
        >
            {children}
        </button>
    );
}