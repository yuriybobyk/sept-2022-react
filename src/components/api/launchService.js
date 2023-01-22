import axios from "axios";

import {axionSpaceX} from "./axionSpaceX";

const launchService = {
    getAll: () => axionSpaceX.get('/v3/launches/')
}

export {launchService}