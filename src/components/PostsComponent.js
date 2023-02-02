import {Component} from "react";

import {postService} from "../api";




class PostsComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {posts:[]};
    }

    componentDidMount() {
        postService.getAll.then(({data}) => this.setState([...data]));
    }

    render() {
        return (
            <div>
                <h2>Posts:</h2>
                {this.state.posts.map(post => <div>{post.id}. {post.title}</div>)}
            </div>
        )
    }

}

export {PostsComponent};