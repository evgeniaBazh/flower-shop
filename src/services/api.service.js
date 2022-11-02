import flow1 from "../assets/flow1.jpg";
import flow2 from "../assets/flow2.jpg";
import flow3 from "../assets/flow3.jpg";
import flow4 from "../assets/flow4.jpg";
import flow5 from "../assets/flow5.jpeg";
import flow6 from "../assets/flow6.jpg";
import monoflow1 from "../assets/monoflow1.jpg";
import monoflow2 from "../assets/monoflow2.jpeg";
import monoflow3 from "../assets/monoflow3.jpg";
import monoflow5 from "../assets/monoflow5.jpg";
import strawflow1 from "../assets/strawflow1.jpg";
import strawflow2 from "../assets/strawflow2.jpg";
import carousel1 from "../assets/buket14.jpg";
import carousel2 from "../assets/buketi-i-fruktov.jpg";
import carousel3 from "../assets/rose.jpg";

const apiUrl = "http://localhost:8000/api";
const routes = {
  feedbacks: "feedbacks",
  products: "products",
};

const post = async (route, body) => {
  const response = await fetch(`${apiUrl}/${route}`, {
    method: "POST",
    body,
  });
  return await response.json();
};

const get = async (route) => {
  const response = await fetch(`${apiUrl}/${route}`);
  return await response.json();
};

const fakeTimeout = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), 800);
  });

export const categories = {
  sb: "sbornyj-buket",
  mb: "monobukety",
  kk: "kompozicii-s-buketom",
};

export function getCategoryName(category) {
  switch (category) {
    case categories.sb:
      return "Сборный букет";
    case categories.mb:
      return "Монобукет";
    case categories.kk:
      return "Композиция с букетом";
  }
}

export const getProductsByCategory = async (category) => {
  const data = await get(`${routes.products}/?name=${category}`);
  if (category === categories.sb) {
    return {
      title: "Сборные букеты",
      products: data,
    };
  } else if (category === categories.mb) {
    return {
      title: "Монобукеты",
      products: data,
    };
  } else if (category === categories.kk) {
    return {
      title: "Композиции с клубникой",
      products: data,
    };
  }
};

const products = [
  { id: 1, img: flow1, title: "Романтика сердца", cost: 1890 },
  { id: 2, img: flow2, title: "Вишнёвый сад", cost: 2890 },
  { id: 3, img: flow3, title: "Милашка", cost: 1590 },
  { id: 4, img: flow4, title: "Закат", cost: 2090 },
  { id: 5, img: flow5, title: "Счастье", cost: 3890 },
  { id: 6, img: flow6, title: "Воспоминания о лете", cost: 1990 },
  { id: 11, img: monoflow1, title: "Пушистое облако", cost: 2000 },
  { id: 22, img: monoflow2, title: "Первая нежность", cost: 2890 },
  { id: 33, img: monoflow3, title: "Яркий день", cost: 4590 },
  { id: 55, img: monoflow5, title: "Нежный персик", cost: 1590 },
  { id: 111, img: strawflow1, title: "Коробочка с ягодами", cost: 1890 },
  { id: 121, img: strawflow2, title: "Клубничный вкус", cost: 2600 },
];

export const carousel = [
  {
    img: carousel1,
  },
  {
    img: carousel2,
  },
  {
    img: carousel3,
  },
  {
    img: carousel2,
  },
  {
    img: carousel3,
  },
];

export const getFeedbacks = async () => {
  return await get(routes.feedbacks);
};

export const addFeedback = async (feedback) => {
  return await post(routes.feedbacks, feedback);
};

export const searchProducts = async (search) => {
  await fakeTimeout();
  return products.filter(
    (product) => product.title.toUpperCase().search(search.toUpperCase()) > -1,
  );
};

export const getProductById = async (id) => {
  await fakeTimeout();
  const product = products.find(
    ({ id: productId }) => productId === Number(id),
  );
  return product;
};

export const createProduct = async (formData) => {
  post(routes.products, formData);
};
