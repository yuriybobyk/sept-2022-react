import {useEffect, useState} from "react";
import {commentsRequest} from "../../api";
import {Comment} from "../Comment/Comment";
import './Comments.css'


const Comments = () => {

    const [comments, setComments]= useState([]);

    useEffect(()=>{
        commentsRequest.getAll().then(({data})=> setComments([...data]))
    },[])
    return (
        <div className={'Comments'}>
            {comments.map(comment => <Comment key = {comment.id} comment={comment}/> )}
        </div>
    );
};

export {Comments};