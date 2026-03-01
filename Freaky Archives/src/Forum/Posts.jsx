import Post from "./Post";

export default function Posts() {
    return (
        <div className="w-7/12 h-screen flex flex-col">
            <Post />
            <Post />
            <Post />
        </div>
    );
}