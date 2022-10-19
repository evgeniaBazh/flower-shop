import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Catalog from "./pages/catalog/Catalog";
import Delivery from "./pages/delivery/Delivery";
import Feedback from "./pages/feedback/Feedback";
import Favourites from "./pages/favourites/Favourites";
import Main from "./pages/main/Main";
import Product from "./pages/product/Product";
import Category from "./pages/products/Category";
import SearchResults from "./pages/search/SearchResults";
import Footer from "./components/footer/Footer";
import CreateProduct from "./admin/cardproduct/CardProduct";

export const pathNames = {
  cart: "/cart",
  catalog: "/catalog",
  delivery: "/delivery",
  feedback: "/feedback",
  favourites: "/favourites",
  search: "/search",
  main: "/",
  product: "/product/:id",
  category: "/category",
  createProduct: "/create-product",
};

function App() {
  const links = [
    { path: pathNames.cart, el: <Cart /> },
    { path: pathNames.catalog, el: <Catalog /> },
    { path: pathNames.delivery, el: <Delivery /> },
    { path: pathNames.feedback, el: <Feedback /> },
    { path: pathNames.favourites, el: <Favourites /> },
    { path: pathNames.search, el: <SearchResults /> },
    { path: pathNames.main, el: <Main /> },
    { path: pathNames.product, el: <Product /> },
    { path: pathNames.category, el: <Category /> },
    { path: pathNames.createProduct, el: <CreateProduct /> },
  ];
  return (
    <BrowserRouter>
      <div className='App'>
        <Header></Header>
      </div>
      <Routes>
        {links.map((item) => (
          <Route key={item.path} path={item.path} element={item.el}></Route>
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
