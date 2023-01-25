const User = ({user}) => {
    const {id, name} = user;
    return (
        <div>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
        </div>
    );
};

export {User};