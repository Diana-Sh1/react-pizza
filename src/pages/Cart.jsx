import cartItem from '../assets/img/cart.svg'
import trash from '../assets/img/trash.svg'
import arrowLeft from '../assets/img/grey-arrow-left.svg'
import plus from '../assets/img/plus.svg'
import minus from '../assets/img/minus.svg'
import {Link} from "react-router-dom";


function Cart() {
    return (
        <div class="cart">
            <div class="cart__top">

                 <h2 class="content__title"><img src={cartItem}/>Корзина</h2>

                <div class="cart__clear">
                   <img src={trash}/>
                    <span>Очистить корзину</span>
                </div>
            </div>
            <div class="cart__items">
                <div className="cart__item">
                    <div className="cart__item-img">
                        <img
                            className="pizza-block__image"
                            src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                            alt="Pizza"
                        />
                    </div>
                    <div className="cart__item-info">
                        <h3>Сырный цыпленок</h3>
                        <p>тонкое тесто, 26 см.</p>
                    </div>
                    <div className="cart__item-count">
                        <div className="button button--outline button--circle cart__item-count-minus">
                            <img src={minus}/>
                        </div>
                        <b>2</b>
                        <div className="button button--outline button--circle cart__item-count-plus">
                            <img src={plus}/>
                        </div>
                    </div>
                    <div className="cart__item-price">
                        <b>770 ₽</b>
                    </div>
                    <div className="cart__item-remove">
                        <div className="button button--outline button--circle">
                            <img src={trash}/>
                        </div>
                    </div>
                </div>

            </div>
            <div class="cart__bottom">
                <div class="cart__bottom-details">
                    <span> Всего пицц: <b>3 шт.</b> </span>
                    <span> Сумма заказа: <b>900 ₽</b> </span>
                </div>
                <div class="cart__bottom-buttons">
                    <Link to="/" class="button button--outline button--add go-back-btn">
                       <img src={arrowLeft}/>
                        <span>Вернуться назад</span>
                    </Link>
                    <div class="button pay-btn">
                        <span>Оплатить сейчас</span>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Cart;