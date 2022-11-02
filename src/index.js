import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Pie_pagina from './Componentes/Pie_pagina';
import Navegacion from './Componentes/Navegacion';
import Encabezado from './Componentes/Encabezado';
import Formulario from './Componentes/formulario';
import Inicio_sesion from './Componentes/Inicio_sesion';
import Nuevo_usuario from './Componentes/Nuevo_usuario';
import Cargar from "./Componentes/Cargar";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Encabezado />
    <Navegacion enlace1="Inicio" articulos={<Cargar />} enlace2="Crear Articulo" formularioct={<Formulario />} enlace3="Inicio Sesión" inicio_sesion={<Inicio_sesion/>} enlace4="Crear usuario" nuevo_usuario={<Nuevo_usuario />}/>
    
    <Pie_pagina/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
