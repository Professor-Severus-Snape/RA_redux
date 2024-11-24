import { IProduct } from '../../models/models';
import edit from '../../assets/edit.svg';
import remove from '../../assets/remove.svg';
import './item.css';

const Item = ({ product }: { product: IProduct }) => {
  const { name, price } = product;

  return (
    <li className="list__item item">
      <div className="item__product">{name}</div>
      <div className="item__price">{price}</div>
      <div className="item__btns">
        <img src={edit} alt="edit" className="item__edit-btn" />
        <img src={remove} alt="remove" className="item__delete-btn" />
      </div>
    </li>
  );
};

export default Item;
