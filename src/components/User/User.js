import {useDispatch} from "react-redux";
import {userActions} from "../../redux";

const User = ({user}) => {

    const {id, name, username} = user;

    const dispatch = useDispatch();

    return (
        <div>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>UserName: {username}</div>
            <button onClick={()=>dispatch(userActions.setSelectedUser(user))} >Select</button>
        </div>
    );
};

export {User};