import {Header} from "./Header";
import {Outlet} from "react-router-dom";
import {Futter} from "./Futter";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Futter/>
        </div>
    );
};

export {MainLayout};