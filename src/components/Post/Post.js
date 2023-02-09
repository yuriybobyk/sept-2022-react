import {useDispatch} from "react-redux";
import {postActions} from "../../redux/slices/postSlice";
import {Button} from "@mui/material";

const Post = ({post}) => {

    const {id, title} = post;

    const dispatch = useDispatch();

    return (
        <div>
            <div>ID: {id}</div>
            <div>Title: {title}</div>
            <Button variant={"contained"} onClick={()=>dispatch(postActions.getById({id}))} >Select Post</Button>
        </div>
    );
};

export {Post};