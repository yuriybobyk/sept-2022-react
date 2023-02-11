import './App.css';
import {Cars, Form} from "./components";
import {useSelector} from "react-redux";

function App() {
    const {loading} = useSelector(state => state.cars)

  return (
    <div className="App">
      <Form/>
        {loading&& <h3>Please Wait</h3>}
      <hr/>
      <Cars/>
    </div>
  );
}

export default App;
