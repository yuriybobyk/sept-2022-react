import {useEffect, useState} from "react";
import {todosRequest} from "../../api";
import {ToDo} from "../Todo/ToDo";
import './ToDos.css'

const ToDos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() =>{
        todosRequest.getAll().then(({data}) => setTodos([...data]))
    }, [])

    return (
        <div className={'Todos'}>
            {todos.map(todo=> <ToDo key={todo.id} todo={todo}/> )}
        </div>
    );
};

export {ToDos};