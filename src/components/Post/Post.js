const Post = ({post, setPostDetails}) => {
    const {id, title} = post;
    return (
        <div>
            <div>id: {id}</div>
            <div>post title: {title}</div>
            <button onClick={() => setPostDetails()}>Details</button>
        </div>
    );
};

export {Post};