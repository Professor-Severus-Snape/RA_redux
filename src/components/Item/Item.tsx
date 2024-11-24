import { useDispatch } from 'react-redux';
import { removeProductActionCreator } from '../../redux/actions/actionCreators';
import { IProduct } from '../../models/models';
import edit from '../../assets/edit.svg';
import remove from '../../assets/remove.svg';
import './item.css';

const Item = ({ product }: { product: IProduct }) => {
  const dispatch = useDispatch(); // используем хук на верхнем уровне
  const { id, name, price } = product; // деструктуризация данных объекта конкретной покупки

  const handleDelete = () => {
    dispatch(removeProductActionCreator(id)); // запускает все редьюсеры => изм. store => rerender
  };

  return (
    <li className="item">
      <div className="item__product">{name}</div>
      <div className="item__price">{price}</div>
      <div className="item__btns">
        <img src={edit} alt="edit" className="item__edit-btn" />
        <img src={remove} alt="remove" className="item__delete-btn" onClick={handleDelete} />
      </div>
    </li>
  );
};

export default Item;
