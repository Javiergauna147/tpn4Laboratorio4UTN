import { useEffect, useState } from 'react';
import './productos.css';
import ProductCard from '../../components/productCard/productCard';
import { getAllInstrumentos } from './productosApi';


function Productos() {
  const [instrumentos, setInstrumentos] = useState<any[]>([]);
  
    useEffect(() => {
      getPlatos();
    }, []);


  const getPlatos = async () => {
    let datos = await getAllInstrumentos();
    setInstrumentos(datos.data);
  }



  console.log("aca todo pa");
  console.log(instrumentos);

  return (
    <>
      {instrumentos.map(instrumento => {
        return <ProductCard
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
      })}
    </>
  );
}

export default Productos;
