/// <reference types="vite/client" />

type User = {
  jwtToken?: string;
  userId: null | null;
  firstname: string;
  lastname: string;
  email: string;
  address: string;
  city: string;
  postcode: number;
  phoneNumber: string;
  role: string;
};

type Book = {
  itemCode: string;
  name: string;
  author: string;
  price: number;
  image: string;
  description: string;
  numberOfPages: number;
};

type InventoryItem = {
  itemCode: string;
  name: string;
  quantity: number;
  inStock: boolean;
};

type BookInventoryItem = {
  itemCode: string;
  name: string;
  author: string;
  price: number;
  image: string;
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
  image: string;
};
