const Post = ({post, setPostDetails}) => {
    const {id, title} = post;
    return (
        <div>
            <div className={'id'}>ID: {id}</div>
            <div className={'title'}>Post title: {title}</div>
            <button className={'btn'} onClick={()=> setPostDetails(post)}>See Details</button>
        </div>
    );
};

export {Post};