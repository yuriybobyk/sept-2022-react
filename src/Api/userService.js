import {axiosService} from "./axiosService";
import {urls} from "../Endpoints";

const userService = {
    getAll: () => axiosService.get(urls.users),
    create:(newUser) => axiosService.post(urls.users, newUser)
}

export {userService}