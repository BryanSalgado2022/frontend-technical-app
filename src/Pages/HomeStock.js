import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function HomeStock() {
  
    const baseUrl = "http://localhost:8080/api/v1/";
    const [stocks, setStock] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadStocks();
  }, []);

  const loadStocks = async () => {
    const result = await axios.get(baseUrl + "inventarios");
    setStock(result.data);
  };

  const deleteStock = async (id) => {
    await axios.delete(baseUrl + `inventario/${id}`);
    loadStocks();
  };

  return (
    <div className="container">
      <br></br>
      <Link className="btn btn-outline-primary mx-2"
        to={`/addstock`}>
        Agregar nuevo registro al inventario
      </Link>
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Empresa</th>
                <th scope="col">Producto</th>
            </tr>
          </thead>
          <tbody>
            
            {stocks.map((stock) => (
              <tr>
                <td>{stock.idInventario}</td>
                <td>{stock.empresa}</td>
                <td>{stock.producto}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewstock/${stock.idInventario}`}
                  >
                    Ver
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editstock/${stock.idInventario}`}
                  >
                    Editar
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteStock(stock.idInventario)}
                  >
                    Borrar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}