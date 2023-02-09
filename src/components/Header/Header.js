import {useSelector} from "react-redux";
import './styles/Header.css'

const Header = () => {

    const {selectedUser} = useSelector(state => state.users)

    return (
        <div className={'header'}>
        <div>
            {selectedUser&& selectedUser.name }
        </div>
        </div>
    );
};

export {Header};