import { useState, useEffect } from "react";
import Post from "../Post/Post";
import PostButton from "./PostButton";
import Middlelayout from "../Contain/Middlelayout";

export default function Forum() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/Poster/filter", { 
                    credentials: "include" 
                });
                
                const data = await response.json();
                
                setPosts(data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch posts:", error);
                setLoading(false);
            }
        };

        loadPosts();
    }, []);

    if (loading) return <div className="text-glow p-10">Accessing Archives...</div>;

    return (
        <Middlelayout>
            <PostButton />

            {posts.length > 0 ? (
                posts.map((post) => (
                    <Post
                        key={post._id}
                        data={post} 
                    />
                ))
            ) : (
                <div className="text-info p-10">No statements found in this sector.</div>
            )}
        </Middlelayout>
    );
}