import Click from "../Global/Click";
import Info from "./Info";
import Tags from "./Tags";

export default function Titlebox() {
    return (
        <div className="flex flex-col grow-2 gap-y-2 h-full justify-center">
            <Click 
            label="Statement of Detective Alice Daisy Tonner, regarding a traffic stop..."
            size="text-xxxs"
            />
            <Info />
            <Tags />
        </div>
    );
}