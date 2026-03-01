import Icon from "../Global/Icon";
import Titlebox from "./Titlebox";
import Vote from "./Vote";

export default function Post() {
    return (
        <div className="flex flex-row bg-olive h-[18vh] border-border border-post items-center px-2 py-1 gap-x-3">
            <Icon />
            <Titlebox />
            <Vote />
        </div>
    );
}