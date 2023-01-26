import './User.css'
const User = ({user}) => {
    const {id, name} = user;
    return (
        <div className={'user'}>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
        </div>
    );
};

export {User};