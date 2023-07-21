import s from './NotFound.module.scss'

function NotFoundBlock() {
    return (
        <div className={s.root}>
            <h1 >
                <span>😕</span>
            </h1>
            <h1>Ничего не найдено</h1>
        </div>
    );
}

export default NotFoundBlock;