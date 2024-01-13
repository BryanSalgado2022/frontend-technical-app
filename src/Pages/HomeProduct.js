import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  
    const baseUrl = "http://localhost:8080/api/v1/";
    const [products, setProducts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await axios.get(baseUrl + "productos");
    setProducts(result.data);
  };

  const deleteProduct = async (id) => {
    await axios.delete(baseUrl + `producto/${id}`);
    loadProducts();
  };

  return (
    <div className="container">
      <br></br>
      <Link className="btn btn-outline-primary mx-2"
        to={`/addproduct`}>
        Agregar nuevo producto
      </Link>
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
                <th scope="col">Código</th>
                <th scope="col">Nombre</th>
                <th scope="col">caracteristicas</th>
                <th scope="col">Valor</th>
                <th scope="col">Divisa</th>
                <th scope="col">Empresa</th>
            </tr>
          </thead>
          <tbody>
            
            {products.map((product) => (
              <tr>
                <td>{product.codigo}</td>
                <td>{product.nombre}</td>
                <td>{product.caracteristicas}</td>
                <td>{product.valor}</td>
                <td>{product.divisa}</td>
                <td>{product.empresa}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewproduct/${product.codigo}`}
                  >
                    Ver
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editproduct/${product.codigo}`}
                  >
                    Editar
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteProduct(product.codigo)}
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