import './App.css';
import {UserForm, Users} from "./Components";
import {useEffect, useState} from "react";
import {userService} from "./Api";
import {CommentForm} from "./Components/CommentForm/CommentForm";
import {Comments} from "./Components/Comments/Comments";

const App = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        userService.getAll().then(({data}) => setUsers([...data]))
    }, [])
    return (
        <div className="App">
            <UserForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
            <CommentForm/>
            <Comments/>
        </div>
    );
}

export default App;