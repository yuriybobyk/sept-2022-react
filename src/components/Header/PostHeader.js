import {useSelector} from "react-redux";

const PostHeader = () => {

    const {selectedPost} = useSelector(state => state.posts)

    return (
        <div>
            {selectedPost&& selectedPost.title}
        </div>
    );
};

export {PostHeader};