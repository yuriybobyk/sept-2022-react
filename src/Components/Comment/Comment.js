const Comment = ({comment}) => {
    const {id, name} = comment;
    return (
        <div>
            <div>Post ID: {id}</div>
            <div>Post Name: {name}</div>
        </div>
    );
};

export {Comment};