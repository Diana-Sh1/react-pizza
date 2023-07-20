import s from './NotFound.module.scss'

function NotFoundBlock() {
    return (
        <div>
            <span className={s.root}>😕</span>
            <br/>
            <h1>Ничего не найдено :( </h1>
        </div>
    );
}

export default NotFoundBlock;