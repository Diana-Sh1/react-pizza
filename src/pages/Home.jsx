import Categories from "../Components/Categories";
import Sort from "../Components/Sort";
import Skeleton from "../Components/PizzaBlock/Skeleton";
import PizzaBlock from "../Components/PizzaBlock/PizzaBlock";
import {useEffect, useState} from "react";


function Home() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [categoryId, setCategoryId] = useState(0);
    const [sortType, setSortType] = useState(0);

    useEffect(() => {
        fetch('https://64b513c6f3dbab5a95c6a8b7.mockapi.io/items')
            .then(res => res.json())
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            })
        window.scrollTo(0,0)
    }, [])
    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={(id)=> setCategoryId(id)}/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>) : items.map(obj => <PizzaBlock
                    key={obj.id} {...obj}/>)
                }
            </div>
        </>
    )
}

export default Home;