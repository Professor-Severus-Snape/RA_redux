// пункт 3 -> создаем отдельные редьюсеры, меняем часть store в зависимости от типа action:
import { v4 } from 'uuid';
import { ADD_PRODUCT, REMOVE_PRODUCT } from '../actions/actionTypes';

// начальный массив покупок:
const initialState = [
  { id: v4(), name: 'Замена стекла', price: 21000 },
  { id: v4(), name: 'Замена дисплея', price: 25000 },
  { id: v4(), name: 'Замена аккумулятора', price: 4000 },
  { id: v4(), name: 'Замена микрофона', price: 2500 },
];

// редьюсер, который меняет часть store - массив покупок:
const productsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const { name, price } = action.payload; // получение данных из полученного action
      return [...state, { id: v4(), name, price: Number(price) }]; // изменение части store
    }
    case REMOVE_PRODUCT: {
      const { id } = action.payload; // получение данных из полученного action
      return state.filter((product) => product.id !== id); // изменение части store
    }
    default:
      return state; // если case не сработал, часть store не меняем
  }
};

export default productsReducer;
