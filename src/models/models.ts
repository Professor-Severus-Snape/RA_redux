export type TCurrentId = null | string;

export interface IActions<T> {
  type: string;
  payload?: T;
}

export interface IEditProduct {
  currentId: string;
  name: string;
  price: string;
}

export interface IForm {
  name: string;
  price: string;
}

export interface IInputName {
  name: string;
}

export interface IInputPrice {
  price: string;
}

export interface IProduct {
  id: string;
  name: string;
  price: number;
}

export interface IStore {
  currentId: TCurrentId;
  filter: string;
  form: IForm;
  products: IProduct[];
}
