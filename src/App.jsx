import "../Styles/App.modules.scss";
import NavBar from "../Components/NavBar";
import SideBarSlider from "../Components/SideBarSlider";
import ProductDetail from "../Pages/ProductDetail";
import EditItem from "../Pages/EditItem";
import AddItem from "../Pages/AddItem";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="AppWrapper">
      <NavBar />
      <SideBarSlider />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/:projectId" element={<ProductDetail />} />
        <Route path="/add" element={<AddItem />} />
        <Route path="/update/:projectId" element={<EditItem />} />
        <Route path="*" element={"404 Page not found"} />
      </Routes>
    </div >
  );
}

export default App;
