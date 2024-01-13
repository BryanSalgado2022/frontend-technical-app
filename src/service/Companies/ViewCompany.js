import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewCompany() {
    const baseUrl = "http://localhost:8080/api/v1/";
  const [company, setCompany] = useState({
    Nit: "",
    Nombre: "",
    Direccion: "",
    Telefono: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadCompany();
  }, []);

  const loadCompany = async () => {
    const result = await axios.get(baseUrl +  `empresa/${id}`);
    setCompany(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Detalles de la empresa</h2>

          <div className="card">
            <div className="card-header">
              Nit de la empresa : {company.nit}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Nombre: </b>
                  {company.nombre}
                </li>
                <li className="list-group-item">
                  <b>Direccion: </b>
                  {company.direccion}
                </li>
                <li className="list-group-item">
                  <b>Telefono: </b>
                  {company.telefono}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Regresar al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}