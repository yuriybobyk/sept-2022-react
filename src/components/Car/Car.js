import {useDispatch} from "react-redux";
import {carActions} from "../../redux";


const Car = ({car}) => {

    const {id, brand, price, year} = car

    const dispatch = useDispatch()

    return (
        <div>
            <div>ID: {id}</div>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={()=>dispatch(carActions.deleteById({id}))}>Delete Car</button>
            <button onClick={()=>dispatch(carActions.setCarForUpdate(car))}>Update Car</button>
        </div>
    );
};

export {Car};