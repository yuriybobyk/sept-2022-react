import './Album.css'
const Album = ({album}) => {
    const {id, title, userId} = album;
    return (
        <div className={'Album'}>
            <h4>ID: {id}</h4>
            <div>UserID: {userId}</div>
            <div>Title: {title}</div>
        </div>
    );
};

export {Album};