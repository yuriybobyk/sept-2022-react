const PostDetails = ({post}) => {
    const {id, body} = post;

    return (
        <div>
        <div>id: {id}</div>
        <div> {body}</div>
        </div>
    );
};

export {PostDetails};