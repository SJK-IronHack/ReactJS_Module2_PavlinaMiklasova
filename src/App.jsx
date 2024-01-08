import "../Styles/App.modules.scss";
import NavBar from "../Components/NavBar";
import SideBarSlider from "../Components/SideBarSlider";
import ProductDetail from "../Pages/ProductDetail";

function App() {
  return (
    <>
      <NavBar />
      <SideBarSlider />
      <ProductDetail />
    </>
  );
}

export default App;
