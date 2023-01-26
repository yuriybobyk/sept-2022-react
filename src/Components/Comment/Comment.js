import './Comment.css'
const Comment = ({comment}) => {
    const {id, name} = comment;
    return (
        <div className={'comment'}>
            <div>Post ID: {id}</div>
            <div>Post Name: {name}</div>
        </div>
    );
};

export {Comment};