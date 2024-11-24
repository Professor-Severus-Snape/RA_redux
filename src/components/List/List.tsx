import edit from '../../assets/edit.svg';
import remove from '../../assets/remove.svg';
import './list.css';

const List = () => {
  return (
    <ul className="list">
      <li className="list__item item">
        <div className="item__product">Замена стекла</div>
        <div className="item__price">21.000</div>
        <div className="item__btns">
          <img src={edit} alt="edit" className="item__edit-btn" />
          <img src={remove} alt="remove" className="item__delete-btn" />
        </div>
      </li>

      <li className="list__item item">
        <div className="item__product">Замена дисплея</div>
        <div className="item__price">25.000</div>
        <div className="item__btns">
          <img src={edit} alt="edit" className="item__edit-btn" />
          <img src={remove} alt="remove" className="item__delete-btn" />
        </div>
      </li>

      <li className="list__item item">
        <div className="item__product">Замена аккумулятора</div>
        <div className="item__price">4.000</div>
        <div className="item__btns">
          <img src={edit} alt="edit" className="item__edit-btn" />
          <img src={remove} alt="remove" className="item__delete-btn" />
        </div>
      </li>

      <li className="list__item item">
        <div className="item__product">Замена микрофона</div>
        <div className="item__price">2.500</div>
        <div className="item__btns">
          <img src={edit} alt="edit" className="item__edit-btn" />
          <img src={remove} alt="remove" className="item__delete-btn" />
        </div>
      </li>
    </ul>
  );
};

export default List;
