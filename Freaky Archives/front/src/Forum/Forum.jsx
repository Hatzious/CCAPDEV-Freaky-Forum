import Post from "./Post";
import PostButton from "./PostButton";
import Middlelayout from "../Contain/Middlelayout";

export default function Forum() {
    return (
        <Middlelayout>
            <PostButton />
            <Post />
            <Post />
            <Post />
        </Middlelayout>
    );
}