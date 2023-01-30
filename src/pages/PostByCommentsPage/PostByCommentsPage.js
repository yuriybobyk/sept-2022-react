import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postRequest} from "../../api";
import './Post.css'

const PostByCommentsPage = () => {
    const {postId} =useParams();
    const [post, setPost] = useState(null);
    useEffect(()=>{
        if (postId){
            postRequest.getPostById(postId).then(({data})=> setPost({...data}))
        }
    },[postId])
    if (!post) return null;
    return (
        <div >
            <h1>Post:</h1>
            <div className={'Post'}>
            <div>Post Title: {post.title}</div>
            <div>PostID: {postId}</div>
            <div>body: {post.body}</div>
            </div>
        </div>
    );
};

export {PostByCommentsPage};