import {useDispatch} from "react-redux";
import {postActions} from "../../redux/slices/postSlice";
import {Button} from "@mui/material";
import './Post.css'

const Post = ({post}) => {

    const {id, title} = post;

    const dispatch = useDispatch();

    return (
        <div className={'post'}>
            <div>ID: {id}</div>
            <div>Title: {title}</div>
            <Button variant={"contained"} onClick={()=>dispatch(postActions.getById({id}))} >Select Post</Button>
        </div>
    );
};

export {Post};