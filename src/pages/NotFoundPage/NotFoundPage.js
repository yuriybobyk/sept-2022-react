import './NotFoundPage.css'
import  block from './block.jpg'

const NotFoundPage = () => {
    return (
        <div>
            <div className={'block'}>
                <img className={'notFound'} src={block} alt={'block'}/>

            </div>
        </div>
    );
};

export {NotFoundPage};