import {useEffect, useState} from "react";
import {Post,} from "../Post/Post";
import {postService} from "../api/postService";
import {PostDetails} from "../PostDetails/PostDetails";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [postDetails, setPostDetails] = useState(null);
    useEffect (() =>{
    postService.getAll().then(value => value.data).then(value => setPosts([...value]))
    }, [])
    return (
        <div className={'posts'}>
            <h1>PostDetails:</h1>
            {postDetails && <div>{postDetails.id} -- {postDetails.body}</div>}
            <div className={'insidePosts'}>
            <h1>Posts:</h1>
            {posts.map(post => <Post key = {post.id} post={post}/> )}
            </div>
        </div>
    );
};

export {Posts};