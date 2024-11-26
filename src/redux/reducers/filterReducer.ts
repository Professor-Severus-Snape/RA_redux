// пункт 3 -> создаем отдельные редьюсеры, меняем часть store в зависимости от типа action:
import { IActions } from '../../models/models';
import { SET_FILTER } from '../actions/actionTypes';

// начальные данные формы:
const initialState = '';

// редьюсер, который меняет часть store по ключу "form" - данные формы:
const filterReducer = (state = initialState, action: IActions<any>) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload; // устанавливает фильтр поиска
    default:
      return state; // если case не сработал, store.filter не меняем
  }
};

export default filterReducer;
