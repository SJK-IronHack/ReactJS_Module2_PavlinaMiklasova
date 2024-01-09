import "../Styles/App.modules.scss";
import NavBar from "../Components/NavBar";
import SideBarSlider from "../Components/SideBarSlider";
import ProductDetail from "../Pages/ProductDetail";
import EditItem from "../Pages/EditItem";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <SideBarSlider />
      <ProductDetail />
      <Routes>
        <EditItem />
      </Routes>
    </>
  );
}

export default App;
