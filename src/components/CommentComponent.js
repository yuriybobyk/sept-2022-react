import {Component} from "react";

class CommentComponent extends Component{
    render() {
        const {id, name, body} = this.props.comment;
        return(
            <div>
                <div>id: {id}</div>
                <div>name: {name}</div>
                <div>Body: {body}</div>
            </div>
        )
    }
}

export {
    CommentComponent
}