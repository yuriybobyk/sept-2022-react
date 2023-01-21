const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div>
            <div>id: {id}</div>
            <div>post title: {title}</div>
            {/*/<button onClick={}>Details</button>*/}
        </div>
    );
};

export {Post};