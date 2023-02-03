import {Component} from "react";
import './styles/CommentComponent.css'
class CommentComponent extends Component{
    render() {
        const {id, name, body} = this.props.comment;
        return(
            <div className={'comment'}>
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