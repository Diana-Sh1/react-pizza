import Categories from "../Components/Categories";
import Sort from "../Components/Sort";
import Skeleton from "../Components/PizzaBlock/Skeleton";
import PizzaBlock from "../Components/PizzaBlock/PizzaBlock";
import {useContext, useEffect, useState} from "react";
import Pagination from "../Components/Pagination";
import {SearchContext} from "../App";
import {useDispatch, useSelector} from "react-redux"
import {setCategoryId, setCurrentPage} from "../redux/slices/filterSlice";
import axios from "axios";


function Home() {
    const dispatch = useDispatch();
    const { categoryId, sort, order, currentPage } = useSelector(state => state.filter)
    const {searchValue} = useContext(SearchContext)
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    // const [currentPage, setCurrentPage] = useState(1);

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    }
    const onChangePage = (number) => {
        dispatch(setCurrentPage(number))
    }

    useEffect(() => {
        setIsLoading(true);
        const search = searchValue ? `&search=${searchValue}` : '';

        axios.get(`https://64b513c6f3dbab5a95c6a8b7.mockapi.io/items?page=${currentPage}&limit=4&${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sort.sortProperty}&order=${order}${search}`)
            .then(res => {
                setItems(res.data);
                setIsLoading(false);
            })
        window.scrollTo(0, 0)
    }, [categoryId, sort, order, searchValue, currentPage])

    const pizzas = items.map(obj => <PizzaBlock key={obj.id} {...obj}/>)
    const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index}/>)

    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={onChangeCategory}/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>

            <div className="content__items">
                {isLoading
                    ? skeletons
                    : pizzas
                }
            </div>
            <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
        </>
    )
}

export default Home;