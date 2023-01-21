import axios from "axios";
import {axiosService} from "./axiosService";

const postService = {
    getAll: () => axiosService.get('/posts')
}

export {postService}