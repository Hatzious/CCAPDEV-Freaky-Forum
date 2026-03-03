import Post from "../Forum/Post";
import Body from "./Body";
import Comments from "./Comments";

export default function PostView() {
    return (
        <div className="flex flex-row justify-center">
            <div className="w-7/12 h-screen flex flex-col justify-start">
                <Post />
                <Body />
                <Comments />
            </div>
        </div>
    );
}