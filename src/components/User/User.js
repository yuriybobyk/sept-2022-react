import {useDispatch} from "react-redux";
import {userActions} from "../../redux";
import {Button} from "@mui/material";

const User = ({user}) => {

    const {id, name, username} = user;

    const dispatch = useDispatch();

    return (
        <div>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>UserName: {username}</div>
            <Button variant={"contained"} onClick={()=>dispatch(userActions.getById({id}))}>Select user</Button>
        </div>
    );
};

export {User};