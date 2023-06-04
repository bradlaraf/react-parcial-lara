import { useEffect, useState } from "react";

function AboutUs() {
  const [listaClientes, setListaClientes] = useState([]);

  useEffect(() => {
    leerServicio();
  }, []);

  const leerServicio = () => {
    const rutaServicio = "https://servicios.campus.pe/servicioclientes.php";
    fetch(rutaServicio)
      .then((response) => response.json())
      .then((data) => {
        setListaClientes(data);
      });
  };

  const dibujarTabla = () => {
    return(
    <table className="table">
      <thead>
        <tr>
          <th>Empresa</th>
          <th>Nombre</th>
          <th>Cargo</th>
          <th>Direccion</th>
          <th>Telefono</th>
        </tr>
      </thead>
      {listaClientes.map(item=>
      <tbody>
        <tr>
            <td>{item.empresa}</td>
            <td>{item.nombres}</td>
            <td>{item.cargo}</td>
            <td>{item.direccion}</td>
            <td>{item.telefono}</td>
        </tr>
      </tbody>
      )}
    </table>
    )
  };

  return (
    <>
      <section>
        <div className="container">
          <h2>Clientes</h2>
          {dibujarTabla()}
        </div>
      </section>
    </>
  );
}

export default AboutUs;
