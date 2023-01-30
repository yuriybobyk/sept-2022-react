import './TodosPage.css'
import {ToDos} from "../../components";

const TodosPage = () => {
    return (
        <div >
            <h1>To do list:</h1>
            <hr/>
            <ToDos/>
        </div>
    );
};

export {TodosPage};