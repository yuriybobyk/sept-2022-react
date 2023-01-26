import './App.css';
import {UserForm, Users} from "./Components";
import {useEffect, useState} from "react";
import {commentService, userService} from "./Api";
import {CommentForm} from "./Components/CommentForm/CommentForm";
import {Comments} from "./Components/Comments/Comments";

const App = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        userService.getAll().then(({data}) => setUsers([...data]))
    }, [])

    const [comments, setComments] = useState([]);

    useEffect( ()=> {
        commentService.allComments().then(({data}) => setComments([...data]));
    }, [])
    return (
        <div className="App">
            <div className={'User'}>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
            </div>
            <div className={'Form'}>
            <CommentForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>
            </div>
        </div>
    );
}

export default App;