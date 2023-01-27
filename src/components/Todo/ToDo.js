const ToDo = ({todo}) => {
    const {id, title, completed} = todo
    return (
        <div>
            <div>ID: {id}</div>
            <div>Title: {title}</div>
            <div>Status: {completed}</div>
        </div>
    );
};

export {ToDo};