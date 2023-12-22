/// <reference types="vite/client" />

type User = {
  id: number;
  role: string;
  name: string;
};

type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
};

type FormDataParam = {
  type: string;
  name: string;
  errorType: string;
};
