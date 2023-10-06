import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setSort, setOrder} from "../redux/slices/filterSlice";

function Sort() {
    const dispatch = useDispatch();
    const sort = useSelector(state=> state.filter.sort)

    const [open, setOpen] = useState(false);
    const list = [
        {name: 'популярности', sortProperty: 'rating'},
        {name: 'цене', sortProperty: 'price'},
        {name: 'алфавиту', sortProperty: 'title'}
    ];

    const onClickSortItem = (obj)=> {
        dispatch(setSort(obj))
        setOpen(false)
    }
    const setOrderType = (obj) => {
        dispatch(setOrder(obj))
    }

    return (
        <div className="sort">
            <div className="sort__label">

                <b>Сортировка по:</b>
                <span onClick={()=> setOpen(!open)}>{sort.name}</span>
                <div className="sort__buttons">
                    <button onClick={() => setOrderType('asc')}> ↑ </button>
                    <button onClick={() => setOrderType('desc')}> ↓ </button>
                </div>
            </div>


            {open && (
                <div className="sort__popup">
                    <ul>
                        {list.map((obj, i)=>
                            <li
                                key={i}
                                onClick={()=> onClickSortItem(obj)}
                                className={sort.sortProperty === obj.sortProperty? 'active': ''}>{obj.name}
                        </li>)}
                    </ul>
                </div>
            )

            }
        </div>
    )
}
export default Sort;