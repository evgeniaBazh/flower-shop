import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Catalog from "./pages/catalog/Catalog";
import Filter from "./pages/filter/Filter";
import Delivery from "./pages/delivery/Delivery";
import Feedback from "./pages/feedback/Feedback";
import Favourites from "./pages/favourites/Favourites";
import Search from "./pages/search/Search";
import Main from "./pages/main/Main";
import Product from "./pages/product/Product";
import Category from "./pages/products/Category";

export const pathNames = {
  cart: "/cart",
  catalog: "/catalog",
  filter: "/filter",
  delivery: "/delivery",
  feedback: "/feedback",
  favourites: "/favourites",
  search: "/search",
  main: "/",
  product: "/product/:id",
  category: "/category",
};

function App() {
  const links = [
    { path: pathNames.cart, el: <Cart /> },
    { path: pathNames.catalog, el: <Catalog /> },
    { path: pathNames.filter, el: <Filter /> },
    { path: pathNames.delivery, el: <Delivery /> },
    { path: pathNames.feedback, el: <Feedback /> },
    { path: pathNames.favourites, el: <Favourites /> },
    { path: pathNames.search, el: <Search /> },
    { path: pathNames.main, el: <Main /> },
    { path: pathNames.product, el: <Product /> },
    { path: pathNames.category, el: <Category /> },
  ];
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
      </div>
      <Routes>
        {links.map((item) => (
          <Route key={item.path} path={item.path} element={item.el}></Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
