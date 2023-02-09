import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {postService} from "../../api";
import {postActions} from "../../redux/slices/postSlice";
import {Post} from "../Post/Post";

const Posts = () => {

    const dispatch = useDispatch();
    const {posts, errors, loading} = useSelector(state => state.posts);

    useEffect(()=>{
        postService.getAll().then(({data})=>dispatch(postActions.getAll(data)))
    },[])

    return (
        <div>
            {loading && <h1>LOADING</h1>}
            {errors && <h1>ERROR</h1>}
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};