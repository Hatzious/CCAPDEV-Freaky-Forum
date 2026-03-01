import Icon from "../Global/Icon";
import Titlebox from "./Titlebox";
import Vote from "./Vote";

export default function Post() {
    return (
        <div className="flex flex-row bg-olive h-[16vh] w-full border-border border-post items-center py-1 px-6 gap-x-4">
            <Icon />
            <Titlebox />
            <Vote />
        </div>
    );
}