import './ToDo.css'
const ToDo = ({todo}) => {
    const {id, title} = todo
    return (
        <div className={'Todo'}>
            <h4>ID: {id}</h4>
            <div>Title: {title}</div>
            <div>Status: {todo.completed ? 'Completed!' : 'Not Completed!'}</div>
        </div>
    );
};

export {ToDo};