import {axiosService} from "../axiosService";
import {urls} from "../../configs";

const todosRequest = {
    getAll: () => axiosService.get(urls.todos)
}

export {todosRequest};