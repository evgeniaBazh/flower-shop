import flow1 from "../assets/flow1.jpg";
import flow2 from "../assets/flow2.jpg";
import flow3 from "../assets/flow3.jpg";
import flow4 from "../assets/flow4.jpg";
import flow5 from "../assets/flow5.jpeg";
import flow6 from "../assets/flow6.jpg";

export const getProductsByCategory = (category) => {
  //   if (category == "prefabBouquet") {
  return [
    { id: 1, img: flow1, title: "Романтика сердца", cost: "1890₽" },
    { id: 2, img: flow2, title: "Вишнёвый сад", cost: "2890₽" },
    { id: 3, img: flow3, title: "Милашка", cost: "1590₽" },
    { id: 4, img: flow4, title: "Закат", cost: "2090₽" },
    { id: 5, img: flow5, title: "Счастье", cost: "3890₽" },
    { id: 6, img: flow6, title: "Воспоминания о лете", cost: "1990₽" },
  ];
  //   } else {
  //     return [];
  //   }
};
