import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import { useAuth } from "../Services/Auth";
import Middlelayout from "../Contain/Middlelayout";
import Head from "./Head";
import Post from "../Post/Post";

export default function Account() {
    const { username } = useParams(); 
    const { user } = useAuth(); 
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

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

    if (loading) return <Middlelayout><div className="text-glow">Accessing User Files...</div></Middlelayout>;

    return (
        <Middlelayout>
            
            <Head username={username} isOwnProfile={user?.username === username} />

            <div className="bg-white h-px my-2 opacity-20"></div>

            <div className="flex flex-col w-[66vw] gap-y-4">
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <Post key={post._id} data={post} />
                    ))
                ) : (
                    <div className="text-info p-10">This investigator has recorded no statements.</div>
                )}
            </div>
        </Middlelayout>
    );
}