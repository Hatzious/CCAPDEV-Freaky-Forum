export default function Resizebox({ children }) {
    return (
        <div className="flex flex-row bg-olive h-fit w-full border-border border-post items-center py-5 px-6 gap-x-4">
            {children}
        </div>
    );
}