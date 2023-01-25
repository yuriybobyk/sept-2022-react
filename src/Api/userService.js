import {axiosService} from "./axiosService";
import {urls} from "../Endpoints";

const userService = {
    getAll: () => axiosService.get(urls.users),
    createUser: (data) => axiosService.post(urls.users, data)
}

export {userService}