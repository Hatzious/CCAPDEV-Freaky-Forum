export default function Mastercontainer({ children }) {
    return (
        <div className="flex flex-col w-full gap-y-2 h-full">
            { children }
        </div>
    );
}