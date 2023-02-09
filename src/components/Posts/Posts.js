import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {postService} from "../../api";
import {postActions} from "../../redux/slices/postSlice";
import {Post} from "../Post/Post";
import './Posts.css'

const Posts = () => {

    const dispatch = useDispatch();
    const {posts, errors, loading} = useSelector(state => state.posts);

    useEffect(()=>{
        postService.getAll().then(({data})=>dispatch(postActions.getAll(data)))
    },[])

    return (
        <div className={'posts'}>
            {loading && <h2>LOADING</h2>}
            {errors && <h4>ERROR</h4>}
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};