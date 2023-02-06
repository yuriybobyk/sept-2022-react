import './App.css';
import {useReducer, useRef} from "react";
import {Cats} from "./components/Cats/Cats";
import {Dogs} from "./components/Dogs/Dogs";

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CAT':
            const [lastCat] = state.cats.slice(-1);
            const catId = lastCat ? lastCat.id + 1 : 0;
            return {...state, cats: [...state.cats, {id: catId, name: action.payload}]}
        case 'ADD_DOG':
            const [lastDog] = state.dogs.slice(-1);
            const dogId = lastDog ? lastDog.id + 1 : 0;
            return {...state, dogs: [...state.dogs, {id: dogId, name: action.payload}]}

        default:
            return {...state}
    }

}

function App() {
    const catInput = useRef();
    const dogInput = useRef();
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []}, (data) => data);

    const createCat = () =>{
        dispatch({type:'ADD_CAT', payload:catInput.current.value})
        catInput.current.value = ''
    };

    const createDog = () =>{
        dispatch({type:'ADD_DOG', payload:dogInput.current.value})
        dogInput.current.value = ''
    };

    return (
        <div className="App">
            <div>
                <input type={"text"} ref={catInput}/>
                <button onClick={createCat}>Add cat</button>
                <Cats cats={state.cats} dispatch={dispatch()} />
            </div>
            <div>
                <input type={"text"} ref={dogInput}/>
                <button onClick={createDog}>Add dog</button>
                <Dogs dogs={state.dogs} dispatch={dispatch()} />
            </div>
        </div>
    );
}

export default App;
