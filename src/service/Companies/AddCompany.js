import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddCompany() {
    const baseUrl = "http://localhost:8080/api/v1/";
  let navigate = useNavigate();

  const [company, setCompany] = useState({
    Nit: "",
    Nombre: "",
    Direccion: "",
    Telefono: "",
  });

  const { nit, nombre, direccion, telefono } = company;

  const onInputChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(baseUrl + "empresa", company);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Añadir empresa</h2>

          <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                NIT
              </label>
              <input
                type={"int"}
                className="form-control"
                placeholder="Ingresa el NIT"
                name="nit"
                value={nit}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Nombre" className="form-label">
                Nombre
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingresa el nombre de la empresa"
                name="nombre"
                value={nombre}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Direccion" className="form-label">
                Direccion
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingresa la direccion de la empresa"
                name="direccion"
                value={direccion}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Telefono" className="form-label">
                Telefono
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingresa el numero de telefono"
                name="telefono"
                value={telefono}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Agregar
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancelar
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}