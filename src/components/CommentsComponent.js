import {Component} from "react";
import {commentService} from "../api";
import {CommentComponent} from "./CommentComponent";
import './styles/CommentsComponent.css'

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
            <div className={'comments'}>
                {this.state.comments.map(comment=><CommentComponent key={comment.id} comment={comment}/>)}
            </div>
        )
    }
}

export {CommentsComponent}