import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddStock() {
    const baseUrl = "http://localhost:8080/api/v1/";
  let navigate = useNavigate();

  const [stock, setStock] = useState({
    idInventario: "",
    empresa: "",
    producto: "",
  });

  const { idInventario ,empresa, producto } = stock;

  const onInputChange = (e) => {
    setStock({ ...stock, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(baseUrl + "producto", stock);
    navigate("/HomeStock");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Añadir registro al inventario</h2>

          <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
              <label htmlFor="Id" className="form-label">
                Id
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="El id del inventario"
                name="Id"
                value={idInventario}
                onChange={(e) => onInputChange(e)}
              />
          </div>
            <div className="mb-3">
              <label htmlFor="Empresa" className="form-label">
                Empresa
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Ingresa el Nit de la empresa"
                name="empresa"
                value={empresa}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Producto" className="form-label">
                Producto
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Ingresa el codigo del producto"
                name="producto"
                value={producto}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            
            <button type="submit" className="btn btn-outline-primary">
              Agregar
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/HomeStock">
              Cancelar
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}