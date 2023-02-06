import './Cat.css'
const Cat = ({cat , dispatch}) => {

    const {id, name} = cat;

    return (
        <div className={'cat'}>
            {id} : {name}
            <button className={'btn'} onClick={()=> dispatch({type:'DELETE_CAT', payload:id})}>Remove</button>
        </div>
    );
};

export {Cat};