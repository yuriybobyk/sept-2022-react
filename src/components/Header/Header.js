import './Header.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={'header'}>
            <div className={'links'}>
                <NavLink to={'/login'}>Login</NavLink>
                <NavLink to={'/register'}>Register</NavLink>
            </div>
        </div>
    );
};

export {Header};