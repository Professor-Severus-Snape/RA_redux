// пункт 3 -> создаем отдельные редьюсеры, меняем часть store в зависимости от типа action:
import { IActions } from '../../models/models';
import { REMOVE_CURRENT_ID, SAVE_CURRENT_ID } from '../actions/actionTypes';

// начальное значение id:
const initialState = null;

// редьюсер, который меняет часть store по ключу "currentId" - id редактируемой покупки:
const currentIdReducer = (state = initialState, action: IActions<any>) => {
  switch (action.type) {
    case SAVE_CURRENT_ID: {
      return action.payload; // изменение части store с даными из action (изменение текущего id)
    }
    case REMOVE_CURRENT_ID: {
      return null; // изменение части store с даными из action (сброс текущего id)
    }
    default:
      return state; // если ни один case не сработал, store.currentId не меняем
  }
};

export default currentIdReducer;
