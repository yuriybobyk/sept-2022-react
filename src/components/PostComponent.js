import {Component} from "react";
import './styles/PostComponent.css'

class PostComponent extends Component{

    render() {

        const {id, body, title} = this.props.post;
        return (
            <div className={'post'}>
                <div>ID: {id}</div>
                <div>Title: {title}</div>
                <div>Body: {body}</div>
            </div>
        )
    }
}

export {PostComponent}