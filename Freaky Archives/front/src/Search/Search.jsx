import Middlelayout from "../Contain/Middlelayout";
import Prettytext from "../Account/Prettytext";
import Post from "../Post/Post";

export default function Forum() {
    const query = "query here"

    return (
        <Middlelayout>
            <Prettytext fontSize="text-medium">
                You searched for "{query}" and you find...
            </Prettytext>
            <div className="pt-8"></div>

            {/* List of queried users */}
            <div className="pt-8"></div>

            {/* List of queried posts */}
            <Post />
            <Post />
            <Post />
        </Middlelayout>
    );
}