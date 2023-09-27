import Categories from "../Components/Categories";
import Sort from "../Components/Sort";
import Skeleton from "../Components/PizzaBlock/Skeleton";
import PizzaBlock from "../Components/PizzaBlock/PizzaBlock";
import {useEffect, useState} from "react";


function Home({searchValue}) {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [categoryId, setCategoryId] = useState(0);
    const [orderType, setOrderType] = useState('asc');
    const [sortType, setSortType] = useState({
        name: 'популярности',
        sortProperty: 'rating'
    });

    useEffect(() => {
        setIsLoading(true);

        fetch(`https://64b513c6f3dbab5a95c6a8b7.mockapi.io/items?${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sortType.sortProperty}&order=${orderType}`)
            .then(res => res.json())
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            })
        window.scrollTo(0,0)
    }, [categoryId, sortType, orderType])

    const pizzas = items.map(obj => <PizzaBlock key={obj.id} {...obj}/>)
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index}/>)

    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={(i)=> setCategoryId(i)}/>
                <Sort value={sortType} onChangeSort={(i)=> setSortType(i)} setOrderType={setOrderType} orderType/>
            </div>
            <h2 className="content__title">Все пиццы</h2>

            <div className="content__items">
                {isLoading
                    ? skeletons
                    : pizzas
                }
            </div>
        </>
    )
}

export default Home;