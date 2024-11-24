export interface IForm {
  name: string;
  price: string;
}

export interface IProduct {
  id: string;
  name: string;
  price: number;
}

export interface IStore {
  form: IForm;
  products: IProduct[];
}
