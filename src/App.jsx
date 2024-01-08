import "../Styles/App.modules.scss";
import NavBar from "../Components/NavBar";
import SideBarSlider from "../Components/SideBarSlider";
import ProductDetail from "../Pages/ProductDetail";
import EditItem from "../Pages/EditItem";

function App() {
  return (
    <>
      <NavBar />
      <SideBarSlider />
      <ProductDetail />
      <EditItem match={"03"} />
    </>
  );
}

export default App;
