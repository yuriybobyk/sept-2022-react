import './App.css';
import {UserForm, Users} from "./Components";
import {useEffect, useState} from "react";
import {userService} from "./Api";

const App = () => {
    const [users, setUsers] = useState( []);
    useEffect(() =>{
        userService.getAll().then(({data})=>setUsers([...data]))
    },[])
  return (
      <div className="App">
        <UserForm setUsers={setUsers}/>
        <hr/>
        <Users users={users}/>
      </div>
  );
}

export default App;