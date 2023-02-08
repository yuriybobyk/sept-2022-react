
import {axiosService} from "./axiosService";
import {urls} from "../config";

const userSerivce = {
    getAll:()=>axiosService.get(urls.users),
    getById:(id)=> axiosService.get(`${urls.users}/${id}`)

}

export {userSerivce}