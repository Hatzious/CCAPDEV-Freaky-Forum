import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import { useAuth } from "../Services/Auth";
import Middlelayout from "../Contain/Middlelayout";
import Head from "./Head";
import SwipePost from "./SwipePost";

export default function Account() {
    const { username } = useParams(); 
    const { user } = useAuth(); 
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserPosts = async () => {
            setLoading(true);
            try {
               
                const response = await fetch(`http://localhost:5000/api/Poster/filter?name=${username}`, {
                    credentials: "include"
                });
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error("Archive retrieval failed:", error);
            } finally {
                setLoading(false);
            }
        };

        if (username) {
            fetchUserPosts();
        }
    }, [username]); 

    const deletePost = async (postId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/Poster/${postId}`, {
                method: "DELETE",
                credentials: "include"
            });

            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.message || "Deletion failed");
            }

            setPosts(prev => prev.filter(post => post._id !== postId));

        } catch (error) {
            console.error("Post deletion failed:", error);
            setError(error.message || "Failed to delete post");
        }
    };

    if (loading) {
        return <Middlelayout><div className="text-glow">Accessing User Files...</div></Middlelayout>;
    }

    return (
        <Middlelayout>
            
            <Head username={username} isOwnProfile={user?.username === username} />

            <div className="bg-white h-px my-2 opacity-20"></div>

            {error && (
                <div className="text-red-500 p-4 my-2 bg-red-50 rounded">
                    {error}
                </div>
            )}

            <div className="flex flex-col w-[66vw] gap-y-4">
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <SwipePost
                            key={post._id}
                            post={post}
                            onDelete={deletePost}
                            canDelete={user?.username === username}
                        />
                    ))
                ) : (
                    <div className="text-info p-10">This Archivist has recorded no statements.</div>
                )}
            </div>
        </Middlelayout>
    );
}