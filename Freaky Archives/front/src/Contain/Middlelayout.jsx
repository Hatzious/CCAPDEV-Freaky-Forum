import Middleinner from "./Middleinner";

export default function Middlelayout({ children }) {
    return (
        <div className="flex justify-center">
                    <Middleinner children={children} />
        </div>
    );
}