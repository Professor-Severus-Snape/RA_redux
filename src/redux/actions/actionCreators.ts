// пункт 2 -> импортируем все константы экшенов и создаем все генераторы экшенов:
import {
  ADD_PRODUCT,
  CHANGE_INPUT,
  EDIT_PRODUCT,
  REMOVE_PRODUCT,
  RESET_FORM,
  SEARCH_PRODUCT,
} from './actionTypes';

export const addProductActionCreator = (name: string, price: string) => {
  return { type: ADD_PRODUCT, payload: { name, price } };
};

export const changeInputActionCreator = (name: string, value: string) => {
  return { type: CHANGE_INPUT, payload: { [name]: value } };
};

export const editProductActionCreator = (someParameter: any) => {
  return { type: EDIT_PRODUCT, payload: { someParameter } };
};

export const resetFormActionCreator = () => {
  return { type: RESET_FORM };
};

export const removeProductActionCreator = (id: string) => {
  return { type: REMOVE_PRODUCT, payload: { id } };
};

export const searchProductActionCreator = (someParameter: any) => {
  return { type: SEARCH_PRODUCT, payload: { someParameter } };
};
