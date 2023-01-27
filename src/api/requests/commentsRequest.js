import {axiosService} from "../axiosService";
import {urls} from "../../configs";

const commentsRequest = {
    getAll: () => axiosService.get(urls.comments)
}

export {commentsRequest}