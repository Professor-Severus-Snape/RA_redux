// пункт 2 -> импортируем все константы экшенов и создаем все генераторы экшенов:
import { ADD_PRODUCT, EDIT_PRODUCT, REMOVE_PRODUCT, SEARCH_PRODUCT } from './actionTypes';

export const addProductActionCreator = (name: string, price: string) => {
  return { type: ADD_PRODUCT, payload: { name, price } };
};

export const editProductActionCreator = (someParameter: any) => {
  return { type: EDIT_PRODUCT, payload: { someParameter } };
};

export const removeProductActionCreator = (someParameter: any) => {
  return { type: REMOVE_PRODUCT, payload: { someParameter } };
};

export const searchProductActionCreator = (someParameter: any) => {
  return { type: SEARCH_PRODUCT, payload: { someParameter } };
};
