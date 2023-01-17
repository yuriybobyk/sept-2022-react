import './App.css';
import {Rick_Sanchez} from "./components/rickandmorty/rick_sanchez";
import {Morty_smith} from "./components/rickandmorty/morty_smith";
import {Summer_smith} from "./components/rickandmorty/summer_smith";
import {Beth_smith} from "./components/rickandmorty/beth_smith";
import {Jerry_smith} from "./components/rickandmorty/jerry_smith";
import {Adjudicator_rick} from "./components/rickandmorty/adjudicator_rick";

function App() {
    return (
        <div className="App">
            <Rick_Sanchez/>
            <Morty_smith/>
            <Summer_smith/>
            <Beth_smith/>
            <Jerry_smith/>
            <Adjudicator_rick/>
        </div>

    );
}

export default App;
