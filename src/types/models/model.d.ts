/// <reference types="vite/client" />

type User = {
  id: number;
  role: string;
  name: string;
  email: string;
  address: Address;
  phone: string;
};

type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
  synopsis: string;
  inStock: number;
};

type FormDataParam = {
  type: string;
  name: string;
  errorType: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: number;
};
