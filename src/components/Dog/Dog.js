const Dog = ({dog}) => {

    const [id, name]= dog;

    return (
        <div>
            {id} : {name}
            <button>Remove</button>
        </div>
    );
};

export {Dog};