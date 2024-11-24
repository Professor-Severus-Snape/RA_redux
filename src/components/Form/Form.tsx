import './form.css';

const Form = () => {
  return (
    <form className="form">
      <label htmlFor="product" className="visually-hidden">Покупка</label>
      <input
        id="product"
        className="form__input form__input_product"
        placeholder="Введите покупку..."
        required
      />

      <label htmlFor="price" className="visually-hidden">Стоимость</label>
      <input
        id="price"
        className="form__input form__input_price"
        placeholder="Укажите цену..."
        required
      />

      <button className="form__button form__button_submit" type="submit">Save</button>
      <button className="form__button form__button_cancel" type="reset">Cancel</button>
    </form>
  );
};

export default Form;
