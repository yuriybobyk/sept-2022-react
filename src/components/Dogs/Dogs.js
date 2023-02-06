import './Dogs.css'

import {Dog} from "../Dog/Dog";

const Dogs = ({dogs, dispatch}) => {
    return (
        <div className={'dogs'}>
            {dogs.map(dog=> <Dog key={dog.id} dog={dog} dispatch={dispatch}/> )}
        </div>
    );
};

export {Dogs};