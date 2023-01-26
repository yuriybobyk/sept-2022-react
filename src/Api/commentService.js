import {axiosService} from "./axiosService";
import {urls} from "../Endpoints";

const commentService = {

    allComments: () => axiosService.get(urls.comments),
    createComment: (data) => axiosService.post(urls.comments, data)
}

export {commentService}