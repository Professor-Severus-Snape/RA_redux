import { useSelector } from 'react-redux';
import { IStore } from '../../models/models';
import Item from '../Item/Item';
import './list.css';

const List = () => {
  // получаем из store массив покупок по ключу products:
  const products = useSelector((state: IStore) => state.products);

  const items = products.map((product) => (
    <Item key={product.id} product={product} />
  ));

  return <ul className="list">{items}</ul>;
};

export default List;
