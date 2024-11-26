// пункт 3 -> создаем отдельные редьюсеры, меняем часть store в зависимости от типа action:
import { IActions } from '../../models/models';
import { CHANGE_INPUT, FILL_FORM, RESET_FORM } from '../actions/actionTypes';

// начальные данные формы:
const initialState = { name: '', price: '' };

// редьюсер, который меняет часть store по ключу "form" - данные формы:
const formReducer = (state = initialState, action: IActions<any>) => {
  switch (action.type) {
    case CHANGE_INPUT: {
      return { ...state, ...action.payload }; // изменение части store с даными из action
    }
    case FILL_FORM: {
      return { ...action.payload }; // изменение части store с даными из action
    }
    case RESET_FORM: {
      return initialState; // полная очистка полей формы
    }
    default:
      return state; // если case не сработал, часть store не меняем
  }
};

export default formReducer;
