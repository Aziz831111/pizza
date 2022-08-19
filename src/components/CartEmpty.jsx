import React from 'react';
import { Link } from 'react-router-dom';
import Empty from '../img/empty-cart.png';

function CartEmpty() {
  return (
    <div>
      <div className="container container--cart">
        <div className="cart cart--empty">
          <h2>
            Корзина пустая <span>😕</span>
          </h2>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу.
            <br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <img src={Empty} alt="Empty cart" />
          <Link to="/" class="button button--black">
            <span>Вернуться назад</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartEmpty;
