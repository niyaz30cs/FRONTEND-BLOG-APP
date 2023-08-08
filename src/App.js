import React from 'react'
import "./App.css";
import NavbarMenu from './NavbarMenu/NavbarMenu'
import DataPackage from './DataStore/DataPackage';
import { BrowserRouter } from 'react-router-dom';
import Footer from './FooterComponent/Footer';

function App() {
  return (
    <div>
      <div className="head">
        <h1><span className="bend">The</span>Siren</h1>
      </div>
      <BrowserRouter>
      <NavbarMenu />
      </BrowserRouter>
      <DataPackage/>
      <Footer/>
    </div>
  )
}

export default App
