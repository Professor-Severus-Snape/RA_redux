// пункт 3 -> создаем отдельные редьюсеры, меняем часть store в зависимости от типа action:
import { PayloadAction } from '@reduxjs/toolkit';
import { UnknownAction } from 'redux';
import { SET_FILTER } from '../actions/actionTypes';

// начальные данные формы:
const initialState: string = '';

// редьюсер, который меняет часть store по ключу "form" - данные формы:
const filterReducer = (
  state: string = initialState,
  action: UnknownAction | PayloadAction<string>
): string => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload as string; // устанавливает фильтр поиска
    default:
      return state; // если case не сработал, store.filter не меняем
  }
};

export default filterReducer;
