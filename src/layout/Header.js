import {NavLink} from "react-router-dom";
import './Styles/Header.css'
import  logo from './logo.jpg'

const Header = () => {
    return (
        <div className={'Header'}>
            <div className={'logo'}>
                <img src={logo} alt={"okten"}/>
            </div>
            <div className={'menu'}>
            <NavLink to={""}>Home</NavLink>
            <NavLink to={"todos"}>Todos List</NavLink>
            <NavLink to={"albums"}>Albums</NavLink>
            <NavLink to={"comments"}>Comments</NavLink>
            </div>
        </div>
    );
};

export {Header};