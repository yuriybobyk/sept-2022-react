import {Component} from "react";
import {postService} from "../api";
import {PostComponent} from "./PostComponent";

class PostsComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {posts:[]}

    }

    componentDidMount() {
        postService.getAll().then(({data}) => this.setState({posts:[...data]}))
    }

    render() {
        return(
            <div>
                <h2>Posts:</h2>
                {this.state.posts.map(post=><PostComponent key={post.id} post={post}/>)}
            </div>
        )
    }
}

export {PostsComponent}