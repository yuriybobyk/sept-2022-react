import axios from "axios";

const axionSpaceX = axios.create({baseURL: 'https://api.spacexdata.com/'})

export {axionSpaceX}