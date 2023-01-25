const User = ({user}) => {
    const {id, name, username, email} = user;
    return (
        <div>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>UserName: {username}</div>
            <div>E-mail: {email}</div>
        </div>
    );
};

export {User};