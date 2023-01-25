import {useForm} from "react-hook-form";

const UserForm = () => {
    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({mode:'all'});
    const submit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'Name'} {...register('Name', {required: {value:true, message: 'Empty field'}})}/>
                {errors.Name && <div>{errors.Name.message}</div>}
                <input type="text" placeholder={'UserName'} {...register('UserName', {required: {value:true, message: 'Empty field'}})}/>
                {errors.UserName && <div>{errors.UserName.message}</div>}
                <input type="text" placeholder={'Email'} {...register('Email', {required: {value:true, message: 'Empty field'}})}/>
                {errors.Email && <div>{errors.Email.message}</div>}
                <button>Add user</button>
            </form>
        </div>
    );
};

export {UserForm};