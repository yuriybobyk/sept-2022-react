
import {Outlet} from "react-router-dom";
import {Comments} from "../../components";
import {PostByCommentsPage} from "../PostByCommentsPage/PostByCommentsPage";

const CommentsPage = () => {
    return (
        <div>
            <h1>Comments Page</h1>
            <PostByCommentsPage/>
            <hr/>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};