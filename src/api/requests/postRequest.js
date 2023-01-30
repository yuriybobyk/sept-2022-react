import {axiosService} from "../axiosService";
import {urls} from "../../configs";

const postRequest = {
    getPostById: (id)=> axiosService.get(urls.postById(id))
}

export {postRequest}