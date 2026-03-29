import Middlelayout from "../Contain/Middlelayout";
import Prettytext from "../Account/Prettytext";
import UserCard from "./UserCard";
import Post from "../Post/Post";

export default function Search() {
    const query = "query here"

    return (
        <Middlelayout>
            <Prettytext fontSize="text-medium">
                You searched for "{query}" and you find...
            </Prettytext>
            <div className="pt-8"></div>

            {/* List of queried users if any */}
            <UserCard />
            <UserCard />
            <div className="pt-8"></div>

            {/* List of queried posts if any */}
            <Post />
            <Post />
            <Post />
        </Middlelayout>
    );
}