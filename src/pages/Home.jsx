import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice';
import Cetegories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Pagination from '../assets/Components/Pagination';
import { SearchContext } from '../App';

const Home = () => {
  const { categoryId, currentPage, sortType } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const { serchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);

  const setClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  const onChengePege = (number) => {
    dispatch(setCurrentPage(number));
  };

  React.useEffect(() => {
    const sortBy = sortType;
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = serchValue ? `&search=${serchValue}` : '';

    // fetch(
    //   `https://62a473bf259aba8e10e8cfe7.mockapi.io/items?page=${carrendPege}&limit=4&${category}&sortBy=${sortBy}${search}&order=desc`,
    // )
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((arr) => {
    //     setItems(arr);
    //   });

    axios
      .get(
        `https://62a473bf259aba8e10e8cfe7.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}${search}&order=desc`,
      )
      .then((res) => {
        setItems(res.data);
      });

    window.scrollTo(0, 0);
  }, [categoryId, sortType, serchValue, currentPage]);

  const pizzas = items.map((Obj) => <PizzaBlock key={Obj.id} {...Obj} />);

  return (
    <div>
      <div className="content__top">
        <Cetegories value={categoryId} onClickCategory={setClickCategory} />

        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{pizzas}</div>
      <Pagination currentPage={currentPage} onChengePege={onChengePege} />
    </div>
  );
};
export default Home;
