import Click from "../Global/Click";
import Info from "./Info";
import Tags from "./Tags";

export default function Titlebox({
    id = "",
    title = "",
    author = "",
    date = "",
    tags = []
}) {
    return (
        <div className="flex flex-col grow gap-y-2 h-full justify-center min-w-0">
            <Click 
            label={title}
            size="text-xxxs"
            to={`/postview/${id}`}
            post="true"
            />
            <Info author={author} date={date} />
            <Tags tags={tags} />
        </div>
    );
}