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

        case 'DELETE_CAT':
            const indexCat = state.cats.findIndex(cat=> cat.id === action.payload)
            state.cats.splice(indexCat, 1)
            return {...state}
        case 'DELETE_DOG':
            const  indexDog = state.dogs.findIndex(dog=> dog.id === action.payload)
            state.dogs.splice(indexDog, 1)
            return {...state}


        default:
            return {...state}
    }

}

function App() {
    const catInput = useRef();
    const dogInput = useRef();
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []}, (data) => data);

    const createCat = () =>{
        dispatch({type:'ADD_CAT', payload:catInput.current.value});
        catInput.current.value = ''


    };

    const createDog = () =>{
        dispatch({type:'ADD_DOG', payload:dogInput.current.value});
        dogInput.current.value = ''


    };

    return (
        <div className="App">
            <div className={'catForm'}>
                <input type={"text"} ref={catInput}/>
                <button className={'btn'} onClick={createCat}>Add cat</button>
                <Cats cats={state.cats} dispatch={dispatch} />
            </div>
            <div className={'dogForm'}>
                <input type={"text"} ref={dogInput}/>
                <button className={'btn'} onClick={createDog}>Add dog</button>
                <Dogs dogs={state.dogs} dispatch={dispatch} />
            </div>
        </div>
    );
}

export default App;
