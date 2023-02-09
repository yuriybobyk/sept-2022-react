import {useSelector} from "react-redux";
import './styles/PostHeader.css'

const PostHeader = () => {

    const {selectedPost} = useSelector(state => state.posts)

    return (
        <div>
        <div className={'postHeader'}>
            {selectedPost&& selectedPost.title}
        </div>
        </div>
    );
};

export {PostHeader};