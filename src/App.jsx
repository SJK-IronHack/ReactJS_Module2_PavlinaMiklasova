import { useState } from 'react'
import '../Styles/App.modules.scss'
import NavBar from '../Components/NavBar'
import SideBarSlider from '../Components/SideBarSlider'
import ProductDetail from '../Pages/ProductDetail'
import axios from "axios";


const API_URL = 'http://localhost:4000/products'


function App() {
  const [projects, setProjects] = useState();
  const getAllProjects = () => {
    axios
      .get(`${API_URL}/projects?_embed=tasks`)
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getAllProjects();
  }, []);


  return (
    <>
      <NavBar />
      <SideBarSlider />
      <ProductDetail />
    </>
  )
}

export default App
