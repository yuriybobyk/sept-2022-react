import {Component} from "react";
import {commentService} from "../api";
import {CommentComponent} from "./CommentComponent";

class CommentsComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {comments:[]}
    }

    componentDidMount() {
        commentService.getAll().then(({data})=>this.setState({comments:[...data]}))
    }

    render() {
        return(
            <div>
                {this.state.comments.map(comment=><CommentComponent key={comment.id} comment={comment}/>)}
            </div>
        )
    }
}

export {CommentsComponent}