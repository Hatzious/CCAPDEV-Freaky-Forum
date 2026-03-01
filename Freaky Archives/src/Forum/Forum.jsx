import Click from "../Global/Click";
import Posts from "./Posts";

export default function Forum() {
    return (
        <div className="flex justify-center py-4">
            <Posts />
        </div>
    );
}