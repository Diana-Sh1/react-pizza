import styles from "./Search.module.scss"
import style from "./Search.module.scss";
import {useCallback, useContext, useRef, useState} from "react";
import {SearchContext} from "../../App";
import debounce from 'lodash.debounce'

const testDebounce = debounce(()=>{
    console.log('Hey')
}, 250)

const Search = () => {
    const [value, setValue] = useState('');
    const { setSearchValue} = useContext(SearchContext)
    const inputRef = useRef()
    const onClickClear = ()=> {
        setSearchValue('');
        setValue('');
        inputRef.current.focus()
    }

    const updateSearchValue = useCallback(
        debounce(str => {
            console.log(str);
            setSearchValue(str);
        }, 300),
        []
    );
    const onChangeInput = e => {
        setValue(e.target.value)
        updateSearchValue(e.target.value)
    }
    return (
       <div className={styles.root}>
           <svg className={styles.icon} fill="none" height="24" stroke="currentColor" strokeLinecap="round"
                strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"
                xmlns="http://www.w3.org/2000/svg">
               <circle cx="11" cy="11" r="8"/>
               <line x1="21" x2="16.65" y1="21" y2="16.65"/>
           </svg>
           <input
               ref={inputRef}
               value={value}
               onChange={onChangeInput}
               className={styles.input} placeholder="Поиск пиццы..."/>
           {value &&
               <svg onClick={onClickClear} className={style.clearIcon} version="1.1" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                   <g id="info"/><g id="icons">
                   <path d="M14.8,12l3.6-3.6c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L12,9.2L8.4,5.6c-0.8-0.8-2-0.8-2.8,0   c-0.8,0.8-0.8,2,0,2.8L9.2,12l-3.6,3.6c-0.8,0.8-0.8,2,0,2.8C6,18.8,6.5,19,7,19s1-0.2,1.4-0.6l3.6-3.6l3.6,3.6   C16,18.8,16.5,19,17,19s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L14.8,12z" id="exit"/>
               </g>
               </svg>}

       </div>

    )
}
export default Search;