import { useState, useEffect } from "react";
import Post from "./Post";
import PostButton from "./PostButton";
import Middlelayout from "../Contain/Middlelayout";

export default function Forum() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/posts", { credentials: "include" })
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(err => console.error("Error fetching posts:", err));
    }, []);

    return (
        <Middlelayout>
            <PostButton />
            <Post />
            <Post />
            <Post />
            {posts.map(post => (
                <Post
                    key={post._id}
                    title={post.title}
                    author={post.author}
                    date={post.date}
                    views={post.views}
                    upvotes={post.upvotes}
                    excerpt={post.excerpt}
                />
            ))}
        </Middlelayout>
    );
}