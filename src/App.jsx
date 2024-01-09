import "../Styles/App.modules.scss";
import NavBar from "../Components/NavBar";
import SideBarSlider from "../Components/SideBarSlider";
import ProductDetail from "../Pages/ProductDetail";
import EditItem from "../Pages/EditItem";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/projects" element={<SideBarSlider />} />
        <Route path="/projects/:projectId" element={<ProductDetail />} />
        <Route path="/projects/update" element={<EditItem />} />
        <Route path="*" element={"404 Page not found"} />
      </Routes>
    </>
  );
}

export default App;
