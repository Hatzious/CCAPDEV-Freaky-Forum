import { useState, useEffect } from "react";
import Post from "../Post/Post";
import Filter from "./Filter";
import PostButton from "./PostButton";
import Middlelayout from "../Contain/Middlelayout";
import { API_BASE } from "../Services/api";

export default function Forum() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterParams, setFilterParams] = useState({});

    const loadPosts = async (params = {}) => {
        try {
            setLoading(true);
            const queryString = new URLSearchParams(params).toString();
            const url = `${API_BASE}/Poster/filter${queryString ? `?${queryString}` : ' '}`;
            const response = await fetch(url, { 
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

    const applyFilter = (filterType, value) => {
        const filter = { filterParams };
        
        if (filterType === 'scorer') {
            filter.scorer = value;
        } else if (filterType === 'viewer') {
            filter.viewer = value;
        }
        
        setFilterParams(filter);
        loadPosts(filter);
    };

    useEffect(() => {
        loadPosts();
    }, []);

    if (loading) return <div className="text-glow p-10">Accessing Archives...</div>;

    return (
        <Middlelayout>
            <div className="flex self-end gap-4">
                <PostButton />
                <Filter onFilter={applyFilter} />
            </div>

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