import { useState } from 'react'
import '../Styles/App.modules.scss'
import NavBar from '../Components/NavBar'
import SideBarSlider from '../Components/SideBarSlider'
import ProductDetail from '../Pages/ProductDetail'


const API_URL = 'http://localhost:4000/products'


function App() {



  return (
    <>
      <NavBar />
      <SideBarSlider />
      <ProductDetail />
    </>
  )
}

export default App
