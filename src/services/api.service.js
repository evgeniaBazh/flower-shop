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

export const categories = {
  sb: "sbornyj-buket",
  mb: "monobukety",
  kk: "kompozicii-s-buketom",
};

export const getProductsByCategory = (category) => {
  if (category === categories.sb) {
    return {
      title: "Сборные букеты",
      products: [
        { id: 1, img: flow1, title: "Романтика сердца", cost: 1890 },
        { id: 2, img: flow2, title: "Вишнёвый сад", cost: 2890 },
        { id: 3, img: flow3, title: "Милашка", cost: 1590 },
        { id: 4, img: flow4, title: "Закат", cost: 2090 },
        { id: 5, img: flow5, title: "Счастье", cost: 3890 },
        { id: 6, img: flow6, title: "Воспоминания о лете", cost: 1990 },
      ],
    };
  } else if (category === categories.mb) {
    return {
      title: "Монобукеты",
      products: [
        { id: 11, img: monoflow1, title: "Пушистое облако", cost: 2000 },
        { id: 22, img: monoflow2, title: "Первая нежность", cost: 2890 },
        { id: 33, img: monoflow3, title: "Яркий день", cost: 4590 },
        { id: 55, img: monoflow5, title: "Нежный персик", cost: 1590 },
      ],
    };
  } else if (category === categories.kk) {
    return {
      title: "Композиции с клубникой",
      products: [
        { id: 111, img: strawflow1, title: "Коробочка с ягодами", cost: 1890 },
        { id: 121, img: strawflow2, title: "Клубничный вкус", cost: 2600 },
      ],
    };
  }
};

export const getProductById = (id) => {
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

  const product = products.find(
    ({ id: productId }) => productId === Number(id)
  );
  return product;
};
