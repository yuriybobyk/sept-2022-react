import {useSelector} from "react-redux";
import {Cars, Form} from "../../components";

const CarsPage = () => {
    const {loading} = useSelector(state => state.cars)

    return (
        <div className="App">
            <Form/>
            {loading&& <h3>Please Wait</h3>}
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarsPage};