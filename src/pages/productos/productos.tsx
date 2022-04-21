import React from 'react';
import './productos.css';
import intrumentos from '../../data/instrumentos.json'
import ProductCard from '../../components/productCard/productCard';


function Productos() {
  let instrumentos = intrumentos.instrumentos;
  console.log(instrumentos);
  const items = instrumentos.map(instrumento => {
    return (
      <ProductCard
        id = {instrumento.id}
        modelo={instrumento.modelo}
        marca = {instrumento.marca}
        instrumento = {instrumento.instrumento}
        imagen = {instrumento.imagen}
        precio = {instrumento.precio}
        costoEnvio = {instrumento.costoEnvio}
        cantidadVendida = {instrumento.cantidadVendida}
        descripcion = {instrumento.descripcion}
      />
    );
  })

  return (
    <>
      {items}
    </>
  );
}

export default Productos;
