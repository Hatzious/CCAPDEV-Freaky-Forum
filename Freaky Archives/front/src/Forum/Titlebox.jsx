import Click from "../Global/Click";
import Info from "./Info";
import Tags from "./Tags";

export default function Titlebox({
    title = "",
    author = "",
    date = "",
}) {
    return (
        <div className="flex flex-col grow-2 gap-y-2 h-full justify-center">
            <Click 
            label={title}
            size="text-xxxs"
            to="/postview"
            post="true"
            />
            <Info author={author} date={date} />
            <Tags />
        </div>
    );
}