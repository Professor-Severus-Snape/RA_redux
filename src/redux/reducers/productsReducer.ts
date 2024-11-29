// пункт 3 -> создаем отдельные редьюсеры, меняем часть store в зависимости от типа action:
import { v4 } from 'uuid';
import { ADD_PRODUCT, EDIT_PRODUCT, REMOVE_PRODUCT } from '../actions/actionTypes';
import { IActions, IProduct } from '../../models/models';

// начальный массив покупок:
const initialState: IProduct[] = [
  { id: v4(), name: 'Замена стекла', price: 21000 },
  { id: v4(), name: 'Замена дисплея', price: 25000 },
  { id: v4(), name: 'Замена аккумулятора', price: 4000 },
  { id: v4(), name: 'Замена микрофона', price: 2500 },
];

// редьюсер, который меняет часть store - массив покупок:
// FIXME: почему не работает типизация ??? Как для каждого case указать тип из перечня???
// const productsReducer = (
//   state: IProduct[] = initialState,
//   action: IActions<IForm | IEditProduct | string>
// ): IProduct[] => {
  const productsReducer = (state: IProduct[] = initialState, action: IActions<any>) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      // if (!(action.payload instanceof Object)) {
      //   return state;
      // }
      const { name, price } = action.payload; // получение данных из полученного action
      return [...state, { id: v4(), name, price: Number(price) }]; // изменение части store
    }
    case EDIT_PRODUCT: {
      // if (!(action.payload instanceof Object) || !action.payload.hasOwnProperty('currentId')) {
      //   return state;
      // }
      const { currentId, name, price } = action.payload; // получение данных из полученного action
      return state.map((product) => {
        if (product.id === currentId) {
          return { ...product, name, price };
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
