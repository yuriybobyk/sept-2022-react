import './Dog.css'

const Dog = ({dog, dispatch}) => {

    const {id, name}= dog;

    return (
        <div className={'dog'}>
            {id} : {name}
            <button className={'btn'} onClick={()=>dispatch({type:'DELETE_DOG', payload:id})}>Remove</button>
        </div>
    );
};

export {Dog};