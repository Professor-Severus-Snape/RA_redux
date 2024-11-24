import { useDispatch, useSelector } from 'react-redux';
import {
  addProductActionCreator,
  changeInputActionCreator,
  resetFormActionCreator,
} from '../../redux/actions/actionCreators';
import { IStore } from '../../models/models';
import './form.css';

const Form = () => {
  const dispatch = useDispatch(); // используем хук на верхнем уровне

  // получаем из store данные полей формы по ключу form:
  const { name, price } = useSelector((state: IStore) => state.form);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target; // получаем данные о сработавшем инпуте и его содержимом
    dispatch(changeInputActionCreator(name, value)); // запуск редьюсеров => изм. store => rerender
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: добавить валидацию формы (преобразование цены в число - чтобы не было NaN)
    dispatch(addProductActionCreator(name, price)); // запуск редьюсеров => изм. store => rerender
    dispatch(resetFormActionCreator()); // сброс формы
  };

  const handleReset = () => {
    dispatch(resetFormActionCreator()); // сброс формы
  };

  return (
    <form className="form" onSubmit={handleSubmit} onReset={handleReset}>
      <label htmlFor="name" className="visually-hidden">Покупка</label>
      <input
        id="name"
        className="form__input form__input_product"
        name="name"
        placeholder="Введите покупку..."
        required
        value={name}
        onChange={handleChange}
      />

      <label htmlFor="price" className="visually-hidden">Стоимость</label>
      <input
        id="price"
        name="price"
        className="form__input form__input_price"
        placeholder="Укажите цену..."
        required
        value={price}
        onChange={handleChange}
      />

      <button className="form__button form__button_submit" type="submit">Save</button>
      <button className="form__button form__button_cancel" type="reset">Cancel</button>
    </form>
  );
};

export default Form;
