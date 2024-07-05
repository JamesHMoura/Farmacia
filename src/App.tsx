import React from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import ListaCategoria from './components/categoria/listaCategoria/ListaCategoria';
import FormularioCategoria from './components/categoria/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';


function App() {
  return (
    <>
   
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh] m-0'>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategoria/>} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarTema/:id" element={<DeletarCategoria />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
  
    </>
  );
}
export default App;