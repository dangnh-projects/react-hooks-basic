import React, { useState, useEffect } from "react";

const PostList = (props) => {
    const {posts} = props;

    return (
        <ul className="post-list">
            {posts && posts.map(post => (
                <li key={post.id}>{post.title}</li>
                ))}
        </ul>
    )
}

export default PostList;