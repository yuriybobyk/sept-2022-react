import {useForm} from "react-hook-form";
import {userService} from "../../Api";
import './UserForm.css'

const UserForm = ({setUsers}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, getValues} = useForm()


    const submit = async (data) => {

        await userService.createUser(data)
            .then(({data}) => setUsers((prevState) => [...prevState, data]))
        reset();

    }

    return (
        <div className={'form'}>
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'name'} {...register('name' ,{required: {value:true, message: 'Empty field'}})}/>
            {errors.name && <div>{errors.name.message}</div>}
            <button className={'btn'} disabled={! isValid}>new user</button>
        </form>
        </div>
    );
};

export {UserForm};