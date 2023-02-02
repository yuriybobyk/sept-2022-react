import {Component} from "react";

class PostComponent extends Component{

    render() {

        const {id, body, title} = this.props.post;
        return (
            <div>
                <div>ID: {id}</div>
                <div>Title: {title}</div>
                <div>Body: {body}</div>
            </div>
        )
    }
}

export {PostComponent}