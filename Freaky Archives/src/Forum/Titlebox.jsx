import Click from "../Global/Click";
import Info from "./Info";
import Tags from "./Tags";

export default function Titlebox() {
    return (
        <div className="flex flex-col gap-y-1 w-7/12 h-full">
            <Click 
            label="Statement of Detective Alice Daisy Tonner, regarding a traffic stop..."
            size="text-xxxs"
            />
            <Info />
            <Tags />
        </div>
    );
}