import Middlelayout from "../Contain/Middlelayout";
import Prettytext from "../Account/Prettytext";
import Post from "../Forum/Post";

export default function Forum() {
    const query = "Jeffrey Epstein"

    return (
        <Middlelayout>
            <Prettytext fontSize="text-medium">
                You searched for "{query}" and you find...
            </Prettytext>
            <div className="pt-8"></div>
            <Post />
            <Post />
            <Post />
        </Middlelayout>
    );
}