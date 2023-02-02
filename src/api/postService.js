import {axiosService} from "./axiosService";
import {urls} from "../config";
const postService = {
    getAll: () => axiosService.get(urls.posts)
}

export {postService}