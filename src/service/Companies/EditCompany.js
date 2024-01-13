import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditCompany() {
    const baseUrl = "http://localhost:8080/api/v1/";
  let navigate = useNavigate();

  const { id } = useParams();

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

  useEffect(() => {
    loadCompany();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(baseUrl + `empresa/${id}`, company);
    navigate("/");
  };

  const loadCompany = async () => {
    const result = await axios.get(baseUrl +  `empresa/${id}`);
    setCompany(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Editar empresa</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Nit" className="form-label">
                Nit
              </label>
              <input
                type={"int"}
                className="form-control"
                placeholder="Ingresa el NIT de la empresa"
                name="Nit"
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
                placeholder="Ingresa la direccion"
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
                placeholder="Ingresa el telefono"
                name="telefono"
                value={telefono}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Actualizar
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