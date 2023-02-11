import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators";
import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

const Form = () => {

  const {register,handleSubmit,reset,formState:{errors, isValid}} = useForm({mode:'all', resolver:joiResolver(carValidator)})

    const dispatch = useDispatch();

    const save = async (car)=>{
        await dispatch(carActions.create({car}))
        reset()
    }


    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type={"text"} placeholder={'brand'} {...register('brand')}/>
                <input type={"text"} placeholder={'price'} {...register('price', {valueAsNumber:true})}/>
                <input type={"text"} placeholder={'year'} {...register('year', {valueAsNumber:true})}/>
                <button disabled={!isValid}>Add Car</button>
            </form>
        </div>
    );
};

export {Form};