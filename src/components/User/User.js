import {useDispatch} from "react-redux";
import {userActions} from "../../redux";
import {Button} from "@mui/material";
import './User.css'

const User = ({user}) => {

    const {id, name, username} = user;

    const dispatch = useDispatch();

    return (
        <div className={'user'}>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>UserName: {username}</div>
            <Button variant={"contained"} size={"small"} onClick={()=>dispatch(userActions.getById({id}))}>Select user</Button>
        </div>
    );
};

export {User};