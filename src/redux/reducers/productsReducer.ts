// пункт 3 -> создаем отдельные редьюсеры, меняем часть store в зависимости от типа action:
import { PayloadAction, UnknownAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import { ADD_PRODUCT, EDIT_PRODUCT, REMOVE_PRODUCT } from '../actions/actionTypes';
import { IEditProduct, IForm, IProduct } from '../../models/models';

// начальный массив покупок:
const initialState: IProduct[] = [
  { id: v4(), name: 'Замена стекла', price: 21000 },
  { id: v4(), name: 'Замена дисплея', price: 25000 },
  { id: v4(), name: 'Замена аккумулятора', price: 4000 },
  { id: v4(), name: 'Замена микрофона', price: 2500 },
];

// редьюсер, который меняет часть store - массив покупок:
const productsReducer = (
  state: IProduct[] = initialState,
  action: UnknownAction | PayloadAction<IForm | IEditProduct | string>
): IProduct[] => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const { name, price } = action.payload as IForm; // получение данных из полученного action
      return [...state, { id: v4(), name, price: Number(price) }]; // изменение части store
    }
    case EDIT_PRODUCT: {
      const { id, name, price } = action.payload as IEditProduct; // получение данных из полученного action
      return state.map((product) => {
        if (product.id === id) {
          return { ...product, name, price: Number(price) };
        } else {
          return product;
        }
      }); // изменение части store
    }
    case REMOVE_PRODUCT: {
      const id = action.payload; // получение данных из полученного action
      return state.filter((product) => product.id !== id); // изменение части store
    }
    default:
      return state; // если ни один case не сработал, массив store.products не меняем
  }
};

export default productsReducer;
