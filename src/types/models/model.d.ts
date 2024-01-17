/// <reference types="vite/client" />

type User = {
  jwtToken?: string;
  userId: string | null | undefined;
  firstname: string;
  lastname: string;
  email: string;
  address: string;
  city: string;
  postcode: number;
  phoneNumber: string;
  role: string;
  inCart: CartItem[] | [];
};

type Book = {
  itemCode: string;
  name: string;
  author: string;
  price: number;
  imageLink?: string;
  description: string;
  numberOfPages: number;
};

type CartItem = {
  itemCode: string;
  name: string;
  author: string;
  price: number;
  imageLink?: string;
  description: string;
  numberOfPages: number;
  quantity: number;
};

type InventoryItem = {
  itemCode: string;
  quantity: number;
  inStock: boolean;
};

type BookInventoryItem = {
  itemCode: string;
  name: string;
  author: string;
  price: number;
  imageLink?: string;
  description: string;
  numberOfPages: number;
  quantity: number;
};

type FormDataParam = {
  type: string;
  name: string;
  errorType: string;
};

type CustomError = {
  input?: string;
  message: string;
};

type Register = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  address: string;
  city: string;
  postcode: number;
  phoneNumber: string;
};

type UserOrder = {
  orderNr: string;
  date: string;
  itemsNr: number;
  price: number;
  items: OrderItem[];
};

type OrderItem = {
  amount: number;
  id: number;
  title: string;
  author: string;
  price: number;
  imageLink: string;
};

type UserOrderDataBase = {
  id?: number;
  firstname: string;
  lastname: string;
  email: string;
  address: string;
  city: string;
  postcode: number;
  phoneNumber: string;
  orderItemsDTO?: OrderItemDataBase[];
  orderItems?: OrderItemDataBase[];
};

type OrderItemDataBase = {
  id?: number;
  itemCode: string;
  productName: string;
  price: number;
  quantity: number;
};
