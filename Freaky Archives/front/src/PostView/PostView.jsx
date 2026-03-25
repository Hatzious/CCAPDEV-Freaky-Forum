import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { prettyDate } from "../Services/function";
import Head from "./Head";
import Body from "./Body";
import Comments from "./Comments";
import { API_BASE } from "../Services/api";

export default function PostView() {

    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comms, setComms] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`${API_BASE}/Poster/${id}`);
                const data = await response.json();

                if (response.ok) {
                    setPost(data);
                } else {
                    console.error("ono", data.message);
                }
            } catch (err) {
                console.error("Error fetching post:", err);
            } 
        }

        const fetchComment = async () => {
            try {
                const response = await fetch(`${API_BASE}/Commenter/show?postId=${id}`, {
                    method: "GET",
                    credentials: "include"
                });
                const info = await response.json();

                if (response.ok) {
                    setComms(info);
                } else {
                    console.error("We're called to serve", info.message);
                }
            } catch (err) {
                console.error("Error fetching comments:", err);
            } finally {
                setLoading(false);
            }
        }

        fetchPost();
        fetchComment();
    }, [id]);

    if (loading) return <div className="text-glow p-10">Loading post...</div>;
    if (!post) return <div className="text-glow text-red-500 p-10">Post not found.</div>;

    const authorName = post.author?.username || "Anonymous";
    const displayDate = prettyDate(post.createdAt);

    return (
        <div className="flex flex-row justify-center">
            <div className="w-7/12 min-h-screen flex flex-col justify-start">
                <Head 
                title={post.title} 
                summary={post.summary}
                author={authorName} 
                date={displayDate} 
                tags={post.tags} 
                />
                <Body 
                text={post.content} 
                />
                <Comments
                    coming={comms}
                    id={id}
                    setComms={setComms}
                    post={post}
                />
            </div>
        </div>
    );
}