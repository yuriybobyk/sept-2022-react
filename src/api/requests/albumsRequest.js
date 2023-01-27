import {axiosService} from "../axiosService";
import {urls} from "../../configs";

const albumsRequest = {
    getAll: () => axiosService.get(urls.albums)
}

export {albumsRequest}