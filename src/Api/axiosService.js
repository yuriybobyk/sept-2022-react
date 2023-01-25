import axios from "axios";

import {baseURL} from "../Endpoints";

const axiosService = axios.create({baseURL})

export {axiosService}