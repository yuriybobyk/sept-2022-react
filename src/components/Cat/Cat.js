const Cat = ({cat}) => {

    const [id, name] = cat;

    return (
        <div>
            {id} : {name}
            <button>Remove</button>
        </div>
    );
};

export {Cat};