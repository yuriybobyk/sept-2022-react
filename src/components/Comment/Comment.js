import {useNavigate, NavLink} from "react-router-dom";
import './Comment.css'

const Comment = ({comment}) => {
    const {id, name, body, postId,} = comment;

    const navigate = useNavigate();


    return (

        <div className={'Comment'}
             onClick={()=> navigate(postId.toString())}>
            <NavLink to={postId.toString()}
                  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            ><div>ID: {id}</div>
                <div>Name: {name}</div>
                <div>Body: {body}</div>
                <div>PostID: {postId}</div>
                <div></div>
            </NavLink>
        </div>
    );
};

export {Comment};