import {ToDos} from "../../components/Todos/ToDos";
import {Outlet} from "react-router-dom";

const TodosPage = () => {
    return (
        <div>
            <ToDos/>
            <Outlet/>
        </div>
    );
};

export {TodosPage};