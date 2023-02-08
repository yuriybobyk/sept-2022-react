import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../../redux";
import {User} from "../User/User";

const Users = () => {

  const dispatch =  useDispatch();
  const {users} = useSelector(state => state.users);

    useEffect(()=>{
        // userService.getAll().then(({data})=>dispatch(userActions.getAll(data)))
        dispatch(userActions.getAll())
    }, [])
    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};