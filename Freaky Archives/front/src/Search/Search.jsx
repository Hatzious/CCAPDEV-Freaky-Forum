import Middlelayout from "../Contain/Middlelayout";
import Prettytext from "../Account/Prettytext";
import UserCard from "./UserCard";
import Post from "../Post/Post";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { API_BASE } from "../Services/api";

const VALID_TAGS = ["theend", "theweb", "theeye", "thecorruption", "theburied", "thehunt", "thedesolation", "theslaughter", "theflesh", "thestranger", "thespiral", "thelonely", "thevast", "thedark"];

const parseQuery = (rawQuery) => {
    let titleParts = [];
    let author = null;
    let tags = [];
    let scorer = null;
    let viewer = null;
    let isDefault = true; // No special filters are used (eg. author:a)

    const tokens = rawQuery.split(/\s+/);

    for (let token of tokens) {
        if (token.startsWith("author:")) {
            author = token.replace("author:", "");
            isDefault = false;
        } else if (token.startsWith("#")) {
            const tag = token.slice(1).toLowerCase();
            const regex_tag = new RegExp(`\\b${tag}\\b`);

            if (regex_tag.test(VALID_TAGS)) {
                tags.push(tag);
                isDefault = false;
            } else {
                titleParts.push(tag); // Query is not considered a tag
            }
        } else if (token.startsWith("scorer:")) {
            const val = token.replace("scorer:", "").toLowerCase();
            if (val === "most" || val === "least") {
                scorer = val;
                isDefault = false;
            } else {
                titleParts.push(val); // Query is not considered a filter
            }
        } else if (token.startsWith("viewer:")) {
            const val = token.replace("viewer:", "").toLowerCase();
            if (val === "most" || val === "least") {
                scorer = val;
                isDefault = false;
            } else {
                titleParts.push(val); // Query is not considered a filter
            }
        } else {
            titleParts.push(token);
        }
    }

    return  {
        title: titleParts.join(" "),
        author,
        tags: tags.join(","),
        scorer,
        viewer,
        isDefault
    }
}

export default function Search() {
    const [searchParams] = useSearchParams();
    const rawQuery = searchParams.get("q") || "";

    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchResults = async () => {
            if (!rawQuery) return;

            setLoading(true);

            const { 
                title, 
                author, 
                tags, 
                scorer, 
                viewer, 
                isDefault
            } = parseQuery(rawQuery);

            try {
                const postParams = new URLSearchParams();
                if (title) postParams.append("title", title);
                if (author) postParams.append("name", author);
                if (tags) postParams.append("tags", tags);
                if (scorer) postParams.append("scorer", scorer);
                if (viewer) postParams.append("viewer", viewer);

                const postRes = await fetch(`${API_BASE}/Poster/filter?${postParams.toString()}`,
                                            { credentials: "include" });
                const postData = await postRes.json();

                setPosts(Array.isArray(postData) ? postData : []);

                if (isDefault && title) {
                    const userRes = await fetch(`${API_BASE}/Auth/search?q=${encodeURIComponent(title)}`,
                                            { credentials: "include" });
                    const userData = await userRes.json();

                    setUsers(Array.isArray(userData) ? userData : []);
                } else {
                    setUsers([]);
                }
            } catch (err) {
                console.error("Failed to get search results:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, [rawQuery]);

    return (
        <Middlelayout>
            <Prettytext fontSize="text-medium">
                You searched for "{rawQuery}" and you find...
            </Prettytext>

            <div className="pt-8"></div>

            {loading ? (
                <div className="text-glow">Searching the archives...</div>
            ) : (
                
                <div className="flex flex-col gap-y-6">
                    {/* List of queried users if any */}
                    {users.length > 0 && (
                        <div>
                            <h2 className="text-primary-2 border-b border-border pb-2 mb-4">Investigator Profiles</h2>

                            <div className="flex flex-col gap-y-4">
                                {users.map(user => (
                                    <UserCard key={user._id} data={user} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* List of queried posts if any */}
                    {posts.length > 0 && (
                        <div>
                            <h2 className="text-primary-2 border-b border-border pb-2 mb-4 mt-8">Archived Statements</h2>

                            <div className="flex flex-col gap-y-4">
                                {posts.map(post => (
                                    <Post key={post._id} data={post} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* If results are failed */}
                    {users.length === 0 && posts.length === 0 && (
                        <div className="text-info text-xxxs">You did not manage to find anything.</div>
                    )}
                </div>
            )}
        </Middlelayout>
    );
}