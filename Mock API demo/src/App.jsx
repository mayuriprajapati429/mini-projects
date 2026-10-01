import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductList from './Component/ProductList'
import Layout from './Component/Layout'
import DetailPage from './Component/DetailPage'
import AddDetails from './Component/AddDetails'
import AddNew from './Component/AddNew'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index  element={<ProductList/>}/>
    <Route path='productList' element={<ProductList/>}/>
    <Route path='productList/:id' element={<DetailPage/>}/>
    <Route path='addNew' element={<AddNew/>}/>
    <Route path='addDetails/:id' element={<AddDetails/>}/>
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
