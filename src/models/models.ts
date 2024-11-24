export interface IProduct {
  id: string;
  name: string;
  price: number;
}

export interface IStore {
  products: IProduct[];
}
