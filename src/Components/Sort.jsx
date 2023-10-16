import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setSort, setOrder} from "../redux/slices/filterSlice";

export const sortList = [
    {name: 'популярности', sortProperty: 'rating'},
    {name: 'цене', sortProperty: 'price'},
    {name: 'алфавиту', sortProperty: 'title'}
];

function Sort() {
    const dispatch = useDispatch();
    const sort = useSelector(state => state.filter.sort)
    const sortRef = useRef();

    const [open, setOpen] = useState(false);


    const onClickSortItem = (obj) => {
        dispatch(setSort(obj))
        setOpen(false)
    }
    const setOrderType = (obj) => {
        dispatch(setOrder(obj))
    }
    useEffect(() => {
    document.body.addEventListener('click', e => {
        if (e.composedPath().includes (sortRef.current)) {
            console.log('был клик на сорт')
        }
    })
    }, [])

    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">

                <b>Сортировка по:</b>
                <span onClick={() => setOpen(!open)}>{sort.name}</span>
                <div className="sort__buttons">
                    <button onClick={() => setOrderType('asc')}> ↑</button>
                    <button onClick={() => setOrderType('desc')}> ↓</button>
                </div>
            </div>


            {open && (
                <div className="sort__popup">
                    <ul>
                        {sortList.map((obj, i) =>
                            <li
                                key={i}
                                onClick={() => onClickSortItem(obj)}
                                className={sort.sortProperty === obj.sortProperty ? 'active' : ''}>{obj.name}
                            </li>)}
                    </ul>
                </div>
            )

            }
        </div>
    )
}

export default Sort;