import {useForm} from "react-hook-form";
import {commentService} from "../../Api";
import './CommentForm.css'

const CommentForm = ({setComments}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid} } = useForm()

    const  submit = async (data) => {
        await commentService.createComment(data)
            .then(({data}) => setComments((prev) => [...prev, data]));
        reset()

    }

    return (
        <div className={'form'}>
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'comment'} {...register('name', {required:{value:true,message: 'empty field'}})}/>
            {errors.name && <div>{errors.name.message}</div>}
            <button className={'btn'} disabled={! isValid}>create comment</button>

        </form>
        </div>
    );
};

export {CommentForm};