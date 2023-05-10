import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import Titulo from './components/Titulo/Titulo';
//import Subtitulo from './components/Subtitulo/Subtitulo';
//import Descripcion from './components/Descripcion/Descripcion';
import Conversor from './components/ConversorDinero/Conversor';
import Rectangulo from './components/Rectangulo/Rectangulo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* 
    <Titulo />
    <Subtitulo />
    <Descripcion />
    <App nombre='Pepita Perez' cargo='Dueña' empresa='Facebook' url="https://randomuser.me/api/portraits/women/18.jpg" />
*/}
    <hr />
    <h1>Conversor de moneda</h1>
    <Conversor />

    <hr /><br />
    <Rectangulo />
    <br />
  </>
);

