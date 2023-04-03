import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Main from "./pages/Main.jsx";
import Product from "./pages/Product.jsx";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
