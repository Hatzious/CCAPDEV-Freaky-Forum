import { useState } from "react";
import Middlelayout from "../Contain/Middlelayout";
import Head from "./Head";
import SwipePost from "./SwipePost";

export default function Account() {

    const [posts, setPosts] = useState([
        {
            id: 1,
            title: 'Statement of Detective Alice "Daisy" Tonner, regarding a traffic stop...',
            content: 'Discuss anything and everything here.'
        },
        {
            id: 2,
            title: 'Statement of Detective Alice "Daisy" Tonner, regarding a traffic stop...',
            content: 'Discuss anything and everything here.'
        }
    ]);

    const deletePost = (id) => {
        setPosts(prev => prev.filter(post => post.id !== id));
    };

    return (
        <Middlelayout>

            <Head />

            <div className="bg-white h-px w-full my-2"></div>

            {posts.map(post => (
                <SwipePost
                    key={post.id}
                    post={post}
                    onDelete={deletePost}
                />
            ))}

        </Middlelayout>
    );
}