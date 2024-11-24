// пункт 4 -> создаем свой store, используем configureStore() вместо createStore():
// объединяем все редьюсеры в один, задаем ключи и значения для единственного объекта store

import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducers/productsReducer';

const store = configureStore({
  reducer: {
    products: productsReducer, // массив покупок: [{id: "...", name: "...", price: ...}, {} ]
  },
});

export default store;
