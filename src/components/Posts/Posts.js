import {useEffect, useState} from "react";
import {Post,} from "../Post/Post";
import {postService} from "../api/postService";
import './Posts.css'



const Posts = () => {
    const [posts, setPosts] = useState([])
    const [postDetails, setPostDetails] = useState(null);
    useEffect (() =>{
    postService.getAll().then(value => value.data).then(value => setPosts([...value]))
    }, [])
    return (
        <div className={'posts'}>
            <h1>PostDetails:</h1>
            {postDetails && <div>Post ID:  {postDetails.id} -- Body:{postDetails.body}</div>}
            <div className={'insidePosts'}>
            <h1>Posts:</h1>
                {posts.map(post => <Post key = {post.id} post={post} setPostDetails={setPostDetails}/> )}
            </div>
        </div>
    );
};

export {Posts};