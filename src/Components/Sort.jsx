import {useState} from "react";

function Sort({value, onChangeSort, setOrderType}) {

    const [open, setOpen] = useState(false);

    const list = [
        {name: 'популярности', sortProperty: 'rating'},
        {name: 'цене', sortProperty: 'price'},
        {name: 'алфавиту', sortProperty: 'title'}
    ]

    const onClickSortItem = (i)=> {
        onChangeSort(i)
        setOpen(false)
    }

    return (
        <div className="sort">
            <div className="sort__label">

                <b>Сортировка по:</b>
                <span onClick={()=> setOpen(!open)}>{value.name}</span>
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
                                className={value.sortProperty === obj.sortProperty? 'active': ''}>{obj.name}
                        </li>)}
                    </ul>
                </div>
            )

            }
        </div>
    )
}
export default Sort;